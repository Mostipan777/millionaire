import React from 'react';

interface ScoreBorderProps extends React.SVGProps<SVGSVGElement> {
  className: string;
}

const ScoreBorder: React.FC<ScoreBorderProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 376 40"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={className}
        d="M81.453 4.638A11.5 11.5 0 0190.287.5h195.426c3.413 0 6.649 1.516 8.834 4.138L307.349 20l-12.802 15.362a11.499 11.499 0 01-8.834 4.138H90.287a11.5 11.5 0 01-8.834-4.138L68.65 20 81.453 4.638zM376 20h-69M69 20H0"
        stroke="#D0D0D8"
      />
    </svg>
  );
};

export default ScoreBorder;
