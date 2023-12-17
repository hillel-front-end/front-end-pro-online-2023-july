import { USER_INPUTS_FIELDS } from "./UserInput.config";
import validators from "../../tools/validators";
import initialiseUseValidation from "../../hooks/useValidation";
import Card from "../../UI/Card";
import Input from "../Input";

const rules = {
  [USER_INPUTS_FIELDS.price]: validators.minValue(1000),
  [USER_INPUTS_FIELDS.firstPayment]: validators.allowRange(1000, 5000),
};

const useValidation = initialiseUseValidation(rules);

function UserInput(props) {
  const { error, onBlur } = useValidation(props.userInput); // receive valid = { error, validationForm, onBlur}

  const onValidation = function ({ target }) {
    onBlur(target.name);
  };

  const isInValidPrice = error[USER_INPUTS_FIELDS.price].isInvalid;
  const isInValidFirstPayment =
    error[USER_INPUTS_FIELDS.firstPayment].isInvalid;

  return (
    <Card className="credit-calculator flex-column-center">
      <div className={`w-35 ${isInValidPrice ? "invalid" : ""}`}>
        <Input
          type="text"
          label="Ціна товару(грн)"
          name={USER_INPUTS_FIELDS.price}
          value={props.userInput[USER_INPUTS_FIELDS.price]}
          onChange={props.onChange}
          onBlur={onValidation}
        />
        {isInValidPrice && <div className="error-message">Invalid field</div>}
      </div>
      <div className="w-35">
        <Input
          type="text"
          label="Перший внесок"
          name={USER_INPUTS_FIELDS.firstPayment}
          value={props.userInput[USER_INPUTS_FIELDS.firstPayment]}
          onChange={props.onChange}
          onBlur={onValidation}
        />
        {isInValidFirstPayment && (
          <div className="error-message">Invalid field</div>
        )}
      </div>
      <div className="w-35">
        <Input
          type="text"
          label="Строк кредитування"
          name={USER_INPUTS_FIELDS.term}
          value={props.userInput[USER_INPUTS_FIELDS.term]}
          onChange={props.onChange}
        />
      </div>
      <div className="w-35">
        <Input
          type="text"
          label="Відсоткова ставка за кредитом(%)"
          name={USER_INPUTS_FIELDS.rate}
          value={props.userInput[USER_INPUTS_FIELDS.rate]}
          onChange={props.onChange}
        />
      </div>

      <div className="select-group mt-15 w-35">
        <select
          name={USER_INPUTS_FIELDS.loanType}
          value={props.userInput[USER_INPUTS_FIELDS.loanType]}
          onChange={props.onChange}
        >
          <option value="" disabled>
            Метод погашення кредиту
          </option>
          <option value="classic">Класика</option>
          <option value="annuity">Аннітет</option>
        </select>
      </div>
    </Card>
  );
}

export default UserInput;

{
  /* Select - homework */
}
//   <div className="select-group mt-15">
//     <select
//       value={props.userInput.loanType}
//       name="loanType"
//       onChange={props.onChange}
//     >
//       <option value="" disabled>
//         Метод погашення кредиту
//       </option>
//       <option value="classic">Класика</option>
//       <option value="annuity">Аннітет</option>
//     </select>
//   </div>
