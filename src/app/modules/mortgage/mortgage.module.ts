import {NgModule} from '@angular/core';
import {MortgageFormComponent} from './components/mortgage-form/mortgage-form.component';
import {ConfigService} from './services/config.service';
import {MortgageService} from './services/mortgage.service';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {AngularMaterialModule} from './angular-material.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MortgageResultComponent} from './components/mortgage-result/mortgage-result.component';

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    MatInputModule,
    ConfigService,
    MortgageService
  ],
  exports: [
    MortgageFormComponent
  ],
  declarations: [
    MortgageFormComponent,
    MortgageResultComponent
  ]
})
export class MortgageModule {
}
