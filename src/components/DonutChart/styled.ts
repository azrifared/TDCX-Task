import styled from 'styled-components';

export const DonutChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const SvgContainer = styled.svg`
  width: 100%;
  height: 100%;
  min-height: 100px;
  min-width: 100px;
`;

export const ChartTotal = styled.text.attrs({
  x: '50%',
  y: '50%',
})`
  font-size: 20px;
  line-height: 1;
  text-anchor: middle;
  transform: translateY(10px);
  fill: grey;
`;

export const Donut = styled.circle`
  fill: transparent;
`;

export const DonutSegment = styled(Donut).attrs({
  strokeWidth: 15,
})`
  stroke: ${({ color }) => color ?? 'rgba(0, 0, 0, 0.9)'};
  transition: all .5s ease-out;
`;
