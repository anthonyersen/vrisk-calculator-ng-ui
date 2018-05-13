import { Component, Input } from "@angular/core";

@Component({
  selector: 'npv-input-group',
  templateUrl: './input-group.component.html'
})
export class InputGroupComponent {
  @Input() prepend: string;
  @Input() append: string;
}
