import observer from "../observer.js";

// function renderTemplateBlock1(product) {
//   return `
//     This is bloack - 1 with spicific HTML <br />
//     ${product.title}
//     `;
// }

// observer.subscribe(function (newItem) {
//   document.querySelector(".block-1").innerHTML = renderTemplateBlock1(newItem);
// });

observer.subscribe(function (message) {
  document.querySelector(".block-1").innerHTML = message;
});
