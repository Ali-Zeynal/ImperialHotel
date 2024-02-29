const $ = document;
const MobileMenuButton = $.querySelector(".nav-toggle-label");
const MobileMenuCheckbox = $.querySelector("#nav-toggle");
const toTopBtn = $.querySelector(".toTop-btn");
let navMenuItem = $.querySelectorAll(".nav-menu li a");
let menuDarkCover = $.querySelector("#cover");
MobileMenuButton.addEventListener("click", () => {
  menuDarkCover.classList.toggle("covering");
});
menuDarkCover.addEventListener("click", () => {
  MobileMenuCheckbox.click();
  menuDarkCover.classList.toggle("covering");
});
window.addEventListener("scroll", function () {
  if (window.scrollY > 380 && $.documentElement.clientWidth > 600) {
    toTopBtn.style.opacity = "1";
  } else {
    toTopBtn.style.opacity = "0";
  }
});

toTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
navMenuItem.forEach((item) => {
  if (window.location.pathname.slice(15) == item.attributes.href.nodeValue) {
    item.style.color = "rgb(248, 170, 72)";
  } else if (!window.location.pathname.slice(15)) {
    navMenuItem[0].style.color = "rgb(248, 170, 72)";
  }
});

window.addEventListener("load", function () {
  $.querySelector(".loader").style.display = "none";
  $.querySelector("body").style.visibility = "visible";
});
