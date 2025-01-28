import { HTMLAttributes } from "react";

export const DiamondIcon = (props: HTMLAttributes<SVGElement>) => {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 10.5625C2.2385 10.5625 0 8.324 0 5.5625C0 2.801 2.2385 0.5625 5 0.5625C7.7615 0.5625 10 2.801 10 5.5625C10 8.324 7.7615 10.5625 5 10.5625ZM3.75 4.0625L2.5 5.3125L5 7.8125L7.5 5.3125L6.25 4.0625H3.75Z" />
    </svg>
  );
};
