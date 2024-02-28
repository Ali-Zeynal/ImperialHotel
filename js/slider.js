const slidesImage = document.querySelectorAll(".slides img");
const nextSlideButton = document.querySelector(".next-slide");
const prevSlideButton = document.querySelector(".prev-slide");
const slideContainer = document.querySelector(".slide-container");
const slideDots = document.querySelectorAll(".dot");
let slideCounter = 0;
function prevSlide() {
  slidesImage[slideCounter].style.animation = "prev1 2s ease-out forwards";
  if (slideCounter == 0) {
    slideCounter = slidesImage.length - 1;
  } else {
    slideCounter--;
  }
  slidesImage[slideCounter].style.animation = "prev2 2s ease-out forwards";
  indicators();
}
function nextSlide() {
  slidesImage[slideCounter].style.animation = "next1 2s ease-out forwards";
  if (slideCounter >= slidesImage.length - 1) {
    slideCounter = 0;
  } else {
    slideCounter++;
  }
  slidesImage[slideCounter].style.animation = "next2 2s ease-out forwards";
  indicators();
}
function autoSliding() {
  autoSlide = setInterval(autoNextSlide, 4000);
  function autoNextSlide() {
    nextSlide();
    indicators();
  }
}
autoSliding();
slideContainer.addEventListener("mouseover", function () {
  clearInterval(autoSlide);
});

slideContainer.addEventListener("mouseout", autoSliding);
prevSlideButton.addEventListener("click", prevSlide);
nextSlideButton.addEventListener("click", nextSlide);
function indicators() {
  for (let i = 0; i < slideDots.length; i++) {
    slideDots[i].className = slideDots[i].className.replace(" dot-active", " ");
  }
  slideDots[slideCounter].className += " dot-active";
}
function switchImage(currentImage) {
  currentImage.classList.add("dot-active");
  let imageId = currentImage.getAttribute("attr");
  if (imageId > slideCounter) {
    slidesImage[slideCounter].style.animation = "next1 1.5s ease-out forwards";
    slideCounter = imageId;
    slidesImage[slideCounter].style.animation = "next2 1.5s ease-out forwards";
  } else if (imageId == slideCounter) {
    return;
  } else {
    slidesImage[slideCounter].style.animation = "prev1 1.5s ease-out forwards";
    slideCounter = imageId;
    slidesImage[slideCounter].style.animation = "prev2 1.5s ease-out forwards";
  }
  indicators();
}

