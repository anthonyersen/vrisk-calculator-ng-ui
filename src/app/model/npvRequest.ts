interface IDiscountRateDetail {
  upperBoundPercentage: number,
  lowerBoundPercentage: number;
  incrementPercentage: number;
}

export interface ICalculateNpvRequest {
  initialInvestment: number;
  discountRateDetail: IDiscountRateDetail;
  cashFlows: number[];
}
