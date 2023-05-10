/* Make hero images slide */
/* Could not figure out how to make a smooth transition */
/* Slides happen instantly... oh well */

var heroContainers = document.querySelectorAll(".slider .hero-container");
var currentContainer = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  heroContainers[currentContainer].style.display = "none";
  currentContainer = (currentContainer + 1) % heroContainers.length;
  heroContainers[currentContainer].style.display = "block";
}
