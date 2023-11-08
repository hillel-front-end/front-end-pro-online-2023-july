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

// sendAjax({
//   url: "http://localhost:4000",
//   path: "/sign-in",
//   method: "POST",
//   body: JSON.stringify({ data: ["a", "b", "c"] }),
//   succssCb: function (user) {
//     const userId = user.id;

//     sendAjax({
//         url: "http://localhost:4000?userId=" + userId,
//         path: "/get-friends",
//         method: "POST",
//         succssCb: function (friends) {},
//     });

//   },
// });

//--------- Promise -----------

console.log(1, "1");
const flag = true;

// step-0
const promise = new Promise((resolve, reject) => {
  //   console.log(2, "2");
  //   console.log(resolve, "resolve");
  //   console.log(reject, "reject");
  setTimeout(() => {
    if (flag) {
      resolve();
      //   reject();
    } else {
      reject();
    }
  }, 2000);
});

// console.log(3, "3");

// console.log(promise, "promise");

// [[PromiseState]]: Pedding(0), fulFilled(1) or Rejected (1)
// [[PromiseResult]]: ?

// step-1

/*
    throw new Error();
    new Promise((resolve, reject) => reject())
    Promise.reject()
*/

const promise2 = promise.then(
  () => {
    // console.log("resolve 1");
    // console.log(promise, "promise");
    // console.log(promise2, "promise2");
    //foo // execute error
    // throw new Error("Hello world");

    console.log("---work---");
  },
  () => {
    // console.log("reject 1");
    // console.log(promise, "promise1");
    // debugger;
  }
);

// step-2

// console.log(promise2, "promise2");
const promise3 = promise2.then(
  () => {
    // console.log("resolve 2");
    // console.log(promise2, "promise2");
  },
  () => {
    // throw new Error("Hello world");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (false) {
        //     resolve();
        //     return;
        // }

        reject();
      });
    });
  }
);

// step - 3
promise3.then(
  () => {
    // console.log("resolve 3");
  },
  (error) => {
    // console.log("--reject3--", error);
  }
);

/// ----------
console.log("------- Catch -------");

const flag2 = false;

const promise_2_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (flag2) {
      resolve();
    } else {
      reject();
    }
  }, 2000);
});

promise_2_1
  .then(() => console.log("resolve 1"))
  .then(null, (error) => {
    console.log(error, "error");
  })
  .then(() => console.log("resolve 2"))
  .then(() => console.log("resolve 3"))
  .catch((error) => {
    console.log(error, "error");
  });


  ///----------