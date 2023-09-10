import { useContext, useState } from "react";
import { Context } from "../../contexts/context";
import { CicleChengeTheme, Container, ContainerLogo, HandleChangeTheme } from "./styles";

export function NavBar(){

const {DarkTheme, setDarkTheme} = useContext(Context)

const left = 26
const rigth = 0

const ChangeTheme = () => {
        setDarkTheme(!DarkTheme)
    }

    return (
        <>
         
        <Container>

            <ContainerLogo>
                <p>Eliseu Vicente</p>
            </ContainerLogo>
        
         <HandleChangeTheme
            onClick={()=> ChangeTheme()}>
                <CicleChengeTheme
                    style={{ [DarkTheme ? 'left' : 'rigth']: `${DarkTheme ? left : rigth}px`}}
                ></CicleChengeTheme>
            </HandleChangeTheme>

        </Container>
        
        </>
        

        
    )
}