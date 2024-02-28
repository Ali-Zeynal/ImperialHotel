const $ = document;
const filterMenuItems = $.querySelectorAll(".filter-item");
const roomsCard = $.querySelectorAll(".rooms-card");
// const cardContainer = $.querySelector(".rooms-card-container");
// let boxArray = [
//   {
//     id: 1,
//     class: "c2",
//     title: "room number",
//     content:
//       "Donec justo urna, malesuada a viverra ac, pellentesque vitae nunc. Aenean ac",
//   },
//   {
//     id: 2,
//     class: "c1",
//     title: "room number",
//     content:
//       "Donec justo urna, malesuada a viverra ac, pellentesque vitae nunc. Aenean ac",
//   },
//   {
//     id: 3,
//     class: "c2",
//     title: "room number",
//     content:
//       "Donec justo urna, malesuada a viverra ac, pellentesque vitae nunc. Aenean ac",
//   },
//   {
//     id: 4,
//     class: "c3",
//     title: "room number",
//     content:
//       "Donec justo urna, malesuada a viverra ac, pellentesque vitae nunc. Aenean ac",
//   },
//   {
//     id: 5,
//     class: "c3",
//     title: "room number",
//     content:
//       "Donec justo urna, malesuada a viverra ac, pellentesque vitae nunc. Aenean ac",
//   },
//   {
//     id: 6,
//     class: "c1",
//     title: "room number",
//     content:
//       "Donec justo urna, malesuada a viverra ac, pellentesque vitae nunc. Aenean ac",
//   },
//   {
//     id: 7,
//     class: "c1",
//     title: "room number",
//     content:
//       "Donec justo urna, malesuada a viverra ac, pellentesque vitae nunc. Aenean ac",
//   },
//   {
//     id: 8,
//     class: "c3",
//     title: "room number",
//     content:
//       "Donec justo urna, malesuada a viverra ac, pellentesque vitae nunc. Aenean ac",
//   },
// ];

filterMenuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.classList.contains("active")) {
      const activeFilter = $.querySelector(".filter-item .active");
      e.target.classList.add("active");
      activeFilter.classList.remove("active");
    }
    let filterId = e.target.dataset.filter;
    // boxArray.forEach((boxInfo) => {
    //   // boxInfo.class.class
    //   if (boxInfo.class == filterId) {
    //     // console.log(boxInfo.class);
    //     cardContainer.insertAdjacentHTML(
    //       "afterbegin",
    //       `<div class="rooms-card ${filterId}">
    //     <img src="img/index-2_img0${boxInfo.id}.jpg" alt="" />
    //     <div class="rooms-card-content">
    //       <h3><a href="#">room number</a></h3>
    //       <p>
    //         Donec justo urna, malesuada a viverra ac, pellentesque vitae
    //         nunc. Aenean ac
    //       </p>
    //       <a href="#" class="more-info">more info</a>
    //     </div>
    //   </div>`
    //     );
    //   }
    // });

    roomsCard.forEach((box) => {
      if (filterId == "*") {
        // box.style.display = "block";
        box.style.opacity = 1;
        displayChanger(box, "block");
      } else if (e.target.classList.contains("filter-item")) {
        //debuging click on filterMenuItems::before
        return;
      } else if (box.classList.contains(filterId)) {
        // box.style.display = "block";
        box.style.opacity = 1;
        displayChanger(box, "block");
      } else if (!box.classList.contains(filterId)) {
        // box.style.display = "none";
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
