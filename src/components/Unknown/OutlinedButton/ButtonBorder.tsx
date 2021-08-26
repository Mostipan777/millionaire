import React from 'react';

interface BorderProps extends React.SVGProps<SVGSVGElement> {
  className: string;
}

const Border: React.FC<BorderProps> = ({ className }) => {
  return (
    <svg className={className}
      viewBox="0 0 405 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className={className}
        d="M38.717 5.283A11.5 11.5 0 0148.052.5h308.896a11.5 11.5 0 019.335 4.783L388.384 36l-22.101 30.717a11.5 11.5 0 01-9.335 4.783H48.052a11.5 11.5 0 01-9.335-4.783L16.616 36 38.717 5.283z M388 36h17M0 36h17"
        fill="#fff"
        stroke="#D0D0D8"
      />
    </svg>
  );
}

export default Border;
