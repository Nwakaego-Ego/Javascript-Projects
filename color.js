const btn = document.querySelector(".btn");
const colorType = document.querySelector(".color");

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomColor()];
  }
  document.body.style.backgroundColor = hexColor;
  colorType.textContent = hexColor;
});

function randomColor() {
  return Math.floor(Math.random() * hex.length);
}
