const formLabel = $.querySelectorAll("fieldset label");
const nameInput = $.querySelector(".name > input");
const emailInput = $.querySelector(".email > input");
const phoneInput = $.querySelector(".phone > input");
const messageArea = $.querySelector(".message textarea");
const formBottun = $.querySelectorAll(".contact-form-btn");
const formModal = $.querySelector(".form-modal");
const modalTitle = $.querySelector(".modal-title");
const modalBody = $.querySelector(".modal-body");
let darkCover = $.querySelector("#cover");

let errorsNumber = 0;

nameInput.addEventListener("focus", (e) => {
  if (e.target.parentNode.classList.contains("empty")) {
    e.target.parentNode.classList.remove("empty");
  } else if (e.target.parentNode.classList.contains("invalid")) {
    e.target.parentNode.classList.remove("invalid");
  }
});

emailInput.addEventListener("focus", (e) => {
  if (e.target.parentNode.classList.contains("empty")) {
    e.target.parentNode.classList.remove("empty");
  } else if (e.target.parentNode.classList.contains("invalid")) {
    e.target.parentNode.classList.remove("invalid");
  }
});

phoneInput.addEventListener("focus", (e) => {
  if (e.target.parentNode.classList.contains("empty")) {
    e.target.parentNode.classList.remove("empty");
  } else if (e.target.parentNode.classList.contains("invalid")) {
    e.target.parentNode.classList.remove("invalid");
  }
});

messageArea.addEventListener("focus", (e) => {
  if (e.target.parentNode.classList.contains("empty")) {
    e.target.parentNode.classList.remove("empty");
  } else if (e.target.parentNode.classList.contains("invalid")) {
    e.target.parentNode.classList.remove("invalid");
  }
});

nameInput.addEventListener("keyup", () => {
  nameInput.addEventListener("focusout", (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.add("empty");
    } else if (!/^[a-zA-z]{3,}/.test(e.target.value)) {
      e.target.parentNode.classList.add("invalid");
    }
  });
});

emailInput.addEventListener("keyup", () => {
  emailInput.addEventListener("focusout", (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.add("empty");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
      e.target.parentNode.classList.add("invalid");
    }
  });
});

phoneInput.addEventListener("keyup", () => {
  phoneInput.addEventListener("focusout", (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.add("empty");
    } else if (!/(\+98|0)?9\d{9}/.test(e.target.value)) {
      e.target.parentNode.classList.add("invalid");
    }
  });
});

messageArea.addEventListener("keyup", () => {
  messageArea.addEventListener("focusout", (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.add("empty");
    } else if (e.target.value.length < 3) {
      e.target.parentNode.classList.add("invalid");
    }
  });
});

function clearInputHandler() {
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  messageArea.value = "";
  formLabel.forEach((label) => {
    label.classList.remove("empty");
    label.classList.remove("invalid");
  });
  errorsNumber = 0;
}

formBottun.forEach((btn) => {
  if (btn.dataset.type == "reset") {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      clearInputHandler();
    });
  } else if (btn.dataset.type == "submit") {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      darkCover.classList.toggle("covering");
      if (window.innerWidth <= 600) {
        formModal.style.top = "calc(100vh / 2 - 75px)";
      } else {
        formModal.style.top = "5%";
      }

      formLabel.forEach((label) => {
        if (
          label.classList.contains("empty") ||
          label.classList.contains("invalid") ||
          !label.firstElementChild.value
        ) {
          errorsNumber++;
        }
      });
      if (errorsNumber > 0) {
        modalTitle.innerHTML = "Error";
        formModal.classList.remove("success");
        formModal.classList.add("error");
        modalBody.innerHTML =
          "Your message was not sent <br> please check your input and try again.";
      } else {
        modalTitle.innerHTML = "Success";
        formModal.classList.remove("error");
        formModal.classList.add("success");
        modalBody.innerHTML = "Your message has been sent";
      }
      clearInputHandler();
    });
  }
});

$.querySelector(".close-modal").addEventListener("click", () => {
  formModal.style.top = "-150px";
  darkCover.classList.toggle("covering");
});

darkCover.addEventListener("click", () => {
  formModal.style.top = "-150px";
  if (MobileMenuCheckbox.checked) {
    MobileMenuCheckbox.click();
  }
});
