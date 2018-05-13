import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { InputGroupComponent } from './shared/input-group.component';
import { AlertMessageComponent } from './shared/alert-message.component';

import { NpvCalculatorComponent } from './npv-calculator/npv-calculator.component';
import { NpvFormComponent } from './npv-form/npv-form.component';
import { NpvDiscountComponent } from './npv-form/npv-discount.component';
import { NpvCashFlowComponent } from './npv-form/npv-cashflow.component';

import { NpvResultComponent } from './npv-result/npv-result.component';
import { ChartOptionsComponent } from './npv-result/npv-chart-options.component';

@NgModule({
  declarations: [
    AppComponent,
    NpvCalculatorComponent,
    InputGroupComponent,
    AlertMessageComponent,
    NpvFormComponent,
    NpvDiscountComponent,
    NpvCashFlowComponent,
    NpvResultComponent,
    ChartOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
