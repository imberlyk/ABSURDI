// script.js
document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.video');
    let currentIndex = 0;
  
    // Function to scroll to a video
    function scrollToVideo(index) {
      if (index >= 0 && index < videos.length) {
        videos[index].scrollIntoView({ behavior: 'smooth' });
        currentIndex = index;
      }
    }
  
    // Function to play/pause videos based on visibility
    function handleVisibility() {
      videos.forEach((video, index) => {
        if (index === currentIndex) {
          video.play();
        } else {
          video.pause();
        }
      });
    }
  
    // Event listener for scrolling
    document.addEventListener('wheel', (event) => {
      if (event.deltaY > 0 && currentIndex < videos.length - 1) {
        currentIndex++;
      } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }
      scrollToVideo(currentIndex);
      handleVisibility();
    });
  
    // Event listener for touch (swiping)
    let startY = 0;
    
    document.addEventListener('touchstart', (event) => {
      startY = event.touches[0].clientY;
    });
  
    document.addEventListener('touchend', (event) => {
      let endY = event.changedTouches[0].clientY;
      if (startY - endY > 50 && currentIndex < videos.length - 1) {
        // Swipe up
        currentIndex++;
      } else if (endY - startY > 50 && currentIndex > 0) {
        // Swipe down
        currentIndex--;
      }
      scrollToVideo(currentIndex);
      handleVisibility();
    });
  
    // Initial autoplay handling
    handleVisibility();
  });
  