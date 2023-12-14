function Result({ loanSheet }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Місяць</th>
          <th>Заборгованість за кредитом, грн </th>
          <th>Погашення кредиту, грн </th>
          <th>Відсотки за кредитом </th>
          <th>Виплата в місяць, грн</th>
        </tr>
      </thead>
      <tbody>
        {loanSheet.map((loanPerMonth, month) => (
          <tr key={month}>
            <td>{month + 1}</td>
            <td>{loanPerMonth.loanBody}</td>
            <td>{loanPerMonth.monthlyPayment}</td>
            <td>{loanPerMonth.loanInterest}</td>
            <td>{loanPerMonth.summaryMonthlyPayment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
