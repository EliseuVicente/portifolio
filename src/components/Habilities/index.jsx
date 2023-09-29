import { IconAWS } from "../../assets/icons/aws";
import { IconCss } from "../../assets/icons/css";
import { IconHTML } from "../../assets/icons/html";
import { IconJavaScript } from "../../assets/icons/javaScript";
import { IconMysql } from "../../assets/icons/mysql";
import { IconNode } from "../../assets/icons/node";
import { IconReact } from "../../assets/icons/react";
import { IconTalwind } from "../../assets/icons/talwind";
import { Container, ContainerHabilitie, HabilitiesContainer, HabilitiesLabel, LevelHabilitie, TitleHabilitie, TitleLabel, Titles } from "./styles";

export function Habilities(){
    return (
        <Container id="habilities">
            <Titles>
                <h1>Habilidades</h1>
                <h2>Conhecimentos Técnicos</h2>
            </Titles>

            <HabilitiesContainer>

                <HabilitiesLabel>
                    <TitleLabel>Front-End</TitleLabel>

                    <ContainerHabilitie>
                        <IconReact />
                        <TitleHabilitie>React</TitleHabilitie>
                        <LevelHabilitie>Básico</LevelHabilitie>
                    </ContainerHabilitie>

                    <ContainerHabilitie>
                        <IconJavaScript />
                        <TitleHabilitie>JavaScript</TitleHabilitie>
                        <LevelHabilitie>Intermediário</LevelHabilitie>
                    </ContainerHabilitie>

                    <ContainerHabilitie>
                        <IconHTML />
                        <TitleHabilitie>HTML</TitleHabilitie>
                        <LevelHabilitie>Intermediário</LevelHabilitie>
                    </ContainerHabilitie>

                    <ContainerHabilitie>
                        <IconCss />
                        <TitleHabilitie>CSS</TitleHabilitie>
                        <LevelHabilitie>Intermediário</LevelHabilitie>
                    </ContainerHabilitie>

                    <ContainerHabilitie>
                        <IconTalwind />
                        <TitleHabilitie>Talwind</TitleHabilitie>
                        <LevelHabilitie>Básico</LevelHabilitie>
                    </ContainerHabilitie>

                </HabilitiesLabel>

                <HabilitiesLabel>
                    <TitleLabel>Back-End</TitleLabel>

                    <ContainerHabilitie>
                        <IconNode />
                        <TitleHabilitie>Node JS</TitleHabilitie>
                        <LevelHabilitie>Básico</LevelHabilitie>
                    </ContainerHabilitie>

                    <ContainerHabilitie>
                        <IconAWS />
                        <TitleHabilitie>AWS</TitleHabilitie>
                        <LevelHabilitie>Básico</LevelHabilitie>
                    </ContainerHabilitie>

                    <ContainerHabilitie>
                        <IconMysql />
                        <TitleHabilitie>MySQL</TitleHabilitie>
                        <LevelHabilitie>Básico</LevelHabilitie>
                    </ContainerHabilitie>

                    <ContainerHabilitie>

                    </ContainerHabilitie>
                </HabilitiesLabel>

            </HabilitiesContainer>

            
        </Container>
    )
}