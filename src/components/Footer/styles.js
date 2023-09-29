import styled from "styled-components"

export const ContainerFooter = styled.section`
    display: flex;
    position: relative;
    padding: 5rem;
    justify-content: center;
    background: ${props => props.theme['border-avatar']};
`

export const FooterName = styled.h1`
    position: absolute;
    top: 5rem;
    color: #000;
    font-family: 'Baloo 2';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export const ContainerIcons = styled.div`
    display: flex;
    position: relative;
    margin-top: 10rem;
    gap: 5rem;
`