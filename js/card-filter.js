const filterMenu = $.querySelector(".filter-menu-btn");
const filterButton = $.querySelectorAll(".filter-item");
const roomsCard = $.querySelectorAll(".rooms-card");

filterButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filtering(filter);
    }
    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filtering(filter);
    });
  });
});

function updateActiveButton(newButton) {
  filterMenu.querySelector(".active").classList.remove("active");
  newButton.classList.add("active");
}

function filtering(filterRoom) {
  roomsCard.forEach((card) => {
    const cardCategory = card.dataset.card;
    console.log();

    if (filterRoom === "all" || filterRoom === cardCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
