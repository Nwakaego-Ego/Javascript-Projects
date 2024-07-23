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
const navLink = document.getElementById("navLink");

hamburger.addEventListener("click", function () {
  if (navLink.classList.contains("show")) {
    navLink.classList.remove("show");
  } else {
    navLink.classList.add("show");
  }
});
