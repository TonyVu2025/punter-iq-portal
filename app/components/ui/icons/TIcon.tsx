import { SVGAttributes } from "react";

export const TIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.89435 9.99634V0H6.09052V9.99634H3.89435ZM0.986328 1.83266V0H9.01369V1.83266H0.986328Z"
        fill="white"
      />
    </svg>
  );
};
