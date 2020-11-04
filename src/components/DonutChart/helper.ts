import * as R from 'ramda';
import { DonutChartDataType, TextCoordsArgsType } from './types';

export const getDonutAttributes = (svgWidth: number) => {
  if (svgWidth) {
    return {
      cx: svgWidth / 2,
      cy: svgWidth / 2,
      radius: (svgWidth - 20) / 2,
      circumference: 2 * Math.PI * ((svgWidth - 20) / 2),
    };
  }
  return {};
};

export const getTotalCount = (data: DonutChartDataType[]) => R.pipe(
  R.map(R.prop('count') as (rec: DonutChartDataType) => number),
  R.reduce<number, number>(R.add, 0),
)(data);

export const calculatePercent = (val: number, total: number) => val / total;


export const calculateTextCoords = (textCoordsArgs: TextCoordsArgsType) => {
  const {
    val, angleOffset, radius, cx, cy, total,
  } = textCoordsArgs;
  const angle = (calculatePercent(val, total) * 360) / 2 + angleOffset;
  const radians = angle * (Math.PI / 180);

  return {
    x: (radius * Math.cos(radians) + cx),
    y: (radius * Math.sin(radians) + cy),
  };
};
