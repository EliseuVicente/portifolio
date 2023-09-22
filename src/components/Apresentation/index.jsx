import { ButtonContact, Container, ContainerApresentation, ContainerAvatar, ContainerSocialMedias } from "./styles";
import avatar from "../../assets/avatar.png"
import { IconLinkedin } from "../../assets/icons/linkedin";
import { IconGithub } from "../../assets/icons/github";
import { IconInstagram } from "../../assets/icons/instagram";

export function Apresentation(){
    return(
        <Container>

            <ContainerSocialMedias>
                <IconLinkedin />
                <IconInstagram />
                <IconGithub />
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

