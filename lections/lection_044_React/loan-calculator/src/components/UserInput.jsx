import Card from "../UI/Card";
import Input from "./Input";

function UserInput(props) {
  return (
    <Card className="credit-calculator flex-column-center">
      <Input
        type="text"
        name="price"
        label="Ціна товару(грн)"
        onChange={props.onChange}
        value={props.userInput.price}
      />
      <Input
        type="text"
        name="firstPayment"
        label="Перший внесок"
        onChange={props.onChange}
        value={props.userInput.firstPayment}
      />
      <Input
        type="text"
        name="term"
        label="Строк кредитування"
        onChange={props.onChange}
        value={props.userInput.term}
      />
      <Input
        type="text"
        name="rate"
        label="Відсоткова ставка за кредитом(%)"
        onChange={props.onChange}
        value={props.userInput.rate}
      />
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
