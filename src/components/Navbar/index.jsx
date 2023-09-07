import { useContext } from "react";
import { Context } from "../../contexts/context";
import { DivTeste, HandleChangeTheme } from "./styles";

export function NavBar(){

const {DarkTheme, setDarkTheme} = useContext(Context)

const ChangeTheme = () => {
        setDarkTheme(!DarkTheme)
    }

    return (
        <>
         <h1>Hello World, I'm Eliseu Henrique !</h1>

         <HandleChangeTheme
            onClick={()=> ChangeTheme()}
         >Mudar tema</HandleChangeTheme>

         <DivTeste>
            <h1>Ola</h1>
         </DivTeste>
        </>
        

        
    )
}