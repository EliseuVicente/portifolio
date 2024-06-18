import { ButtonContact, Container, ContainerApresentation, ContainerAvatar, ContainerSocialMedias } from "./styles";
import avatar from "../../assets/avatar.png"
import { IconLinkedin } from "../../assets/icons/linkedin";
import { IconGithub } from "../../assets/icons/github";
import { IconInstagram } from "../../assets/icons/instagram";

export function Apresentation(){
    return(
        <Container id="home">

            <ContainerSocialMedias>
                <a href="https://linkedin.com/in/eliseuvicenteh" target="_blank"><IconLinkedin/></a>
                <a href="https://www.instagram.com/eliseuvicenteh/" target="_blank"><IconInstagram /></a>
                <a href="https://github.com/EliseuVicente" target="_blank"><IconGithub /></a>
            </ContainerSocialMedias>
            
            <ContainerApresentation>
                <h1>Eliseu Vicente</h1>
                <h2>Front-End Developer</h2>
                <br/>
                <p> Amo descobrir coisas novas e estou sempre aberto para aprender e aprimorar meu conhecimento.
                    Meu objetivo é resolver problemas através de soluções tecnológicas e amigáveis.
                </p>

                <a href="#contact">
                    <ButtonContact 
                        type="bottom">
                        Entre em contato
                    </ButtonContact>
                </a>
                
            </ContainerApresentation>

            <ContainerAvatar >
                    <img src={avatar}/>
            </ContainerAvatar>

       </Container>
    )
}

