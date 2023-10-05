window.onload = function () {
  const boxes = document.querySelectorAll(".box");

  const onDragAndDrop = (box) => {
    const coords = {
      offsetX: 0,
      offsetY: 0,
    };

    function onMousemoveHandler(event) {
      const { clientX, clientY } = event;

      box.style.top = clientY - coords.offsetY + "px";
      box.style.left = clientX - coords.offsetX + "px";
    }

    function onMouseupHandler() {
      window.onmousemove = null;
    }

    function onMosuedownHandler({ offsetX, offsetY }) {
      coords.offsetX = offsetX;
      coords.offsetY = offsetY;
      window.onmousemove = onMousemoveHandler;
    }

    box.onmousedown = onMosuedownHandler;
    window.onmouseup = onMouseupHandler;
  };

  boxes.forEach((box) => onDragAndDrop(box));
};
