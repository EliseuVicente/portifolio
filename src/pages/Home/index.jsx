import { Container, ContainerApresentation, ContainerAvatar } from "./styles";
import avatar from "../../assets/avatar.png"

export function Home(){
    return(
       <>
       <Container>
            <ContainerAvatar>
                    <img src={avatar}/>
            </ContainerAvatar>

            <ContainerApresentation>
                <h1>Hi There !</h1>
                <h2>É um imenso prazer ter você aqui no meu site !</h2>
                <br/>
                <p>Meu nome é Eliseu Vicente e amo tecnologia !</p>
                <p>Ao longo da minha carreira, tenho trabalhado com suporte e infraestrutura de TI, 
                    mas recentemente tenho me envolvido mais com desenvolvimento, descobrindo um mundo de possibilidades.
                </p>
                <p>Amo encontrar soluções e resolver problemas, alem disso, amo estar sempre aprendendo coisas novas que
                    contribuirão com a minha trajetoria !
                </p>
                <br/>
                <p><strong>Fique a vontade para entrar em contato e conversarmos, estou sempre a disposição !</strong></p>
            </ContainerApresentation>
       </Container>
       
       </>
    )
}