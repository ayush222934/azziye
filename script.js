document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded successfully.');

  // Autoplay video setup
  const video = document.querySelector('video');
  if (video) {
    video.loop = true;
    video.muted = true;
    video.play().catch(err => {
      console.warn('Video autoplay blocked:', err);
    });
  }
});
