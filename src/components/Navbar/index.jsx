import { useContext, useState } from "react";
import { Context } from "../../contexts/context";
import { CicleChengeTheme, Container, ContainerLogo, ContainerMenu, HandleChangeTheme } from "./styles";

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
                <p>EliseuVicente</p>
            </ContainerLogo>
        
            <ContainerMenu>
                <a><li>Home</li></a>
                <a><li>Sobre Mim</li></a>
                <a><li>Habilidades</li></a>
                <a><li>Projetos</li></a>
                <a><li>Contato</li></a>
            </ContainerMenu>


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