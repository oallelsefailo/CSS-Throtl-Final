/* Make hero images slide */
/* Could not figure out how to make a smooth transition */
/* Slides happen instantly... oh well */

var heroContainers = document.querySelectorAll(".slider .hero-container");
var currentContainer = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  var nextContainer = (currentContainer + 1) % heroContainers.length;
  heroContainers[currentContainer].style.transform = "translateX(-100%)";
  heroContainers[nextContainer].style.transform = "translateX(0)";
  currentContainer = nextContainer;
}
