function open() {
  console.log("--- open ---");
}

function edit() {
  console.log("--- edit ---");
}

function remove() {
  console.log("--- remove ---");
}

function update() {
  console.log("---update---");
}

const list = document.querySelector(".list");
// const listItems = list.querySelectorAll(".list__item");

// const openItem = document.querySelector('[data-action="open"]');
// const editItem = document.querySelector('[data-action="edit"]');

// --->> case : 1

// const bindEvent = (item) => {
//     switch (item.dataset.action) {
//       case "edit": {
//         item.addEventListener("click", edit);
//         break;
//       }
//       case "open": {
//         item.addEventListener("click", open);
//         break;
//       }
//       case "remove": {
//         item.addEventListener("click", remove);
//         break;
//       }
//       case "update": {
//         item.addEventListener("click", update);
//         break;
//       }
//     }
//   };

// listItems.forEach(bindEvent);

// ---> case: 2

// const callHandler = (actionType) => {
//     switch (actionType) {
//       case "edit": {
//         edit();
//         break;
//       }
//       case "open": {
//         open();
//         break;
//       }
//       case "remove": {
//         remove();
//         break;
//       }
//       case "update": {
//         update();
//         break;
//       }
//     }
//   };

// list.addEventListener("click", function (event) {
//   console.log("---click from list --", this);
//   console.log(event.target, 'target');
//   const item = event.target;

//   if (item.dataset.action) {
//     callHandler(item.dataset.action);
//   }
// });

/// case 3: --->

const actions = {
  open,
  edit,
  remove,
  update,
};

// console.log(actions, "actions");

list.addEventListener("click", function (event) {
  //   console.log("---click from list --", this);
  //   console.log(event.target, "target");

  const item = event.target; // ---> Event Delegation

  //   console.log(actions, "actions");
  //   console.log(item.dataset.action, "item.dataset.action");
  //   console.log(actions[item.dataset.action], "actions[item.dataset.action]");

  if (actions[item.dataset.action]) {
    actions[item.dataset.action]();
  }
});

//mock: send request to server
setTimeout(() => {
  const config = { title: "update user", action: "update" }; // from server
  const li = document.createElement("li");

  li.innerText = config.title;
  li.classList.add("list__item");
  li.dataset.action = config.action;

  //   bindEvent(li); // from case 1

  list.append(li);
}, 3000);
