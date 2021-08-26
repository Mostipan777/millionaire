import React from 'react';

const CrossIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.364 2.05A1 1 0 0011.95.636L7 5.586 2.05.636A1 1 0 10.636 2.05L5.586 7l-4.95 4.95a1 1 0 001.414 1.414L7 8.414l4.95 4.95a1 1 0 001.414-1.414L8.414 7l4.95-4.95z"
        fill="#1C1C21"
      />
    </svg>
  );
};

export default CrossIcon;
