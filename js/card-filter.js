const $ = document;
const filterMenuItems = $.querySelectorAll(".filter-item");
const roomsCard = $.querySelectorAll(".rooms-card");

filterMenuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.classList.contains("active")) {
      const activeFilter = $.querySelector(".filter-item .active");
      e.target.classList.add("active");
      activeFilter.classList.remove("active");
    }
    let filterId = e.target.dataset.filter;
    roomsCard.forEach((box) => {
      if (filterId == "*") {
        box.style.opacity = 1;
        displayChanger(box, "block");
      } else if (e.target.classList.contains("filter-item")) {
        return;
      } else if (box.classList.contains(filterId)) {
        box.style.opacity = 1;
        displayChanger(box, "block");
      } else if (!box.classList.contains(filterId)) {
        box.style.opacity = 0;
        displayChanger(box, "none");
      }
    });
  });
});

function displayChanger(box, value) {
  setTimeout(() => {
    box.style.display = value;
  }, 250);
}
