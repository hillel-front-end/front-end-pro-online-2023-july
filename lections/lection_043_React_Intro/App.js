import './App.css';

import React from "react";


/*
Virtual DOM vs DOM


<div>
  <span> 123 </span>
</div>

// React
const a = {};

{
  tagName: 'div',
  children: [
   {
     tagName: 'span'
     innerText: '123'
     ...
   }
  ]
}

// React DOM

Display template

/--- #2

<div>
  <span> some text </span>
</div>

{
  tagName: 'div',
  children: [
   {
     tagName: 'span'
     innerText: 'some text'
     ...
   }
  ]
}

// React DOM --display Diff

 */

function App() {
  // const obj = React.createElement(
  //     'div',
  //     { className: 'app'},
  //     React.createElement('section', {}, 'Hello'),
  //     React.createElement('div', {}, 'World'),
  // );


  const obj2 = <div className="app">
    <section>Hello</section>
    <div>World</div>
  </div>

  // console.log(obj, 'obj');
  console.log(obj2, 'obj2')


  // return obj2;

  // ---------------------------
  // --->> mistake --> only one root element
  // return (
  //       <div>1</div>
  //       <div>2</div>
  // )



  //----------- React Dom

  /*
  // JSX + REACT + React DOM

  <div> 123 </div>

  // JS Native
    const div = document.createElement('div')
    div.innerText = 123;

    document.getElementById('root).append(div)

   */

  return (
      <div>123</div>
  )
}

export default App;


