import { useContext, useEffect, useState } from "react";
import { Context } from "../../contexts/context";
import { CicleChengeTheme, Container, ContainerLogo, ContainerMenu, HandleChangeTheme, SmallMenu } from "./styles";
import { useWindowSize } from "@uidotdev/usehooks";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from "react-icons/ai";

export function NavBar(){

const [Scroll, setScroll] = useState(false)
const [OpenMenu, setOpenMenu] = useState(false)
const {DarkTheme, setDarkTheme} = useContext(Context)

const size = useWindowSize() 

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

const handleOpenMenu = () => {
    setOpenMenu(!OpenMenu)
}

    return (
        <>
         
        <Container 
            style={Scroll ? { borderBottom: '1px solid #d1d0cf53'} : {}}>

            <ContainerLogo>
                <p>EliseuVicente</p>
            </ContainerLogo>

            {
                size.width > 767 ?
                    <ContainerMenu>
                        <a href="#home"><li>Home</li></a>
                        <a href="#about"><li>Sobre Mim</li></a>
                        <a href="#habilities"><li>Habilidades</li></a>
                        <a href="#projects"><li>Projetos</li></a>
                        <a href="#contact"><li>Contato</li></a>
                    </ContainerMenu> : 
                    
                    <GiHamburgerMenu 
                        size={30}
                        color={ DarkTheme ? 'white' : 'black'}
                        onClick={handleOpenMenu}
                    />
            }
            


         <HandleChangeTheme
            onClick={()=> ChangeTheme()}>
                <CicleChengeTheme
                    style={{ [DarkTheme ? 'left' : 'rigth']: `${DarkTheme ? left : rigth}px`}}
                ></CicleChengeTheme>
            </HandleChangeTheme>

        </Container>

        { 
                OpenMenu &&
                <SmallMenu>
                    <AiFillCloseCircle 
                        size={40}
                        style={{"margin-top": "5rem"}}
                        color={ DarkTheme ? 'white' : 'black'}
                        onClick={handleOpenMenu}
                    />
                    <div>
                        <a href="#home" onClick={handleOpenMenu}><li>Home</li></a>
                        <a href="#about" onClick={handleOpenMenu}><li>Sobre Mim</li></a>
                        <a href="#habilities" onClick={handleOpenMenu}><li>Habilidades</li></a>
                        <a href="#projects" onClick={handleOpenMenu}><li>Projetos</li></a>
                        <a href="#contact" onClick={handleOpenMenu}><li>Contato</li></a>
                    </div>
                </SmallMenu>
            }
        
        </>
        

        
    )
}