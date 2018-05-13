import { Component, Input } from "@angular/core";

@Component({
  selector: 'npv-alert-message',
  templateUrl: './alert-message.component.html'
})
export class AlertMessageComponent {
  @Input() errorMessage: string;
}
