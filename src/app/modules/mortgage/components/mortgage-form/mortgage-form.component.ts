import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../services/config.service';
import {MortgageCalculation, MortgageInterface} from '../../classes/mortgage.interface';
import {MortgageService} from '../../services/mortgage.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['mortgage-form.component.scss']
})
export class MortgageFormComponent implements OnInit {

  public form: FormGroup;
  public formInputs: Array<MortgageInterface>;
  public calculationResult: MortgageCalculation;

  constructor(private configService: ConfigService,
              private mortgageService: MortgageService,
              private formBuilder: FormBuilder) {
    this.formInputs = configService.getConfig('mortgageForm').inputs;
  }

  public ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    this.calculationResult = null;
    if (this.form.valid) {
      this.mortgageService.mortgageCalculator(this.form.value);
      this.calculationResult = this.mortgageService.mortgageCalculation;
    }
  }

  private buildForm(): void {
    const formGroup = {};
    this.formInputs.forEach(input => {
      formGroup[input.name] = input.type === 'tel' ?
        (input.name === 'interestRate' ?
          new FormControl(input.placeHolder, [Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
            Validators.maxLength(input.maxlength), Validators.required]) :
          new FormControl(input.placeHolder, [Validators.pattern(/^-?(0|[1-9]\d*)?$/),
            Validators.maxLength(input.maxlength), Validators.required])) :
        new FormControl(input.selectList.find(item => item.value === input.placeHolder).value, [Validators.required]);
    });
    this.form = this.formBuilder.group(formGroup);
  }
}
