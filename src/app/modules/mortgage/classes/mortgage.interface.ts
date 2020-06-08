export class SelectList {
  value: number;
  name: string;
}

export class MortgageInterface {
  name: string;
  label: string;
  type: string;
  maxlength?: number;
  selectList?: Array<SelectList>;
  placeHolder: number;
}

export interface MortgageCalculation {
  amortizationPeriod: string;
  amortizationPaymentNumber: number; // 300times
  frequency: string;
  payment: number; // 542$
  principalPayment: number;
  interest: number;
  totalPayment: number;
  termPeriod: string;
  termPaymentNumber: number;
  termPrincipalPayment: number;
  termInterest: number;
  termTotalPayment: number;
  termEndBalance: number;
}
