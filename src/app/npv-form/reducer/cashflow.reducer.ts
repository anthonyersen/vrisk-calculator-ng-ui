import { Injectable } from "@angular/core";
import { ICashFlow } from "../../model/cashFlow";

@Injectable()
export class CashFlowReducer {
  addYear(cashFlows: ICashFlow[]): ICashFlow[] {
    return cashFlows = [...cashFlows, { value: 0 }];
  }

  removeYear(cashFlows: ICashFlow[], payload): ICashFlow[] {
    const { yearNumber } = payload;
    if (cashFlows.length < yearNumber) {
      return cashFlows;
    }

    const yearIndex = yearNumber - 1;
    let result = cashFlows.filter((c, i) => i !== yearIndex);

    if (result.length === 0) {
      result = [{ value: 0 }];
    }

    return result;
  }

  setYearValue(cashFlows: ICashFlow[], payload): ICashFlow[] {
    const { yearNumber, value } = payload;
    if (cashFlows.length < yearNumber) {
      return cashFlows;
    }

    const yearIndex = yearNumber - 1;
    return cashFlows.map((c, i) => i === yearIndex ? { value } : c);
  }
}
