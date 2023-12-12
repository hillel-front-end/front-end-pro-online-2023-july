import { useState } from 'react';
import logo from './assets/logo.png';
import { calculateLoan } from './tools/calculate-loan';

const initialUseState = {
  price: 0,
  firstPayment: 0,
  term: 0,
  rate: 0,
  loanType: ''
};

function App() {
  const [userInput, setUserInput] = useState(initialUseState);
  const [loanSheet, setLoanSheet] = useState([])

  console.log(userInput, 'Rerender userInput');

  const onChangeHandler = function ({ target }) {
    const { name, value }  = target;

    // setUserInput({ // bad practice
    //   ...userInput,
    //   [name]: value
    // });

    // best practice
    setUserInput((prevState) => ({...prevState, [name]: value }));
    setLoanSheet(calculateLoan(userInput))
  }


  console.log(loanSheet, 'loanSheet');


  return (
      <>
        <header className="header text-center">
          <img src={logo} alt="Logo"/>
          <h1 className="title">
            Loan Calculator
          </h1>
        </header>

        <main id="main">
          <div className="card card-shadow credit-calculator flex-column-center">
            <div className="input-group">
              <input type="text" name="price" className="form__field" onBlur={onChangeHandler}/>
              <label className="form__label">Ціна товару(грн)</label>
            </div>

            <div className="input-group">
              <input type="text"  name="firstPayment" className="form__field" onChange={onChangeHandler}/>
              <label className="form__label">Перший внесок</label>
            </div>

            <div className="input-group">
              <input type="text" name="term" className="form__field"  onChange={onChangeHandler}/>
              <label className="form__label">Строк кредитування</label>
            </div>

            <div className="input-group">
              <input type="text" name="rate" className="form__field" onChange={onChangeHandler}/>
              <label className="form__label">Відсоткова ставка за кредитом(%)</label>
            </div>

            <div className="select-group mt-15">
              <select value={userInput.loanType} name="loanType" onChange={onChangeHandler}>
                <option value="" disabled>Метод погашення кредиту</option>
                <option value="classic">Класика</option>
                <option value="annuity">Аннітет</option>
              </select>
            </div>

          </div>
        </main>
      </>
  );
}

// twoway data binding

export default App;

