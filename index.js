// const hamburger = document.getElementById("hamburger");
// const navLink = document.getElementById("navLink");

// hamburger.addEventListener("click", function () {
//   if (navLink.classList.contains("show")) {
//     navLink.classList.remove("show");
//   } else {
//     navLink.classList.add("show");
//   }
// });

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const exit = document.getElementById("exit");

hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("open");
  this.classList.toggle("rotate");
});

exit.addEventListener("click", function () {
  sidebar.classList.toggle("open");
  this.classList.toggle("rotate");
});

// document.addEventListener("DOMContentLoaded", function () {
//   const hamburger = document.getElementById("hamburger");

//   hamburger.addEventListener("click", function () {
//     this.classList.toggle("rotate");
//   });
// });
