// Show a welcome message once
window.addEventListener('DOMContentLoaded', () => {
  alert("Welcome to Ayush's Portfolio!\nExplore my works and skills below.");
});

// Modal Image Viewer
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeModal');

  document.querySelectorAll('.modal-trigger').forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = 'flex';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Reveal animation
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    reveals.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < trigger) section.classList.add('active');
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});


