// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {
  // 1. Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 2. Toggle Video Play/Pause on Click
  const heroVideo = document.querySelector('.hero-right video');
  if (heroVideo) {
    heroVideo.addEventListener('click', () => {
      heroVideo.paused ? heroVideo.play() : heroVideo.pause();
    });
  }

  // 3. Image Modal Viewer
  const modal = document.createElement('div');
  modal.id = 'imageModal';
  modal.classList.add('modal');
  modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content" id="modalImage">
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById('modalImage');
  const closeBtn = modal.querySelector('.close');

  document.querySelectorAll('.art-gallery img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 4. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));

  // 5. Dark/Light Mode Toggle
  const toggleButton = document.getElementById('themeToggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
    });
  }

  // 6. Filter Gallery by Software
  const filterButtons = document.querySelectorAll('.filter-buttons button');
  const artImages = document.querySelectorAll('.art-gallery img');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      artImages.forEach(img => {
        const software = img.getAttribute('data-software');
        img.style.display = (filter === 'all' || software === filter) ? 'block' : 'none';
      });
    });
  });

  // 7. Lazy Loading for Images
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // 8. Lazy Loading for Videos
  const lazyVideos = document.querySelectorAll('video[data-src]');
  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        const source = video.querySelector('source');
        if (source && source.dataset.src) {
          source.src = source.dataset.src;
          video.load();
        }
        observer.unobserve(video);
      }
    });
  });

  lazyVideos.forEach(video => {
    videoObserver.observe(video);
  });
});

