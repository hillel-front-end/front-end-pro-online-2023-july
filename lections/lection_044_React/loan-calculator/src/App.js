import { useState, useRef, useMemo, useCallback } from "react";
import { calculateLoan } from "./tools/calculate-loan";
import { USER_INPUTS_FIELDS } from "./components/UserInput/UserInput.config";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const initialUseState = {
  [USER_INPUTS_FIELDS.price]: 0,
  [USER_INPUTS_FIELDS.firstPayment]: 0,
  [USER_INPUTS_FIELDS.term]: 3,
  [USER_INPUTS_FIELDS.rate]: 25,
  [USER_INPUTS_FIELDS.loanType]: "classic",
};

function App() {
  const [userInput, setUserInput] = useState(initialUseState);
  // const ref = useRef();

  // let globalValue = "";

  // function change(event) {
  //   const value = event.target.value;
  //   console.log(value, "value");
  //   console.log(ref, "ref");
  //   console.log(globalValue, "globalValue");
  //   ref.current = value; // set value without rerender
  //   // globalValue = value; //bad bad
  // }
  

  const onChangeHandler = function ({ target }) {
    // console.log("--set user input ---");
    setUserInput((prevStae) => ({ ...prevStae, [target.name]: target.value }));
  };

  const updateTable = useCallback((target) => {
    console.log(userInput, 'userInput');
    // setUserInput((prevStae) => ({ ...prevStae }));
    // setUserInput(({ ...userInput, [target.name]: target.value }));
  }, [userInput.price])

  const loanSheet = useMemo(() => {
    console.log("-- calc ---");
    const sheet = calculateLoan(userInput);
    console.log(sheet, "sheet");

    return sheet;
  }, [userInput[USER_INPUTS_FIELDS.price], userInput[USER_INPUTS_FIELDS.term]]); //derived/computed state

  console.log("--App rerander--", loanSheet);

  return (
    <>
      <Header title="Loan Calculator" clickOnLogo={updateTable} />
      <main id="main">
        <UserInput userInput={userInput} onChange={onChangeHandler} />
        <Result loanSheet={loanSheet} />

        {/* <input onChange={change} /> */}
      </main>
    </>
  );
}

export default App;

// twoway data binding

// -------

// function App() {

//   const userInput = {};

//   const onChangeHandler = function () {};

//   UserInput(userInput, onChangeHandler)

//   // here onChangeHandler, userInput
// }

// App();

// console.log(userInput)

// function UserInput(userInput, onChangeHandler) {
//   //here userInput, onChangeHandler

// }
