import {Injectable} from '@angular/core';
import {MortgageCalculation, MortgageInterface} from '../classes/mortgage.interface';
import {ConfigService} from './config.service';

@Injectable()
export class MortgageService {

  public get mortgageCalculation(): MortgageCalculation {
    return {
      amortizationPeriod: this.amortizationPeriod,
      amortizationPaymentNumber: this.amortizationPaymentNumber, // 300times
      frequency: this.frequency,
      payment: this.payment, // 542$
      principalPayment: this.principalPayment,
      interest: this.interest,
      totalPayment: this.totalPayment,
      termPeriod: this.termPeriod,
      termPaymentNumber: this.termPaymentNumber,
      termPrincipalPayment: this.termPrincipalPayment,
      termInterest: this.termInterest,
      termTotalPayment: this.termTotalPayment,
      termEndBalance: this.termEndBalance
    };
  }

  private amortizationPeriod: string;
  private amortizationPaymentNumber: number; // 300times
  private frequency: string;
  private payment: number; // 542$
  private principalPayment: number;
  private interest: number;
  private totalPayment: number;
  private termPeriod: string;
  private termPaymentNumber: number;
  private termPrincipalPayment: number;
  private termInterest: number;
  private termTotalPayment: number;
  private termEndBalance: number;
  private inputDate: Array<MortgageInterface>;


  constructor(private configService: ConfigService) {
    this.inputDate = configService.getConfig('mortgageForm').inputs;
  }


  public mortgageCalculator(formValue: any): void {

    const amortizationPeriod: number = formValue.amortizationPeriod;
    const interestRate: number = formValue.interestRate;
    const mortgageAmount: number = formValue.mortgageAmount;
    const paymentFrequency: number = formValue.paymentFrequency;
    const term: number = formValue.term;

    this.amortizationPeriod = this.inputDate.find(
      item => item.name === 'amortizationPeriod').selectList.find(
      option => option.value === amortizationPeriod
    ).name; // '25 years';
    this.amortizationPaymentNumber = amortizationPeriod * paymentFrequency; // 300times
    this.frequency = this.inputDate.find(
      item => item.name === 'paymentFrequency').selectList.find(
      option => option.value === paymentFrequency
    ).name; // 'monthly';
    this.payment = 0; // 542$

    const interestCalculated = (interestRate / 100) / 12;
    const interestCalculatedPow = Math.pow((1 + interestCalculated), amortizationPeriod * 12);
    const MonthlyPayment = Number(((mortgageAmount * (interestCalculated * interestCalculatedPow))
      / (interestCalculatedPow - 1)).toFixed(2));
    const yearlyPayment = MonthlyPayment * 12;
    this.payment = yearlyPayment / paymentFrequency;

    this.principalPayment = mortgageAmount;
    this.totalPayment = MonthlyPayment * amortizationPeriod * 12;
    this.interest = this.totalPayment - mortgageAmount;
    this.termPeriod = this.inputDate.find(
      item => item.name === 'term').selectList.find(
      option => option.value === term
    ).name; // '5 years';
    this.termPaymentNumber = term * paymentFrequency; // Calculated based on monthly payment
    this.termInterest = (this.interest / amortizationPeriod) * term;
    this.termTotalPayment = MonthlyPayment * term * 12;
    this.termPrincipalPayment = this.termTotalPayment - this.termInterest;
    this.termEndBalance = mortgageAmount - this.termPrincipalPayment;
  }
}
