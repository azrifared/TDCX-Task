import React, {
  useState, useEffect, useRef, useMemo,
} from 'react';
import View from './View';
import { DonutChartProps } from './types';
import { DonutChartContainer } from './styled';
import {
  getDonutAttributes, getTotalCount, calculateTextCoords, calculatePercent,
} from './helper';

export default ({
  data = [{ count: 1, color: 'green' }], showTotal, ...otherProps
}: DonutChartProps) => {
  const [svgWidth, setSvgWidth] = useState(0);
  const [svgHeight, setSvgHeight] = useState(0);
  const svgRef = useRef<SVGSVGElement | undefined>();
  const updateSvgWH = () => {
    if (svgRef.current) {
      const svg = window.getComputedStyle(svgRef.current);
      setSvgWidth(parseInt(svg.width, 10));
      setSvgHeight(parseInt(svg.height, 10));
    }
  };

  useEffect(() => {
    updateSvgWH();
    window.addEventListener('resize', updateSvgWH, false);
    return () => window.removeEventListener('resize', updateSvgWH, false);
  }, []);

  const donutChartAttrs = useMemo(() => getDonutAttributes(svgWidth), [svgWidth, svgHeight]);
  const {
    cx = 80, cy = 80, radius = 60, circumference = (2 * Math.PI * 60),
  } = donutChartAttrs || {};
  let angleOffset = -90;

  const total = useMemo(() => getTotalCount(data), [data]);

  const chartData = useMemo(() => (
    data.map((v) => {
      const { count, color, showText } = v;
      const textCoordsArgs = {
        val: count,
        angleOffset,
        radius,
        cx,
        cy,
        total,
      };
      const { x, y } = calculateTextCoords(textCoordsArgs);
      const percentCount = calculatePercent(count, total);
      const donutData = {
        degrees: angleOffset,
        offset: circumference - (percentCount * circumference),
        x,
        y,
        color,
        count,
        showText,
      };
      angleOffset = percentCount * 360 + angleOffset;
      return donutData;
    })
  ), [data, donutChartAttrs, total]);

  return (
    <DonutChartContainer {...otherProps}>
      <View
        chartData={chartData}
        svgRef={svgRef}
        total={total}
        showTotal={showTotal}
        svgAttributes={donutChartAttrs}
      />
    </DonutChartContainer>
  );
};
