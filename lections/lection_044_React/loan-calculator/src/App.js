import { useState } from "react";
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

  const onChangeHandler = function ({ target }) {
    setUserInput((prevStae) => ({ ...prevStae, [target.name]: target.value }));
  };

  const loanSheet = calculateLoan(userInput); //derived/computed state

  return (
    <>
      <Header title="Loan Calculator" />
      <main id="main">
        <UserInput userInput={userInput} onChange={onChangeHandler} />
        <Result loanSheet={loanSheet} />
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
