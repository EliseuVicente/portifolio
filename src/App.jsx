import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from "./styles/themes/global"
import { ThemeProvider } from "styled-components"
import { themes } from "./styles/themes/default";
import { Context} from "./contexts/context";
import { useContext } from "react";

export function App() {
 
const { DarkTheme } = useContext(Context)

const theme = DarkTheme == true ? themes.dark : themes.light


  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
    </ThemeProvider>
      
  
  )
}