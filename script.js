
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');
  
    let currentIndex = 0;
    
    function scrollToVideo(index) {
      if (index >= 0 && index < videos.length) {
        videos[index].scrollIntoView({ behavior: 'smooth' });
        currentIndex = index;
      }
    }
  
    document.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        scrollToVideo(currentIndex + 1);
      } else {
        scrollToVideo(currentIndex - 1);
      }
    });
  });
  