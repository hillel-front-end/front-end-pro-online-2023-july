//  ------------ > DOM, BOM <-------------

/*
 window = {
    document, // DOM
    // ----> BOM

    screen,
    history,
    location,
    navigator
 }

*/

// window.valera = {}

// ---------------- BOM ---------------

console.log(window.innerWidth, "innerWidth");
console.log(innerHeight, "innerHeight");

/// ---- location ----
// console.log(location.href, "location");
// console.log(location.pathname, "location.pathname");
// console.log(location.host, "location.host");
// console.log(location.search, "location.search");
// console.log(location.protocol, "location.protocol");

// ---------- history ------

// history.pushState(null, null, 'foo');
// history.go(); // 1, -1, 0
// history.back();
// history.forward()

// ---------- navigator -----------

// console.log(navigator);
// console.log(navigator.userAgent);
// console.log(navigator.appVersion);
// navigator.getBattery().then((v) => console.log(v, "v"));

const error = () => {
  console.log("--error---");
};

const success = (info) => {
  console.log(info, "info");
};

navigator.geolocation.getCurrentPosition(success, error);

// ------------

console.log(screen, "screen");

// -------------------------------------------------------

// ------- DOM -- Document Object Model -----------

/*
<html lang="en">
    <body>
        <div class="container" style="width: 100px" foo="html"></div>
        <span>234</span>
    </body>
</html>

*/

/*
{
  tagName: 'html',
  lang: 'en',
  children: [
    {
        tagName: 'body'
        children: [
            {
                tagName: 'div',
                className: 'container',
                style: 'width: 100px'
            }, 
            {}
        ]
    }
  ]
}

*/

const body = document.body;

console.dir(body, "body");
console.log(body.childNodes, "childNodes");
console.log(body.children, "children");

// const div = body.children[0];?? bad practice

// console.dir(div, "div");

// -----------------------------------------

const divs = document.getElementsByTagName("div");

console.log(divs, "divs");

const classes = document.getElementsByClassName("div-2");

console.log(classes, "classes");

[...classes].forEach((item) => {
  console.log(item, "item");
});

// ------------------

const element = document.querySelector("article > div.container");

console.log(element, "element");

const elements = document.querySelectorAll("article > div.container");

console.log(elements, "elements");

// ------------------------

const block = document.querySelector(".block");

console.log(block, "block");

// block.style.width = "100px";
// block.style.height = "200px";
// block.style.backgroundColor = "black";

setTimeout(() => {
  //   block.style.width = "100px";
  //   block.style.height = "200px";
  //   block.style.backgroundColor = "black";
 //   block.className += " active";
}, 2000);
