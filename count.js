const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

let count = 0;

btns.forEach((item) => {
  item.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      value.style.color = "red";
    } else if (styles.contains("increase")) {
      count++;
      value.style.color = "green";
    } else {
      count = 0;
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
