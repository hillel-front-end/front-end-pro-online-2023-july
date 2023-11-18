import observer from "../observer.js";

// function renderTemplateBlock3(product) {
//   return `
//     This is bloack - 3 with spicific HTML <br />
//     ${JSON.stringify(product)}
//     `;
// }

// observer.subscribe(function (newItem) {
//   document.querySelector(".block-3").innerHTML = renderTemplateBlock3(newItem);
// });

observer.subscribe(
  (message) => (document.querySelector(".block-3").innerHTML = message)
);



// Publis Subscriber