import { Component } from "@angular/core";
import { NpvCalculatorService } from "./npv-calculator.service";
import { ICalculateNpvRequest } from '../model/npvRequest';
import { INpvResult } from '../model/npvResult';

@Component({
  selector: 'npv-calculator',
  templateUrl: './npv-calculator.component.html',
  providers: [NpvCalculatorService]
})
export class NpvCalculatorComponent {
  errorMessage: string;
  results: INpvResult[] = [];

  constructor(private _calculatorService: NpvCalculatorService) {
    this.handleCalculateSuccess = this.handleCalculateSuccess.bind(this);
    this.handleCalculateError = this.handleCalculateError.bind(this);
  }

  handleCalculate(request: ICalculateNpvRequest): void {
    this._calculatorService.calculateNpv(request)
      .subscribe(this.handleCalculateSuccess, this.handleCalculateError);
  }

  handleCalculateSuccess(npvs: INpvResult[]): void {
    this.results = npvs || [];
    this.errorMessage = null;
  }

  handleCalculateError(error: any): void {
    this.errorMessage = typeof error === 'string' ? error : 'Something has gone wrong';
  }
}
