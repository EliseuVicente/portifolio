import { IconEmail } from "../../assets/icons/email";
import { IconLinkedinContact } from "../../assets/icons/linkedin-contact";
import { IconWhatsapp } from "../../assets/icons/whatsapp";
import { Container, ContainerContact, LabelContact, Titles } from "./styles";

export function Contact(){
    return (

        <Container id="contact">
            <Titles>
                <h1>Contato</h1>
                <h2>Entre em contato, vamos trabalhar juntos ! </h2>
            </Titles>

            <ContainerContact>
                <p>Fale Comigo</p>

                <a href="mailto:eliseu965@gmail.com" target="_blank">
                    <LabelContact>
                        <h1>E-mail</h1>
                        <IconEmail />
                        <span>eliseu965@gmail.com</span>
                    </LabelContact>
                </a>

                <a href="https://wa.me/5519987252725" target="_blank">
                    <LabelContact>
                        <h1>Whatsapp</h1>
                        <IconWhatsapp />
                        <span>+55 19 98725-2725</span>
                    </LabelContact>
                </a>

                <a  href="https://linkedin.com/in/eliseuvicenteh" target="_blank">
                <LabelContact>
                    
                        <h1>Linkedin</h1>
                        <IconLinkedinContact />
                        <span>linkedin.com/in/eliseuvicenteh</span>

                </LabelContact>
                </a>
            </ContainerContact>
            
        </Container>
    )
}