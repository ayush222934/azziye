document.addEventListener('DOMContentLoaded', () => {
  // Showcase Videos
  const showcaseVideos = [
    { src: 'videos/showcase1.mp4', thumbnail: 'thumbnails/showcase1.jpg' },
    { src: 'videos/showcase2.mp4', thumbnail: 'thumbnails/showcase2.jpg' },
    { src: 'videos/showcase3.mp4', thumbnail: 'thumbnails/showcase3.jpg' },
    { src: 'videos/showcase4.mp4', thumbnail: 'thumbnails/showcase4.jpg' },
  ];

  const videoGrid = document.getElementById('videoGrid');
  showcaseVideos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    const thumb = document.createElement('img');
    thumb.src = video.thumbnail;
    thumb.alt = 'Video Thumbnail';
    thumb.className = 'thumbnail';

    thumb.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <video src="${video.src}" controls autoplay></video>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector('.close').onclick = () => modal.remove();
    });

    videoCard.appendChild(thumb);
    videoGrid.appendChild(videoCard);
  });

  // Photo Edits
  const photoEdits = [
    { src: 'assets/photoshop/car.jpg', alt: 'Car Edit' },
    { src: 'assets/photo/photo2.jpg', alt: 'Edit 2' },
    { src: 'assets/photo/photo3.jpg', alt: 'Edit 3' },
    { src: 'assets/photo/photo4.jpg', alt: 'Edit 4' }
  ];

  const photoContainer = document.getElementById('photoEdits');
  photoEdits.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.className = 'thumbnail';

    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${photo.src}" />
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.close').onclick = () => modal.remove();
    });

    photoContainer.appendChild(img);
  });

  // Blender Renders
  const blenderRenders = [
    { src: 'assets/blender/0008.png', alt: '0008 1' },
    { src: 'assets/blender/render2.jpg', alt: 'Render 2' },
    { src: 'assets/blender/render3.jpg', alt: 'Render 3' },
    { src: 'assets/blender/render4.jpg', alt: 'Render 4' }
  ];

  const renderContainer = document.getElementById('blenderRenders');
  blenderRenders.forEach(render => {
    const img = document.createElement('img');
    img.src = render.src;
    img.alt = render.alt;
    img.className = 'thumbnail';

    img.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <img src="${render.src}" />
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.close').onclick = () => modal.remove();
    });

    renderContainer.appendChild(img);
  });
});
