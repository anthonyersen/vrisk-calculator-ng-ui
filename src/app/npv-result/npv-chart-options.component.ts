import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'npv-chart-options',
  templateUrl: './npv-chart-options.component.html'
})
export class ChartOptionsComponent {
  @Input() chartType: string = 'bar';
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  handleChange(e) {
    this.onChange.emit(e.target.value);
  }
}
