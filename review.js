// const previous = document.getElementById("previous");
// const next = document.getElementById("next");
// const img = document.getElementById("img");

// const images = [
//   "./images/cece.PNG",
//   "./images/chika.jpg",
//   "./images/ego.jpeg",
//   "./images/glory.PNG",
// ];

// let clicks = 0;

// next.addEventListener("click", function () {
// //   clicks = (clicks + 1) % images.length;
// clicks =
//   img.src = images[clicks];
//   console.log(images[clicks]);
// });

// previous.addEventListener("click", function () {
//   clicks = (clicks - 1 + images.length) % images.length;
//   img.src = images[clicks];
//   console.log(images[clicks]);
// });

const img = document.getElementById("img");
const userName = document.getElementById("name");
const job = document.getElementById("job");
const description = document.getElementById("description");

const previous = document.getElementById("previous");
const next = document.getElementById("next");
const random = document.getElementById("random");

const review = [
  {
    id: 1,
    image: "./images/cece.PNG",
    name: "Cee-cee",
    job: "Content Goddess",
    description:
      "Choosing the ideal mixed breed for your family involves considering the size, temperament, and energy level. To help guide you in the decision-making process, we have compiled a list of 15 mixed-breed dogs known for their compatibility with family life.",
  },
  {
    id: 2,
    image: "./images/chika.jpg",
    name: "Chika Eze",
    job: "Fashion Icon",
    description:
      "Choosing the ideal mixed breed for your family involves considering the size, temperament, and energy level. To help guide you in the decision-making process, we have compiled a list of 15 mixed-breed dogs known for their compatibility with family life.",
  },
  {
    id: 3,
    image: "./images/ego.jpeg",
    name: "Ego Nwaekpe",
    job: "Software Developer",
    description:
      "Choosing the ideal mixed breed for your family involves considering the size, temperament, and energy level. To help guide you in the decision-making process, we have compiled a list of 15 mixed-breed dogs known for their compatibility with family life.",
  },
  {
    id: 4,
    image: "./images/glory.PNG",
    name: "Glory Ndubueze",
    job: "Political Content Creator",
    description:
      "Choosing the ideal mixed breed for your family involves considering the size, temperament, and energy level. To help guide you in the decision-making process, we have compiled a list of 15 mixed-breed dogs known for their compatibility with family life.",
  },
];

let initialContent = 0;

window.addEventListener("DOMContentLoaded", function () {
  contentDisplayOnLoad();
});

function contentDisplayOnLoad() {
  const item = review[initialContent];
  img.src = item.image;
  userName.textContent = item.name;
  job.textContent = item.job;
  description.textContent = item.description;
}

// next.addEventListener("click", function () {
//   initialContent++;
//   //   contentDisplayOnLoad(initialContent);
//   if (initialContent >= review.length) {
//     initialContent = 0;
//   }
//   contentDisplayOnLoad();
//   console.log("next");
// });

next.addEventListener("click", function () {
  initialContent = (initialContent + 1) % review.length;
  contentDisplayOnLoad();
  console.log("next");
});

previous.addEventListener("click", function () {
  initialContent--;
  if (initialContent < 0) {
    initialContent = review.length - 1;
  }
  contentDisplayOnLoad();
});

random.addEventListener("click", function () {
  initialContent = Math.floor(Math.random() * review.length);

  contentDisplayOnLoad();
});
