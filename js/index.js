
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slides");
 
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndex-1].style.display = "block";
//   // dots[slideIndex-1].className += " active"; What is this?
//   slideIndex++;
// }

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