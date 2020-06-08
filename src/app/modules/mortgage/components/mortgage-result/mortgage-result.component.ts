import {Component, Input} from '@angular/core';
import {MortgageCalculation} from '../../classes/mortgage.interface';

@Component({
  selector: 'app-mortgage-result',
  templateUrl: './mortgage-result.component.html',
  styleUrls: ['mortgage-result.component.scss']
})
export class MortgageResultComponent {
  @Input() public calculationResult: MortgageCalculation;
}
