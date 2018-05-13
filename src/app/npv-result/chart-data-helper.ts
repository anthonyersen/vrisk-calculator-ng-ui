import { INpvResult } from "../model/npvResult";
import { IChartData } from "../model/chartData";

export function constructChartData(npvs: INpvResult[]): IChartData {
  const labels = [];
  const datasets = [];
  const colors = [];

  const result = {
    labels,
    datasets,
    colors,
    options: {
      tooltips: {
        mode: 'label',
        callbacks: {
          title: tooltipTitle,
          label: tooltipLabel,
        },
      },
    }
  };

  if (!npvs || npvs.length === 0) {
    return result;
  }

  datasets.push(
    {
      label: null,
      fill: true,
      lineTension: 0.1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
      subData: [],
      backgroundColor: null,
      borderColor: null,
      pointBorderColor: null,
      pointHoverBackgroundColor: null,
      pointHoverBorderColor: null,
    }
  );

  const firstDiscount = npvs[0].discountPercentage;
  const lastDiscount = npvs[npvs.length - 1].discountPercentage;
  const dataset = datasets[0];

  dataset.label = `NPVs from ${firstDiscount.toFixed(3)}% to ${lastDiscount.toFixed(3)}%`;

  npvs.forEach((result) => {
    labels.push(result.discountPercentage.toFixed(3));
    dataset.data.push(result.npv.toFixed(3));
    dataset.subData.push(result.periodNpvs.map(p => p.toFixed(3)));
  });

  const color = getDataColors(dataset.data, 1);
  const datasetColor = {
    backgroundColor: getDataColors(dataset.data, 0.4),
    pointBackgroundColor: '#fff',
    borderColor: color,
    pointBorderColor: color,
    pointHoverBackgroundColor: color,
    pointHoverBorderColor: color
  };

  colors.push(datasetColor);

  return result;
}

function tooltipTitle(tooltipItem): string {
  const discount = tooltipItem[0].xLabel;
  const npv = tooltipItem[0].yLabel;

  return `NPV is ${npv} at ${discount}% discount`;
}

function tooltipLabel(tooltipItem, data): string {
  const item = data.datasets[tooltipItem.datasetIndex];
  const npvs = item.subData[tooltipItem.index];

  return npvs.reduce((res, npv, i) => {
    const currentLabel = `Year ${i + 1}: ${npv}`;
    return `${res}    ${currentLabel}`;
  }, '');
}

function getPointColor(npv: number, opacity: number): string {
  let r = 0;
  let g = 0;
  let b = 0;

  if (npv <= 0) {
    r = 255;
    g = 0;
    b = 0;
  } else {
    r = 75;
    g = 192;
    b = 192;
  }

  return `rgb(${r}, ${g}, ${b}, ${opacity})`;
}

function getDataColors(npvs: any[], opacity: number): string[] {
  return npvs.map(npv => getPointColor(npv, opacity));
}
