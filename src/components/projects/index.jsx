import { Container, LabelLinks, ProjectsContainer, ProjectsLabel, Title, Titles } from "./style";

import ProjectCoffee from "../../assets/image-projects/project-coffee.png"
import ProjectTimer from "../../assets/image-projects/project-timer.png"
import ProjectDo from "../../assets/image-projects/project-todo.jpeg"
import ProjectJS from "../../assets/image-projects/project-jsengenharia.png"

import { IconGlobe } from "../../assets/icons/globe";
import { IconGithubProjects } from "../../assets/icons/github-projects";

export function Projects(){
    return (
        <Container id="projects">
            <Titles>
                <h1>Projetos</h1>
                <h2>Projetos Recentes</h2>
            </Titles>

            <ProjectsContainer>
                <ProjectsLabel>
                    <Title>Coffee Delivery</Title>

                        <img src={ProjectCoffee} height="180"/>

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
                    <Title>Timer</Title>

                    <img src={ProjectTimer} height="180"/>

                    <LabelLinks>
                        <a href="https://master.d6obzennd2jk9.amplifyapp.com/">
                            <IconGlobe />
                            <span>Projeto publicado</span>
                        </a>
                    </LabelLinks>

                    <LabelLinks>
                        <a href="https://github.com/EliseuVicente/02-ignite-timer">
                            <IconGithubProjects />
                            <span>Projeto Git Hub</span>
                        </a>
                    </LabelLinks>
                </ProjectsLabel>
           

                <ProjectsLabel>
                    <Title>To Do</Title>

                    <img src={ProjectDo} height="180"/>

                    <LabelLinks>
                        <a href="https://master.drieb3nkoy6ts.amplifyapp.com/">
                            <IconGlobe />
                            <span>Projeto publicado</span>
                        </a>
                    </LabelLinks>

                    <LabelLinks>
                        <a href="https://github.com/EliseuVicente/toDo-react">
                            <IconGithubProjects />
                            <span>Projeto Git Hub</span>
                        </a>
                    </LabelLinks>
                </ProjectsLabel>

                <ProjectsLabel>
                    <Title>JS Engenharia do Trabalho</Title>

                    <img src={ProjectJS} height="180"/>

                    <LabelLinks>
                        <a href="https://www.jsengenhariadotrabalho.com.br/">
                            <IconGlobe />
                            <span>Projeto publicado</span>
                        </a>
                    </LabelLinks>

                    <LabelLinks>
                        <a href="https://github.com/EliseuVicente/jsassessoria">
                            <IconGithubProjects />
                            <span>Projeto Git Hub</span>
                        </a>
                    </LabelLinks>
                </ProjectsLabel>

            </ProjectsContainer>
            
        </Container>
    )
}