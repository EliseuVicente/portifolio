import { IconGithub } from "../../assets/icons/github"
import { IconInstagram } from "../../assets/icons/instagram"
import { IconLinkedin } from "../../assets/icons/linkedin"
import { ContainerFooter, ContainerIcons, FooterName } from "./styles"

export function Footer(){
    return (

        <ContainerFooter>
            <FooterName>EliseuVicente</FooterName>


            <ContainerIcons>
                <a href="https://linkedin.com/in/eliseuvicenteh" target="_blank"><IconLinkedin /></a>
                <a href="https://www.instagram.com/eliseuvicenteh/" target="_blank"><IconInstagram /></a>
                <a href="https://github.com/EliseuVicente" target="_blank"><IconGithub /></a>
            </ContainerIcons>
            
        </ContainerFooter>
        
    )
}