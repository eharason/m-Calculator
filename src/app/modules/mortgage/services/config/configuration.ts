export const configurations = {
  projectTitle: 'Mortgage Calculator',
  mortgageForm: {
    inputs: [
      {
        name: 'mortgageAmount',
        label: 'Mortgage Amount:',
        type: 'tel',
        maxlength: '20',
        placeHolder: 100000,
        errorCode: 'Invalid Mortgage Amount',
        description: 'The amount you expect to borrow from your financial institution. It is calculated as the purchase price of your home, minus the down payment plus any applicable mortgage loan insurance premium you have to pay.'
      },
      {
        name: 'interestRate',
        label: 'Interest Rate',
        type: 'tel',
        maxlength: '5',
        placeHolder: 5.00,
        errorCode: 'Invalid Interest Rate',
        description: 'Annual interest rate for this mortgage.'
      },
      {
        name: 'amortizationPeriod',
        label: 'Amortization Period: ',
        type: 'select',
        selectList: [
          {name: '1 year', value: 1},
          {name: '2 years', value: 2},
          {name: '3 years', value: 3},
          {name: '4 years', value: 4},
          {name: '5 years', value: 5},
          {name: '6 years', value: 6},
          {name: '7 years', value: 7},
          {name: '8 years', value: 8},
          {name: '9 years', value: 9},
          {name: '10 years', value: 10},
          {name: '11 years', value: 11},
          {name: '12 years', value: 12},
          {name: '13 years', value: 13},
          {name: '14 years', value: 14},
          {name: '15 years', value: 15},
          {name: '16 years', value: 16},
          {name: '17 years', value: 17},
          {name: '18 years', value: 18},
          {name: '19 years', value: 19},
          {name: '20 years', value: 20},
          {name: '21 years', value: 21},
          {name: '22 years', value: 22},
          {name: '23 years', value: 23},
          {name: '24 years', value: 24},
          {name: '25 years', value: 25},
          {name: '26 years', value: 26},
          {name: '27 years', value: 27},
          {name: '28 years', value: 28},
          {name: '29 years', value: 29},
          {name: '30 years', value: 30}
        ],
        placeHolder: 25,
        description: 'The number of years and months over which you will repay this loan. The most common amortization period is 25 years. Not to be confused with the term of your loan, which is the duration of the loan agreement you signed with your financial institution and that has to be renewed regularly. Terms are generally for 1 to 10 years.'
      },
      {
        name: 'paymentFrequency',
        label: 'Payment Frequency: ',
        type: 'select',
        selectList: [
          // {name: 'Accelerated Weekly', value: 0},
          {name: 'Weekly', value:  52},
          // {name: 'Accelerated Bi-weekly', value: 0},
          {name: 'Bi-Weekly (every 2 weeks)', value: 26},
          {name: 'Semi-monthly (24x per year)', value: 24},
          {name: 'Monthly (12x per year)', value: 12}
        ],
        placeHolder: 12,
        description: 'By choosing an accelerated payment frequency, you can reduce your amortization period and save thousands of dollars in interest in the long run. For example, the accelerated bi-weekly payment allows you to pay half of your monthly payment every two weeks. You will therefore make 26 payments a year, the equivalent of one extra monthly payment a year.'
      },
      {
        name: 'term',
        label: 'Term: ',
        type: 'select',
        selectList: [
          {name: '1 year', value: 1},
          {name: '2 years', value: 2},
          {name: '3 years', value: 3},
          {name: '4 years', value: 4},
          {name: '5 years', value: 5},
          {name: '6 years', value: 6},
          {name: '7 years', value: 7},
          {name: '8 years', value: 8},
          {name: '9 years', value: 9},
          {name: '10 years', value: 10}
        ],
        placeHolder: 5,
        description: 'The number of term years.'
      }
    ]
  },
};

