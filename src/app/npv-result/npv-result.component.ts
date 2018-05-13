import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { INpvResult } from "../model/npvResult";
import { IChartData } from "../model/chartData";
import { constructChartData } from './chart-data-helper';

@Component({
  selector: 'npv-result',
  templateUrl: './npv-result.component.html',
  styleUrls: ['./npv-result.component.css']
})
export class NpvResultComponent implements OnChanges {
  private allowedChartTypes: string[] = ['bar', 'line'];
  chartType: string = 'bar';
  chartData: IChartData;

  @Input() results: INpvResult[] = [];

  handleChartTypeChange(chartType: string) {
    this.chartType = this.allowedChartTypes.includes(chartType) ? chartType : this.allowedChartTypes[0];
  }

  ngOnChanges(changes): void {
    if (changes.results) {
      this.chartData = constructChartData(this.results);
    }
  }
}
