const query = new URLSearchParams(location.search);

if (query.has("a")) {
  a = query.get("a");
}

// console.log(a, "a");

var a = 12;

a = 12 + 1;

// console.log(a, "a");
// console.log(location);

// for (let key of query) {
//   console.log(key, "key");
// }

//  https://rozetka.com

// https://rogaTaKopita.com

/// ----------------------- cookies -------------------------

// console.log(document.cookie, "cookies");

// ---> XSS attak
// ---> CSRF attak

const input = document.querySelector('input[type="text"]');
const result = document.querySelector(".result");

// function onChangeHandler() {
//   if (this.value) {
//     result.innerHTML = this.value;
//   }
// }

// input.addEventListener("change", onChangeHandler);

// document.cookie = "login=valera"; //, setter cookies

console.log(document.cookie, " getter cookies");

// document.cookie = "aaa=bbb";

// ---> expires
// document.cookie = `login=Alex; expires=${new Date(
//   2023,
//   9,
//   30,
//   12,
//   0
// ).toString()}`;

// ---> max-age

document.cookie = `login=Alex; max-age=3600; samesite=strict;`;

// ---------------- localstorage or sessionstorage --------------

// console.log(localStorage, "localStorage");

// localStorage.setItem("login", "Valera"); // key , value

function onChangeHandler() {
  localStorage.setItem("login", this.value); /// set in storage
}

function onInit() {

  //   const login = localStorage.getItem("login"); /// read from storage
  
  //   if (login) {
  //     input.value = login;
  //   }

    /// --->  serialize form  <----

  const form = document.querySelector("form");

  console.log(localStorage.getItem("form-model"), "form - model"); // get JSON string

  const formModel = JSON.parse(localStorage.getItem("form-model"));

  //JSON.parse("{"login": "Valera"}")

  console.log(formModel, "formModel");

  appendModelToForm(formModel);



  //   console.log(form, "form");

  function appendModelToForm(formModel) {
    if (!formModel) return;

    Array.from(form).forEach((formItem) => {
      if (formModel[formItem.name]) {
        formItem.value = formModel[formItem.name];
      }
    });
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    let payload = {};

    Array.from(form).forEach((formItem) => {
      if (formItem.tagName.toLocaleLowerCase() === "input") {
        // payload = {
        //     ...payload,
        //     [formItem.name]: formItem.value
        // }

        payload[formItem.name] = formItem.value;
      }
    });

    updateStorage(payload);
  }

  function updateStorage(data) {
    if (!data) return;

    console.log(typeof JSON.stringify(data), "JSON");

    localStorage.setItem("form-model", JSON.stringify(data)); // ----> convert to JSON
  }

  form.addEventListener("submit", onSubmitHandler);
}

window.onload = onInit;

/// ---------------------- JSON ------------------------

// JSON.stringify() --> TO JSON
// JSON.parse() --> From JSON

// JSON поддерживает следующие типы данных:
//     Объекты { ... }
//     Массивы [ ... ]
//     Примитивы:
//     строки,
//     числа,
//     логические значения true/false,
//     null.
