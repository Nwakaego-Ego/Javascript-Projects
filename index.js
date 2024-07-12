const btn = document.querySelector(".btn");
const colorType = document.querySelector(".color");

btn.addEventListener("click", function () {
  const color = ["red", "blue", "yellow", "#125D73", "rgb (209, 27, 21)"];
  const randomColor = Math.floor(Math.random() * color.length);
  document.body.style.backgroundColor = color[randomColor];
  colorType.textContent = color[randomColor];
});

// function randomColor () {
// Math.random().color.length;
// }
