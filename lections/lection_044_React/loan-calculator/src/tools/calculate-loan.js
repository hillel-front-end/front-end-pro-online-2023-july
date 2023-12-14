const LOAN_TYPES = {
  annuity: ({
              price,
              firstPayment,
              term,
              rate,
            }) => {
    let loanBody = price - firstPayment;
    const monthRate = rate / 12 / 100;
    const cof = (monthRate * Math.pow(1 + monthRate, term) / (Math.pow(1 + monthRate, term) -1 ))
    const summaryMonthlyPayment = cof * loanBody;


    return Array(term).fill(null).map((_, index) => {
      const monthlyPayment = summaryMonthlyPayment - monthRate * loanBody;
      const loanInterest = summaryMonthlyPayment - monthlyPayment;

      const paymentPerMonth =  {
        month: index + 1,
        loanBody,
        monthlyPayment,
        loanInterest,
        summaryMonthlyPayment
      };

      loanBody -= monthlyPayment

      return paymentPerMonth;
    })
  },
  classic: ({
              price,
              firstPayment,
              term,
              rate,
            }) => {
    let loanBody  = price - firstPayment;
    let monthlyPayment = loanBody / term;
    const monthRate = rate / 12 / 100;

    const data = [];


    for (let i = 0; i < term; i++) {
      const loanInterest = loanBody * monthRate;
      const summaryMonthlyPayment = loanInterest + monthlyPayment;

      loanBody -= monthlyPayment;

      data.push({
        loanInterest,
        monthlyPayment,
        loanBody,
        summaryMonthlyPayment
      })
    }

    return data;
  },
};

export const calculateLoan = ({ loanType, ...args }) => {
  // console.log(loanType, 'loanType' );
  // console.log(LOAN_TYPES[loanType], 'LOAN_TYPES[loanType]' );
  if (!loanType || !LOAN_TYPES[loanType]) return [];


  // if (loanType === 'classic') {
  //     return LOAN_TYPES.classic(args)
  // } else if (loanType === 'annuity') {
  //   return LOAN_TYPES.annuity(args);
  // }


  return LOAN_TYPES[loanType](args);
}