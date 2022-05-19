//Sets the height of the carousel container to match the height of the images
const adjustBanner = () => {
  console.log("test");
  const carousel = document.getElementsByClassName("carousel")[0];
  carousel.style.height = window.getComputedStyle(document.getElementsByClassName("slides")[0].children[0])["height"];  
}

adjustBanner();
screen.orientation.addEventListener("change",adjustBanner);

//Allows the user to manually switch between banners
var currentSlide = 0;
const switchSlides = (amount) => {
  const slides = document.getElementsByClassName("slides");
  lastSlide = currentSlide;
  currentSlide += amount;
  if(currentSlide >= slides.length) {
    currentSlide = 0;
  }else if(currentSlide < 0) {
    currentSlide = slides.length-1;
  }
  slides[lastSlide].style.opacity = 0;
  slides[lastSlide].style.zIndex = -1;
  slides[currentSlide].style.opacity = 1;
  slides[currentSlide].style.zIndex= 1;
}

//Allows the carousel to switch on its own
var interval;
const startInterval = () => {
  interval = setInterval(() => {switchSlides(1)}, 5000);
}

const stopInterval = () => {clearInterval(interval);}
window.addEventListener("DOMContentLoaded",startInterval);

document.getElementsByClassName("prev")[0].addEventListener("mousedown",()=>{
  switchSlides(-1);
  stopInterval();
  startInterval();
});
document.getElementsByClassName("next")[0].addEventListener("mousedown",()=>{
  switchSlides(1);
  stopInterval();
  startInterval();
})