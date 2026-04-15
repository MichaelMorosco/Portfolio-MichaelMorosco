let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Repeat every 3 seconds
  setTimeout(showSlides, 3000);
}

// Start slideshow AFTER page loads
document.addEventListener("DOMContentLoaded", showSlides);