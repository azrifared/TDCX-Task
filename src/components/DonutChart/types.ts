import { RefObject } from 'react';

export type SvgAttributes = {
  cx?: number,
  cy?: number,
  radius?: number,
  circumference?: number,
};

export type ChartDataType = {
  degrees: number,
  offset: number,
  x: number,
  y: number,
  color: string,
  count: number,
  showText?: boolean,
};

export type SVGRefType = RefObject<SVGSVGElement>;

export type DonutViewProps = {
  svgAttributes: SvgAttributes,
  chartData: ChartDataType[],
  total?: number,
  showTotal?: boolean,
  svgRef: RefObject<SVGSVGElement | undefined>,
};

export type DonutChartDataType = {
  count: number,
  color: string,
  showText?: boolean,
};

export type DonutChartProps = {
  data: DonutChartDataType[],
  showTotal?: boolean,
};

export type TextCoordsArgsType = {
  val: number,
  angleOffset: number,
  radius: number,
  cx: number,
  cy: number,
  total: number,
};
