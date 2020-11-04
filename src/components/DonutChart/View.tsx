import React from 'react';
import {
  SvgContainer, ChartTotal, DonutSegment,
} from './styled';
import { DonutViewProps, SVGRefType } from './types';

const View = ({
  chartData, total, showTotal, svgAttributes, svgRef,
}: DonutViewProps) => {
  const {
    cx = 80, cy = 80, circumference, radius,
  } = svgAttributes;
  return (
    <SvgContainer
      preserveAspectRatio="none"
      ref={svgRef as SVGRefType}
    >
      {
        chartData.map((v) => (
          <g key={v.color}>
            <DonutSegment
              color={v.color}
              strokeDasharray={circumference}
              strokeDashoffset={v.offset}
              transform={`rotate(${v.degrees}, ${cx}, ${cy})`}
              cx={cx}
              cy={cy}
              r={radius}
            />
            {v.showText && <text textAnchor="middle" dy="3px" x={v.x} y={v.y}>{v.count}</text>}
          </g>
        ))
      }
      {showTotal && <ChartTotal>{total}</ChartTotal>}
    </SvgContainer>
  );
};

export default View;
