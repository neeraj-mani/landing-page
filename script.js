let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let signupForm = document.querySelector(".signup-form");
let emailField = document.querySelector(".email");
let fullNameField = document.querySelector(".fullName");
let passField = document.querySelector(".pass");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    emailField.value.indexOf("@") > 1 &&
    emailField.value.indexOf(".") > emailField.value.indexOf("@") + 1
  ) {
  } else {
    alert("Email is not Valid!");
    return;
  }

  if (fullNameField.value.length < 1) {
    alert("Name should not be empty!");
    return;
  }

  if (
    !passField.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}/g)
  ) {
    alert(
      "Password must contain 1 uppercase, 1 lowercase, 1 number and 1 special character and must have minimum 6 characters long!"
    );
    return;
  }
  alert("Signed up successfully!");
});
