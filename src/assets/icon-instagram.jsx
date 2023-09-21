import { useTheme } from 'styled-components';

export function Instagram() {

  const theme = useTheme('styled-components')
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="35"
      fill="none"
      viewBox="0 0 39 35"
    >
      <path
        fill={theme['base-card']}
        d="M19.704 9.279a9.794 9.794 0 00-5.066 1.394c-1.5.91-2.669 2.202-3.36 3.714a7.568 7.568 0 00-.518 4.782c.352 1.605 1.22 3.08 2.496 4.238 1.275 1.157 2.9 1.945 4.67 2.264 1.768.32 3.602.156 5.269-.47 1.666-.627 3.09-1.688 4.093-3.049 1.002-1.36 1.537-2.96 1.537-4.598-.003-2.194-.965-4.297-2.675-5.849-1.71-1.551-4.027-2.424-6.445-2.426zm0 13.793a6.53 6.53 0 01-3.377-.93c-1-.606-1.78-1.468-2.24-2.476a5.045 5.045 0 01-.346-3.188 5.38 5.38 0 011.664-2.825 6.295 6.295 0 013.113-1.51 6.658 6.658 0 013.513.314c1.111.418 2.06 1.125 2.729 2.032a5.162 5.162 0 011.024 3.066c-.001 1.462-.642 2.865-1.782 3.899-1.14 1.034-2.685 1.616-4.297 1.618zm8.36-22.76h-16.72c-2.82.004-5.525 1.022-7.52 2.832C1.83 4.954.708 7.408.704 9.968v15.173c.004 2.56 1.126 5.014 3.12 6.824 1.995 1.81 4.7 2.828 7.52 2.831h16.72c2.822-.003 5.526-1.021 7.52-2.831 1.995-1.81 3.117-4.264 3.12-6.824V9.968c-.003-2.56-1.125-5.014-3.12-6.824-1.994-1.81-4.699-2.828-7.52-2.831zm7.6 24.829c-.002 1.828-.803 3.581-2.228 4.874-1.425 1.293-3.357 2.02-5.372 2.022h-16.72c-2.014-.002-3.946-.729-5.371-2.022-1.425-1.293-2.226-3.046-2.228-4.874V9.968c.002-1.828.803-3.581 2.228-4.874C7.398 3.8 9.33 3.074 11.345 3.072h16.72c2.014.002 3.946.729 5.371 2.022 1.425 1.293 2.226 3.046 2.228 4.874v15.173zm-3.8-16.552c0 .409-.133.81-.384 1.15-.25.34-.606.605-1.023.761a2.497 2.497 0 01-1.317.118 2.36 2.36 0 01-1.168-.566 2.018 2.018 0 01-.624-1.06 1.892 1.892 0 01.13-1.195c.173-.378.465-.701.84-.928a2.449 2.449 0 011.266-.35c.605 0 1.185.219 1.613.607.427.388.668.914.668 1.463z"
      ></path>
    </svg>
  );
}