import { useEffect, useState } from "react";

// -------------------
// Use Case - 1

// Enfinity loop
// useEffect(() => {
//   console.log("---call Effect ---");
// });

// -------------------
// Use Case - 2

//   useEffect(() => {
//     console.log("----useEffect ----");

//     setTimeout(() => {
//       const storeItems = sendAjax();
//       setProducts(storeItems);
//     });
//   }, []);

const sendAjax = () => [1, 2, 3];

export default function TestStand() {
  //   const [product, setProduct] = useState([]);
  const [counter, setCounter] = useState(1);

  //   const sendAjax = () => {
  //     // stab
  //     setTimeout(() => {
  //       const payload = [1, 2, 3]; // mass from server

  //       setProduct(payload);
  //     }, 1000);
  //   };

  //   sendAjax();

  // without dependency:
  //   useEffect(() => {
  //     console.log("----useEffect for TestStand ----");
  //     sendAjax();
  //   });

  // with empty dependency:

  //   useEffect(() => {
  //     console.log("----useEffect for TestStand ----");
  //     sendAjax();
  //   }, []);

  // with dependency:

  //   useEffect(() => {
  //     console.log("----useEffect TestStand ----");
  //     setCounter((p) => p + 1); // Enfinity - without dep
  //   });

  console.log("----rander TestStand---");

  return (
    <div>
      <Display
        incrementCounter={() => setCounter((p) => p + 1)}
        counter={counter}
      />
    </div>
  );
}

function Display({ counter, incrementCounter }) {
  // -------------------
  // Use Case - 3 with Dependency
  console.log("----rander Display---");

  // ------------
  //  Визов после монтирования компонента
  //  Виклик в тому розі якщо один з залежностей буде змінининм, напр setCounter(p => p + 1)

  //   useEffect(() => {
  //     console.log("----useEffect Display ----");
  //   }, [counter]);

  return (
    <>
      <button onClick={incrementCounter}> click </button>
      {counter}
    </>
  );
}

// useMemo, memo, useCallback, useRef
