import Table from "../UI/Table";
import { formatter } from "../tools";
import { memo } from 'react' // useMemo !== memo

const COLUMN_ORDER = [
  "loanBody",
  "monthlyPayment",
  "loanInterest",
  "summaryMonthlyPayment",
];

const COLUMN_DESCRIPTION = {
  loanBody: "Заборгованість за кредитом, грн",
  monthlyPayment: "Погашення кредиту, грн ",
  loanInterest: "Відсотки за кредитом",
  summaryMonthlyPayment: "Виплата в місяць, грн",
};

function Result({ loanSheet }) {
  const styleAttr = {
    color: "white",
    paddingTop: "10px",
  };

  console.log("---rander Result---");

  const thead = (
    <tr style={styleAttr}>
      <th>Місяць</th>
      {COLUMN_ORDER.map((col) => (
        <th>{COLUMN_DESCRIPTION[col]}</th>
      ))}
    </tr>
  );

  return (
    <Table thead={thead} id="result">
      {loanSheet.map((loanPerMonth, month) => (
        <tr key={month}>
          <td>{month + 1}</td>
          {COLUMN_ORDER.map((col) => (
            <td>{formatter.format(Math.abs(loanPerMonth[col]))}</td>
          ))}
        </tr>
      ))}
    </Table>
  );
}

export default memo(Result);
// export default Result;



// function memo(cmp) {
//   return (
//     <>
//      <cmp></cmp>
//     </>
//   )
// }
// <table id="result">
//   <thead>
// <tr>
//   <th>Місяць</th>
//   <th>Заборгованість за кредитом, грн </th>
//   <th>Погашення кредиту, грн </th>
//   <th>Відсотки за кредитом </th>
//   <th>Виплата в місяць, грн</th>
// </tr>
//   </thead>
//   <tbody>
// {loanSheet.map((loanPerMonth, month) => (
//   <tr key={month}>
//     <td>{month + 1}</td>
//     <td>{formatter.format(Math.abs(loanPerMonth.loanBody))}</td>
//     <td>{formatter.format(Math.abs(loanPerMonth.monthlyPayment))}</td>
//     <td>{formatter.format(Math.abs(loanPerMonth.loanInterest))}</td>
//     <td>
//       {formatter.format(Math.abs(loanPerMonth.summaryMonthlyPayment))}
//     </td>
//   </tr>
// ))}
//   </tbody>
// </table>
