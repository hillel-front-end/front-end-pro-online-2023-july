// SPA -- Single Page Application

// XMLHttpRequest, fetch api
// Axios

// const xhr = new XMLHttpRequest();

// xhr.onload = function () {
//   console.log("onload", JSON.parse(xhr.responseText));
// };

// xhr.onerror = function (error) {
//   console.log(error, "error");
// };

// xhr.open("PUT", "http://localhost:4000/test"); // simple methods: GET, POST, HEAD

// const token = Date.now();

// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.setRequestHeader("Login", "Valera");
// xhr.setRequestHeader("Authorization", `Barrer ${token}`);

// xhr.send();

// -------------------

function sendAjax({ url = "", path = "", method, body, succssCb, errorCb }) {
  const xhr = new XMLHttpRequest();

  if (succssCb) xhr.onload = () => succssCb(xhr);

  if (errorCb) xhr.onerror = () => errorCb(xhr);
  //   console.log(`${url}${path}`, "`${url}${path}`");

  xhr.open(method, `${url}${path}`);

  if (method.toLowerCase() === "get" || method.toLowerCase() === "head") {
    xhr.send();
    return;
  }

  xhr.send(body);
}

const updateView = (xhr) => {
  console.log(xhr, "xhr");
  console.log(xhr.responseText);

  document.body.innerHTML = JSON.stringify(
    JSON.parse(xhr.responseText),
    null,
    4
  );
};

document.querySelector("button").addEventListener("click", function () {
  sendAjax({
    url: "http://localhost:4000",
    path: "/test",
    method: "POST",
    body: JSON.stringify({ data: ["a", "b", "c"] }),
    succssCb: updateView,
  });
});
