window.onload = main;

function main() {
  const usersRows = document.querySelectorAll("table tr");

  console.log(usersRows, "usersRows");

  function onOpenUserPage(event) {
    // event.stopPropagation();

    console.log("----redirect on user profile---", this); 
    console.log(event.target, 'from TR'); // phase 2 --> target element
  }

  function onOpenEditPage(event) {
    // event.stopPropagation();
    console.log("----redirect on user edit page---", this);
    console.log(event.target, 'from BUTTON');

  }

  usersRows.forEach((userRow) => {
    userRow.onclick = onOpenUserPage;
    userRow.querySelector("button.edit").onclick = onOpenEditPage;
  });

  //   const first = document.querySelector(".first");
  //   const second = document.querySelector(".second");
  //   const second_2 = document.querySelector(".second-2");

  //   const third = document.querySelector(".third");

  document.documentElement.onclick = function () {
    // bind event on html
    console.log("click html");
  };

  const option = false;

  //   first.addEventListener(
  //     "click",
  //     function (event) {
  //       console.log("click on first");
  //       this.style.backgroundColor = "red";
  //       // console.log(event.target, "target from first");
  //       // console.log(this, "this");
  //     },
  //     option
  //   );

  //   second.addEventListener(
  //     "click",
  //     function (event) {
  //       console.log("click on second");
  //       vent.stopPropagation();
  //       this.style.backgroundColor = "green";
  //       // console.log(event.target, "target from second");
  //       // console.log(this, "this");
  //     },
  //     option
  //   );

  //   third.addEventListener(
  //     "click",
  //     function (event) {
  //       // event.preventDefault(); /
  //       // event.stopPropagation();
  //       console.log("click on third");
  //       this.style.backgroundColor = "blue";
  //       // console.log(event.target, "target from second");
  //       // console.log(this, "this");
  //     },
  //     option
  //   );
}
