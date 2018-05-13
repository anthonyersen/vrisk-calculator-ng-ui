import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ICashFlowChanged } from "./event-types";
import { ICashFlow } from '../model/cashFlow';

@Component({
  selector: 'npv-cashflow',
  templateUrl: './npv-cashflow.component.html'
})
export class NpvCashFlowComponent {
  @Input() yearNumber: number;
  @Input() cashFlow: ICashFlow;

  @Output() onChange: EventEmitter<ICashFlowChanged> = new EventEmitter<ICashFlowChanged>();
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();

  handleChange(): void {
    this.onChange.emit({
      yearNumber: this.yearNumber,
      value: this.cashFlow.value
    })
  }

  handleRemove(): void {
    this.onRemove.emit(this.yearNumber);
  }
}
