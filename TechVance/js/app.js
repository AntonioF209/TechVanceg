// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll animations
  function handleScrollAnimations() {
    const grademasterImg = document.querySelector('.grademaster');
  
    if (isInViewport(grademasterImg)) {
      grademasterImg.style.opacity = 1;
      grademasterImg.style.transform = 'scale(1)';
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimations);
  