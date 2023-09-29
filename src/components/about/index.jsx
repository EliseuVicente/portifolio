import { ContainerApresentation, ButtonCV, ContainerAbout, Picture, Titles, Description } from "./styles";
import picture from "../../assets/picture-about.svg"
import { IconDoc } from "../../assets/icons/doc";

export function About(){

  const fileUrl = ('/CV.pdf')
  const fileName = ('EliseuVicente.pdf')

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = fileUrl
    link.download = fileName
    link.click()
  }


    return (
      <ContainerAbout id="about">

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

          <ButtonCV onClick={handleDownloadCV}>
              Download CV
              <IconDoc />
              
          </ButtonCV>
          
        </ContainerApresentation>

      </ContainerAbout>

      
    )
}