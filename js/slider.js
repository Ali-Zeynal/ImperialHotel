const slideImage = $.querySelector(".slides > img");
const imageContainer = $.querySelector(".slides");
const nextSlideButton = $.querySelector(".next-slide");
const prevSlideButton = $.querySelector(".prev-slide");
const slideContainer = $.querySelector(".slide-container");
const slideDots = $.querySelectorAll(".dot");

let slidesArray = [
  "img/index_slide01.jpg",
  "img/index_slide02.jpg",
  "img/index_slide03.jpg",
];

let slidesArrayIndex = 0;

function nextSlide() {
  slidesArrayIndex++;
  if (slidesArrayIndex > slidesArray.length - 1) {
    slidesArrayIndex = 0;
  }
  setTimeout(() => {
    slideImage.style.animation = "";
  }, 500);
  slideImage.style.animation = "fade 2s";
  slideImage.setAttribute("src", slidesArray[slidesArrayIndex]);
  indicators();
}

function prevSlide() {
  slidesArrayIndex--;
  if (slidesArrayIndex < 0) {
    slidesArrayIndex = slidesArray.length - 1;
  }
  slideImage.setAttribute("src", slidesArray[slidesArrayIndex]);

  indicators();
}
function autoSlide() {
  setAutoSliding = setInterval(() => {
    nextSlide();
    indicators();
  }, 3000);
}
window.addEventListener("load", () => {
  autoSlide();
});
prevSlideButton.addEventListener("click", prevSlide);
nextSlideButton.addEventListener("click", nextSlide);
slideContainer.addEventListener("mouseover", function () {
  clearInterval(setAutoSliding);
});
slideContainer.addEventListener("mouseout", autoSlide);
function indicators() {
  for (let i = 0; i < slideDots.length; i++) {
    slideDots[i].className = slideDots[i].className.replace(" dot-active", " ");
  }
  slideDots[slidesArrayIndex].classList.add("dot-active");
}
slideDots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    switchImage(e.target);
  });
  dot.addEventListener("touchEnd", (e) => {
    switchImage(e.target);
  });
});
function switchImage(dotElem) {
  $.querySelector(".dot-active").classList.remove("dot-active");
  let dotId = dotElem.getAttribute("attr");
  slideImage.setAttribute("src", slidesArray[dotId]);
  dotElem.classList.add("dot-active");
}
