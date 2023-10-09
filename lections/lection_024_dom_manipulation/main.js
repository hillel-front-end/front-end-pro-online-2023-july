window.onload = function () {
  // ------ attributes ----------
  const input = document.querySelector('input[type="text"]');
  console.dir(input.max, 'input');

  const foo = input.getAttribute('foo');
  console.log(foo, 'foo');
 // https://stackoverflow.com/questions/10280250/getattribute-versus-element-object-properties#:~:text=getAttribute%20retrieves%20the%20attribute%20of,not%20guarantee%20the%20same%20value.
 //  setTimeout(() => {
 //    input.setAttribute('type', 'password')
 //    input.removeAttribute('foo');
 //    input.setAttribute('v-model', 'aaaa');
 //  }, 3000);
  //---------------

  // data-attr

  console.log(input.dataset.lastMod, 'read')

  // setTimeout(() => {
  //   input.dataset.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto consectetur corporis, dolore dolores est facere id illo inventore minus nobis officia pariatur possimus quis quos rerum ut veritatis!'
  // }, 3000)

  /// ----------- DOM manipulation ---------------


  const products = document.querySelector('.products');

  // const firstProductItem = products.firstElementChild;
  // const firstProductItem = products.children[0];
  // const firstProductItem = document.querySelector('.product-item'); // bad

  // const firstProductItem = products.querySelector('.product-item'); // good

  // console.log(firstProductItem, 'firstProductItem');

  // firstProductItem.onclick = () => {
  //   console.log('----click----');
  // };


  //-----
  setTimeout(() => {
    // products.innerHTML += '<section class="product-item">2</section>';

      // first = products.querySelector('.product-item');

      // console.log(first === firstProductItem)
  }, 3000)


  // --------------- createElement + append vs innerHTML ------------
  // create new Node
  const section = document.createElement('section');

  section.innerText = '2';
  console.log(section, 'section');

  section.classList.add('product-item');

  setTimeout(() => {
    // products.append(section);
    // products.prepend(section);
    // products.after(section);
    // products.before(section);

    setTimeout(() => {
        // products.append(section)
    }, 3000)


  }, 3000);
  // products.append(section); // append Node

  // ----- optimisation ----

  const box = document.createElement('div');

  //
  // setTimeout(() => {
    box.style.left = '30px';
    box.style.top = '20px';

    // -- bad practice
    // box.style.color = 'red';
    // box.style.width = '100px';
    // box.style.height = '100px';
    // box.style.marginTop = '200px' + box.clientX;
    // box.style.backgroundColor = 'black';
    // box.style.position = 'absolute';

    // -- good
    // box.classList.add('card');

    document.body.append(box);
  // }, 3000)

    //#2
    // ----------

      // box.style.color = 'red';
      // box.style.width = '100px';
      // box.style.height = '100px';
      //
      // console.log(box.clientHeight); // browser stop optimisation
      // box.style.marginTop = '200px';
      // box.style.backgroundColor = 'black';
      // box.style.position = 'absolute';

    //#3
    box.classList.add('hidden');
    box.style.left = '30px';
    box.style.top = '20px';
    box.style.color = 'red';
    box.classList.add('card');
    // box.classList.remove('hidden');

    // #4


    const products_2 = [1, 2, 3];

    // const productsContainer = document.createElement('div');
    const fragment = document.createDocumentFragment();

    products_2.forEach(product => {
      const div = document.createElement('div');
      div.innerText = product;
      div.classList.add('product-item');

      // products.append(div);///bad practice
      // productsContainer.append(div);// good
      fragment.append(div); // the best
    })

    // products.append(productsContainer);  good
      products.append(fragment); /// the best

  console.dir(fragment, 'fragment');

}