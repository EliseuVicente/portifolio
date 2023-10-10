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
            <p>Persistência, foco, resiliência e otimismo. Essas palavras me resumem, sempre estou disposto e animado a 
              encarar novos desafios. Não me permito viver no comodismo.
              Com experiência em Suporte e Infraestrutura de T.I, pude trabalhar nos mais variados ambientes e escopos. 
              Agora nesta etapa com o desenvolvimento, quero somar toda a minha
              experiência em T.I para evoluir no mundo da Tecnologia.
            </p>
            <strong>Baixe o meu currículo e conheça um pouco mais de minhas experiências !</strong>
          </Description>

          <ButtonCV onClick={handleDownloadCV}>
              Download CV
              <IconDoc />
              
          </ButtonCV>
          
        </ContainerApresentation>

      </ContainerAbout>

      
    )
}