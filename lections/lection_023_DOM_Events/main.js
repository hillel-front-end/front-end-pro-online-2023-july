// const boxes = document.querySelectorAll(".box");

// function toDo(boxes) {
//   console.log(boxes, "boxes");

//   for (const box of boxes) {
//     /// .... box
//   }
// }

// toDo(boxes);
// toDo(boxes);
// toDo(boxes);

// ---------------------------- Events -----------------

// const box = document.querySelector(".box");

// console.log(box, "box");

// htmlElement[oneventname] = handler;

// box.onclick = function () {
//   console.log("--click---", this);
// };

// box.onclick()

function onLoad() {
  const boxes = [...document.querySelectorAll(".box")];

  function onClickHandler(event) {
    console.log(this.className, "className");
    console.log(this.tagName, "tagNAME");

    console.dir(this, "this");
    console.dir(event.target, "target");

    console.log(event.type, "event");

    console.log(this === event.target, "this == target");
    event.target.className += " target";
    //   this.className += " target";
  }

  // boxes.forEach((box) => (box.onclick = onClickHandler));

  //   boxes[0].onclick = onClickHandler;
  // boxes[0].onmousedown = onClickHandler;
  // boxes[0].onmouseup = onClickHandler;

  // ------------ mousemove ------------

  // boxes[1].onmousemove = function (event) {
  //   console.log(event.type, "type");
  // };

  //   boxes[1].onmouseenter = function (event) {
  //     console.log(event.type, "type");
  //     this.classList.add("target");
  //   };

  //   boxes[1].onmouseleave = function (event) {
  //     console.log(event.type, "type");

  //     this.classList.remove("target");
  //   };

  // -------------

  //   boxes[2].oncontextmenu = function (event) {
  //     console.log("oncontextmenu");
  //     event.preventDefault();
  //   };

  //   var flag = true;

  //   document.querySelector("a.link").onclick = function (event) {
  //     if (flag) {
  //       event.preventDefault();
  //     }
  //   };

  //   document.querySelector("form").onsubmit = function (event) {
  //     event.preventDefault();
  //   };

  //   document.onclick = function (event) {
  //     console.log(event.target, "target");
  //   };

  boxes[0].onclick = function (event) {
    console.log(event);
    const { clientY, clientX, pageY, pageX, offsetX, offsetY } = event;
    // this.innerHTML = "<span>innerHTML</span>";

    this.innerText += `
        clientX = ${clientX}, clintY = ${clientY}
        pageX = ${pageX}, pageY = ${pageY}
        offsetX = ${offsetX}, offsetY = ${offsetY}
    `;
  };
}

/// ------------------------------------------------

window.onload = onLoad;
