import { ContainerApresentation, ButtonCV, ContainerAbout, Picture, Titles, Description } from "./styles";
import picture from "../../assets/picture-about.svg"
import { Icon } from "../../assets/icon-doc";

export function About(){


    return (
      <ContainerAbout>

        <Titles>
          <h1>Sobre Mim</h1>
          <h2>Apresentação Pessoal</h2>

        </Titles>

        <ContainerApresentation>
        
          <Picture src={picture} />

          <Description>
            <p>dvdsajognfegennoerfforaefroefreio 
              ifjareiofjaeriofjeorfjaorifaeorfho 
              aeruhfueirhfearufheroufhrreo</p>
          </Description>

          <ButtonCV>
              Download CV
              <Icon />
              
          </ButtonCV>
          
        </ContainerApresentation>

      </ContainerAbout>

      
    )
}