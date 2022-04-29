console.log("connected");

let header = document.getElementById("header");
let toggle = document.getElementById("toggle");
let navbar = document.getElementById("navbar");

document.onclick = (e) => {
  if (
    e.target.id !== "header" &&
    e.target.id !== "toggle" &&
    e.target.id !== "navbar"
  ) {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
};
toggle.onclick = () => {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};
