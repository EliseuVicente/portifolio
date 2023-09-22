import { useTheme } from "styled-components";

export function IconMysql() {

    const theme = useTheme('styled-components')

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="33"
      fill="none"
      viewBox="0 0 28 33"
    >
      <path
        fill="#000"
        d="M28 4.714v2.947c0 2.596-6.27 4.714-14 4.714S0 10.257 0 7.661V4.714C0 2.118 6.27 0 14 0s14 2.118 14 4.714zm0 6.63v6.63c0 2.596-6.27 4.713-14 4.713S0 20.57 0 17.974v-6.63c3.008 2.137 8.513 3.131 14 3.131s10.992-.994 14-3.13zm0 10.312v6.63C28 30.882 21.73 33 14 33S0 30.882 0 28.286v-6.63c3.008 2.136 8.513 3.13 14 3.13s10.992-.994 14-3.13z"
      ></path>
    </svg>
  );
}
