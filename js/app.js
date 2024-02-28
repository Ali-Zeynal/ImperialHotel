const MobileMenuButton = document.querySelector(".nav-toggle-label");
const toTopBtn = document.querySelector(".toTop-btn");
let navMenuItem = document.querySelectorAll(".nav-menu li a");

MobileMenuButton.addEventListener("click", () => {
  cover.classList.toggle("covering");
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 380 && document.documentElement.clientWidth > 600) {
    toTopBtn.style.opacity = "1";
  } else {
    toTopBtn.style.opacity = "0";
  }
});

toTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

navMenuItem.forEach((item) => {
  if (window.location.pathname.slice(1) == item.attributes.href.nodeValue) {
    item.style.color = "rgb(248, 170, 72)";
  } else if (!window.location.pathname.slice(1)) {
    navMenuItem[0].style.color = "rgb(248, 170, 72)";
  }
});
