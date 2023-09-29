const ramdom = (min, max) => Math.round(Math.random() * (max - min) + min);
const randomColor = (min, max) =>
  `rgb(${ramdom(min, max)}, ${ramdom(min, max)}, ${ramdom(min, max)})`;

// const box = document.querySelector(".box");
const boxes = [...document.querySelectorAll(".box")];

console.log(boxes, "boxes");

function move(box) {
  const shiftX = window.innerWidth - box.clientWidth;
  const shiftY = window.innerHeight - box.clientHeight;

  box.style.left = `${ramdom(0, shiftX)}px`;
  box.style.top = `${ramdom(0, shiftY)}px`;

  box.style.backgroundColor = randomColor(0, 255);
}

setInterval(() => {
  boxes.forEach((box) => move(box));
}, 2000);
