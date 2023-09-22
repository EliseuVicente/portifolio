import { Container, LabelLinks, ProjectsContainer, ProjectsLabel, Title, Titles } from "./style";

import ProjectCoffee from "../../assets/image-projects/project-coffee.png"

import { IconGlobe } from "../../assets/icons/globe";
import { IconGithubProjects } from "../../assets/icons/github-projects";

export function Projects(){
    return (
        <Container>
            <Titles>
                <h1>Projetos</h1>
                <h2>Projetos Recentes</h2>
            </Titles>

            <ProjectsContainer>
                <ProjectsLabel>
                    <Title>Coffee Delivery</Title>

                        <img src={ProjectCoffee} height="270"/>

                        <LabelLinks>
                            <a href="https://master.d2qksk9lhdz8jx.amplifyapp.com/">
                                <IconGlobe />
                                <span>Projeto publicado</span>
                            </a>
                        </LabelLinks>

                        <LabelLinks>
                            <a href="https://github.com/EliseuVicente/coffe-delivery">
                                <IconGithubProjects />
                                <span>Projeto Git Hub</span>
                            </a>
                        </LabelLinks>
                                       
                </ProjectsLabel>
           

                <ProjectsLabel>
                    <Title>Ola</Title>
                </ProjectsLabel>
           

                <ProjectsLabel>
                    <Title>Ola</Title>
                </ProjectsLabel>
            </ProjectsContainer>
            
        </Container>
    )
}