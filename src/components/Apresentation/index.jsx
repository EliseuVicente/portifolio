import { ButtonContact, Container, ContainerApresentation, ContainerAvatar, ContainerSocialMedias } from "./styles";
import avatar from "../../assets/avatar.png"

import { Linkedin } from "../../assets/icon-linkedin";
import { Instagram } from "../../assets/icon-instagram";
import { Github } from "../../assets/icon-github";

export function Apresentation(){
    return(
        <Container>

            <ContainerSocialMedias>
                <Linkedin />
                <Instagram />
                <Github />
            </ContainerSocialMedias>
            
            <ContainerApresentation>
                <h1>Eliseu Vicente</h1>
                <h2>Front-End Developer</h2>
                <br/>
                <p> Amo descobrir coisas novas e sempre estou aberto para aprender mais e mais.
                    Meu objetivo é resolver problemas, trazendo soluções tecnológicas e amigáveis. 
                </p>

                <ButtonContact type="button">
                    Entre em contato
                </ButtonContact>
                
            </ContainerApresentation>

            <ContainerAvatar >
                    <img src={avatar}/>
            </ContainerAvatar>

       </Container>
    )
}

