import { IconGithub } from "../../assets/icons/github"
import { IconInstagram } from "../../assets/icons/instagram"
import { IconLinkedin } from "../../assets/icons/linkedin"
import { ContainerFooter, ContainerIcons, FooterName } from "./styles"

export function Footer(){
    return (

        <ContainerFooter>
            <FooterName>EliseuVicente</FooterName>


            <ContainerIcons>
                <IconLinkedin />
                <IconInstagram />
                <IconGithub />
            </ContainerIcons>
            
        </ContainerFooter>
        
    )
}