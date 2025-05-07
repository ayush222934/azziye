document.addEventListener('DOMContentLoaded', function () {
  // Modal Image Viewer
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeModal');

  // Modal Trigger for Images
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

  // Mouse hover effect for images (Pop-up zoom effect)
  const artGalleryImages = document.querySelectorAll('.art-gallery img');
  artGalleryImages.forEach(image => {
    image.addEventListener('mouseenter', function () {
      image.style.transform = 'scale(1.1)';
      image.style.transition = 'transform 0.3s ease-in-out';
    });

    image.addEventListener('mouseleave', function () {
      image.style.transform = 'scale(1)';
    });
  });

  // Enhanced Security Protection Script
  (function () {
    // Disable Right Click
    document.addEventListener("contextmenu", e => e.preventDefault());

    // Disable Selection, Copy, Drag
    document.addEventListener("selectstart", e => e.preventDefault());
    document.addEventListener("dragstart", e => e.preventDefault());
    document.addEventListener("copy", e => e.preventDefault());

    // Disable Key Shortcuts
    document.addEventListener("keydown", function (e) {
      const forbiddenKeys = [
        123, // F12
        73,  // I
        74,  // J
        67,  // C
        85,  // U
        83,  // S
        80   // P
      ];

      // Ctrl+Shift+Key or Ctrl+Key
      if (
        (e.ctrlKey && e.shiftKey && forbiddenKeys.includes(e.keyCode)) ||
        (e.ctrlKey && forbiddenKeys.includes(e.keyCode)) ||
        (e.metaKey && forbiddenKeys.includes(e.keyCode)) // for Mac
      ) {
        e.preventDefault();
        return false;
      }
    });

    // Advanced DevTools Trap
    let devtoolsOpened = false;
    const devtoolsTrap = () => {
      const before = performance.now();
      debugger;
      const after = performance.now();
      if (after - before > 100) {
        devtoolsOpened = true;
        window.location.href = "about:blank";
      }
    };

    // Randomized interval
    setInterval(devtoolsTrap, Math.floor(Math.random() * 3000) + 2000);
  })();
});



