/*
 **.** Event loop
 **.** Callback Hell
 **.** Promise
 **.** XmlHttpRequest with promise
 */

window.onload = function () {
  const buttonShowModal = document.querySelector("button.show");
  const prepareBtn = document.querySelector("button.prepare");

  const prepare = function () {
    const start = Date.now();
    for (let i = 0, sum = 0; i < 1e10; i++) {
      sum += i;
    }
    const finish = Date.now();

    console.log(finish - start);
  };

  prepareBtn.addEventListener("click", function () {
    console.log("-start--");
    prepare();
    console.log("finish");
  });

  buttonShowModal.addEventListener("click", function () {
    alert("Hello");
  });

  //   setTimeout(() => {
  //     console.log("11111");
  //   }, 5000);

  // httpGet('')

  //   function setTimeout(cb, time) {
  //     cb();// time

  //     console.log('finish');
  //   }

  // ------ Event Loop -------

  /// #1 -- Call stack -----

  function first() {
    console.log("3");
  }

  function second() {
    // console.log("123");
    // second(); //Uncaught RangeError: Maximum call stack size exceeded
  }

  function third() {
    console.log("-- 4 ---");
  }

  const timer1 = () => {
    console.log("1");
  };

  const timer2 = () => {
    console.log("2");
  };

  setTimeout(timer1, 3000); // 1

  setTimeout(timer2, 2999); // 2

  first(); // 3

  third(); // 4

  prepare(); // 5

  // Async: event handler, setTimeout/Interval, http request

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

  // ------ callback hell ------

  sendAjax({
    url: "http://localhost:4000",
    path: "/sign-in",
    method: "POST",
    body: JSON.stringify({ data: ["a", "b", "c"] }),
    succssCb: function (user) {
      const userId = user.id;

      sendAjax({
        url: "http://localhost:4000?userId=" + userId,
        path: "/get-friends",
        method: "POST",
        succssCb: function (friends) {

          sendAjax({
            url: "http://localhost:4000",
            path: "/get-friends",
            method: "POST",
            body: friends,
            succssCb: function (friends) {
              
              sendAjax({
                url: "http://localhost:4000",
                path: "/get-avatar",
                method: "POST",
                body: friends,
                succssCb: function (avatars) {

                  sendAjax({
                    url: "http://localhost:4000",
                    path: "/set-avatars",
                    method: "POST",
                    body: avatars,
                    succssCb: function (friends) {

                      sendAjax({
                        url: "http://localhost:4000",
                        path: "/get-friends",
                        method: "POST",
                        body: friends,
                        succssCb: function (friends) {
    
                        },

                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    },
  });
};


/// ----- Promise --------