import { useState } from "react";
import { calculateLoan } from "./tools/calculate-loan";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const initialUseState = {
  price: 10000,
  firstPayment: 0,
  term: 3,
  rate: 25,
  loanType: "classic",
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
