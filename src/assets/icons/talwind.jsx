import { useTheme } from "styled-components";

export function IconTalwind() {

    const theme = useTheme('styled-components');
    
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="23"
      fill="none"
      viewBox="0 0 38 23"
    >
      <path
        fill="url(#paint0_linear_9_97)"
        d="M19 0c-5.067 0-8.233 2.556-9.5 7.667 1.9-2.556 4.117-3.514 6.65-2.875 1.445.364 2.479 1.422 3.622 2.593C21.635 9.292 23.791 11.5 28.5 11.5c5.067 0 8.233-2.556 9.5-7.667-1.9 2.556-4.117 3.514-6.65 2.875-1.445-.364-2.479-1.422-3.622-2.593C25.865 2.208 23.709 0 19 0zM9.5 11.5c-5.067 0-8.233 2.556-9.5 7.667 1.9-2.556 4.117-3.514 6.65-2.875 1.445.364 2.478 1.422 3.622 2.593C12.135 20.792 14.291 23 19 23c5.067 0 8.233-2.556 9.5-7.667-1.9 2.556-4.117 3.514-6.65 2.875-1.445-.364-2.479-1.422-3.622-2.593C16.365 13.708 14.209 11.5 9.5 11.5z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_9_97"
          x1="-270.244"
          x2="-155.755"
          y1="1130.5"
          y2="2404.04"
          gradientUnits="userSpaceOnUse"
        >
          <stop></stop>
          <stop offset="1" stopColor="#0ED7B5"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}