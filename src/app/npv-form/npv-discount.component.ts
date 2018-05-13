import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'npv-discount',
  templateUrl: './npv-discount.component.html'
})
export class NpvDiscountComponent {
  @Input() id: string;
  @Input() label: string;
  @Input() value: number;

  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();

  handleChange(): void {
    this.onChange.emit(this.value);
  }
}
