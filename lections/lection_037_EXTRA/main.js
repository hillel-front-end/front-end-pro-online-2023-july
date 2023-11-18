function main() {
  // class Car {
  //   model = "Mersedec";
  // }

  // console.log(new Car());

  class Collection extends Array {
    add() {
      console.log(this, "this add");
    }

    splice(index, count) {
      super.splice(index, count);
      document.querySelector(`[data-index="${index}"`).remove();
    }
  }

  const collection = new Collection(
    { title: "Harry Potter", price: 22 },
    { title: "Star Wars", price: 6 },
    { title: "Avatar", price: 16 },
    { title: "Terminator", price: 8 }
  );

  // collection.add();
  // collection.remove();

//   function print() {
//     const fragment = document.createDocumentFragment();

//     collection.forEach((item, index) => {
//       const filmNode = document.createElement("div");
//       filmNode.classList.add("film");
//       filmNode.dataset.index = index;
//       filmNode.innerHTML = `
//             <span> ${item.title} </span>
//             <span> ${item.price} </span>
//         `;

//       fragment.append(filmNode);
//     });

//     document.body.append(fragment);
//   }

//   print();

//   collection.remove(2);

//   console.log(collection, "collection");
}

window.onload = main;
