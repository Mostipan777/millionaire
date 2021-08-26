import React from 'react';

const BurgerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={16}
      height={14}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 1a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1zM0 7a1 1 0 011-1h14a1 1 0 110 2H1a1 1 0 01-1-1zM1 12a1 1 0 100 2h14a1 1 0 100-2H1z"
        fill="#1C1C21"
      />
    </svg>
  );
};

export default BurgerIcon;
