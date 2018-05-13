import { Component, Output, EventEmitter } from "@angular/core";
import { ICashFlowChanged } from "./event-types";
import { CashFlowReducer } from "./reducer/cashflow.reducer";
import { ICashFlow } from "../model/cashFlow";
import { ICalculateNpvRequest } from '../model/npvRequest';

@Component({
  selector: 'npv-form',
  templateUrl: './npv-form.component.html',
  styleUrls: ['./npv-form.component.css'],
  providers: [CashFlowReducer]
})
export class NpvFormComponent {
  cashFlows: ICashFlow[] = [{ value: 3000 },{ value: 4500 },{ value: 3000 }];
  initialInvestment: number = 10000;
  discountLowerBound: number = 1;
  discountUpperBound: number = 5;
  discountIncrement: number = 0.25;

  @Output() onCalculate: EventEmitter<ICalculateNpvRequest> = new EventEmitter<ICalculateNpvRequest>();

  constructor(private _cashFlowReducer: CashFlowReducer) {
  }

  handlePropertyChange(property: string, value: number) {
    if (Object.prototype.hasOwnProperty.call(this, property)) {
      this[property] = value;
    }
  }

  handleCashFlowChange(cashFlowChanges : ICashFlowChanged): void {
    this.cashFlows = this._cashFlowReducer.setYearValue(this.cashFlows, cashFlowChanges);
  }

  handleAddYear(): void {
    this.cashFlows = this._cashFlowReducer.addYear(this.cashFlows);
  }

  handleRemoveYear(yearNumber: number): void {
    this.cashFlows = this._cashFlowReducer.removeYear(this.cashFlows, { yearNumber });
  }

  handleCalculate(): void {
    this.onCalculate.emit({
      initialInvestment: this.initialInvestment || 0,
      discountRateDetail: {
        upperBoundPercentage: this.discountUpperBound || 0,
        lowerBoundPercentage: this.discountLowerBound || 0,
        incrementPercentage: this.discountIncrement || 0
      },
      cashFlows: this.cashFlows.map(c => c.value || 0)
    });
  }
}
