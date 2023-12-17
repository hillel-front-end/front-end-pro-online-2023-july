import { useState } from "react";
// { a: () =>, b: () => , c: () => }

/*
    {
        price: { isValid: true }
        firstPayment: { isValid: true }
    }
*/

const initialiseUseValidation = (rules) => {
  const initialErrorState = Object.keys(rules).reduce(
    (accum, name) => ({
      ...accum,
      [name]: { isValid: false, isTouched: false, isInvalid: false },
    }),
    {}
  );

  // userInput ==> formData
  return (formData) => {
    // useValidation(userInput)

    const [error, setError] = useState(initialErrorState);

    // formData = {price: 1000, firstPayment: 100 }, price = 'price'
    const validationForm = (formData, name) => {
      const validate = rules[name];

      if (typeof validate === "function") {
        const isValid = validate(formData[name]);

        const isInvalid = !isValid && error[name].isTouched;
        // isInvalid =  false

        // error[name].isValid = isValid // bad

        setError((prev) => ({
          ...prev,
          [name]: { isValid, isInvalid, isTouched: true },
        }));
      }
    };

    const onBlur = (name) => {
      console.log(name, "name");
      validationForm(formData, name);
    };

    return {
      error,
      onBlur,
      validationForm,
    };
  };
};

// function a(validators) {
//   return function b() {
//     console.log(validators, "validators");
//   };
// }

export default initialiseUseValidation;
