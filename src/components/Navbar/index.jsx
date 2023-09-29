import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/context";
import { CicleChengeTheme, Container, ContainerLogo, ContainerMenu, HandleChangeTheme } from "./styles";

export function NavBar(){

const [Scroll, setScroll] = useState(false)
const {DarkTheme, setDarkTheme} = useContext(Context)

useEffect( () => {
    window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

const handleScroll = () => {
    if (window.scrollY > 100){
        setScroll(true)
    } else {
        setScroll(false)
    }
}


const left = 26
const rigth = 0

const ChangeTheme = () => {
        setDarkTheme(!DarkTheme)
    }


    return (
        <>
         
        <Container 
            style={Scroll ? { borderBottom: '1px solid #d1d0cf53'} : {}}>

            <ContainerLogo>
                <p>EliseuVicente</p>
            </ContainerLogo>
        
            <ContainerMenu>
                <a href="#home"><li>Home</li></a>
                <a href="#about"><li>Sobre Mim</li></a>
                <a href="#habilities"><li>Habilidades</li></a>
                <a href="#projects"><li>Projetos</li></a>
                <a href="#contact"><li>Contato</li></a>
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