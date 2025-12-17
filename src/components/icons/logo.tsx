import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="currentColor"
        d="M168 88a40 40 0 1 1-40-40 40 40 0 0 1 40 40Zm-19.3 69.4-48 32A8 8 0 0 1 88 184V97.3a92.2 92.2 0 0 1 31.8-1.1l42.4 28.3a40 40 0 0 1-13.5 69.9Z"
        opacity={0.2}
      />
      <path
        fill="currentColor"
        d="M236.6 132.2a7.9 7.9 0 0 0-8.8-1.8l-42.4 28.3a40 40 0 1 0-55.9 56.1l48-32a8 8 0 0 0-5.8-14.8l-20.9 7-1.8-5.2 20.9-7a24 24 0 1 1 20.2-41.2l42.4-28.3a8 8 0 0 0 1.8-8.8ZM128 64a24 24 0 1 1-24 24 24 24 0 0 1 24-24Z"
      />
    </svg>
  );
}
