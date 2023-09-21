import { useTheme } from 'styled-components';


export function Github() {

  const theme = useTheme('styled-components')

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="30"
      fill="none"
      viewBox="0 0 34 30"
    >
      <g clipPath="url(#clip0_20_13)">
        <path
          fill={theme['base-card']}
          d="M32.239 7.178c.378-1.096.5-2.25.356-3.39a7.732 7.732 0 00-1.19-3.232 1.183 1.183 0 00-.453-.407A1.348 1.348 0 0030.334 0a10.122 10.122 0 00-4.154.876 9.083 9.083 0 00-3.274 2.457H19.19A9.085 9.085 0 0015.918.876 10.123 10.123 0 0011.762 0c-.218 0-.431.051-.62.149a1.183 1.183 0 00-.453.407A7.734 7.734 0 009.5 3.788a7.494 7.494 0 00.357 3.39 7.452 7.452 0 00-1.19 3.933v1.111c.002 1.88.763 3.696 2.14 5.112 1.379 1.416 3.28 2.337 5.356 2.592-.847.973-1.307 2.173-1.306 3.407v1.111h-3.714c-.985 0-1.93-.35-2.627-.976-.696-.625-1.087-1.473-1.087-2.357 0-.73-.16-1.452-.472-2.126a5.558 5.558 0 00-1.342-1.802 6.28 6.28 0 00-2.008-1.204 6.81 6.81 0 00-2.369-.423c-.328 0-.643.117-.875.325a1.057 1.057 0 00-.363.786c0 .294.13.577.363.785.232.209.547.326.875.326.985 0 1.93.351 2.626.976.697.625 1.088 1.473 1.088 2.357 0 1.473.653 2.887 1.814 3.928 1.16 1.042 2.735 1.628 4.377 1.628h3.714v2.222c0 .295.13.577.363.786.232.208.547.325.875.325.329 0 .643-.117.876-.325.232-.209.362-.491.362-.786v-5.556c0-.884.392-1.732 1.088-2.357.697-.625 1.642-.976 2.627-.976.985 0 1.93.351 2.626.976.697.625 1.088 1.473 1.088 2.357v5.556c0 .295.13.577.363.786.232.208.547.325.875.325.328 0 .643-.117.875-.325.233-.209.363-.491.363-.786v-5.556c0-1.234-.459-2.434-1.306-3.407 2.075-.255 3.978-1.176 5.356-2.592 1.378-1.416 2.138-3.232 2.14-5.112v-1.11a7.452 7.452 0 00-1.19-3.934zm-1.287 5.044c0 1.474-.652 2.887-1.813 3.929-1.16 1.041-2.735 1.627-4.377 1.627h-7.429c-1.641 0-3.216-.585-4.377-1.627-1.16-1.042-1.813-2.455-1.813-3.929v-1.11a5.386 5.386 0 011.068-3.123c.127-.15.21-.327.239-.514.03-.187.006-.378-.069-.554a5.533 5.533 0 01-.457-2.343c.021-.8.218-1.59.58-2.321a7.32 7.32 0 012.854.881 6.5 6.5 0 012.147 1.905c.112.157.265.286.447.375.181.09.384.137.592.138h5.006c.208 0 .412-.047.595-.137.182-.09.336-.219.448-.376a6.499 6.499 0 012.147-1.905 7.318 7.318 0 012.855-.881c.36.732.557 1.52.578 2.321a5.53 5.53 0 01-.459 2.343c-.074.175-.1.363-.073.549.028.185.106.362.228.513a5.387 5.387 0 011.083 3.128v1.111z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_20_13">
          <path fill="#fff" d="M0 0H33.429V30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

