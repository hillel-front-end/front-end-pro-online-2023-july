import observer from "../observer.js";

// function renderTemplateBlock2(product) {
//   return `
//     This is bloack - 2 with spicific HTML <br />
//          ${product.price}
//     `;
// }

// observer.subscribe(function (newItem) {
//   document.querySelector(".block-2").innerHTML = renderTemplateBlock2(newItem);
// });


observer.subscribe(function (message) {
  document.querySelector(".block-2").innerHTML = message
});