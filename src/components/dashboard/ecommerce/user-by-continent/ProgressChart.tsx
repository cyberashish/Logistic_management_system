'use client';

import React from 'react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from '@/components/ui/tooltip';

const getTextColor = (bgVar: string) => {
  const lightVars = [
    'var(--color-subtleprimary)',
    'var(--color-secondary)',
    'var(--color-success)',
  ];
  return lightVars.includes(bgVar) ? '#000' : '#fff';
};

const ProgressBar = ({ label, percentage, color }: any) => {
  const textColor = getTextColor(color);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} >
        <TooltipTrigger asChild>
          <div
            className="h-full cursor-pointer transition-all duration-200 hover:scale-y-125 hover:brightness-110"
            style={{
              width: `${percentage}%`,
              backgroundColor: color,
            }}
          />
        </TooltipTrigger>
        <TooltipContent
          side="top"
          sideOffset={4}
          style={{
            backgroundColor: color,
            color: "#ffffff",
            borderRadius: '6px',
            padding: '6px 12px',
            fontSize: '0.855rem',
            fontWeight: 500,
          }}
        >
          <p>{label}: {percentage.toFixed(2)}%</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const ProgressChart = () => {
  const data = [
    { label: 'Europe', percentage: 36.56, color: 'var(--color-subtleprimary)' },
    { label: 'United States', percentage: 20.33, color: 'var(--color-secondary)' },
    { label: 'Germany', percentage: 17.36, color: 'var(--color-pink)' },
    { label: 'Romania', percentage: 12.22, color: 'var(--color-brown)' },
    { label: 'Africa', percentage: 8.87, color: 'var(--color-success)' },
    { label: 'Australia', percentage: 4.66, color: 'var(--color-error)' },
  ];

  return (
    <div className="flex h-3.5 rounded-full overflow-hidden" style={{ width: '300px', margin: '0 auto' }}>
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          percentage={item.percentage}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default ProgressChart;
