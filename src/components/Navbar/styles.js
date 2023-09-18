import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 1rem 5rem;
    justify-content: space-between;
    align-items: center;
`
export const ContainerLogo = styled.div`
    display: flex;

    p {
        color: ${props => props.theme['base-title']};
        font-size: 25px;
        font-family: 'Baloo 2';
    }
`

export const ContainerMenu = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 25px;
    flex-shrink: 0;

    a{
        text-decoration: none;
        color: ${props => props.theme['base-title']};
        font-size: 18px;
        
    }

    li{
        text-decoration: none;
        list-style-type: none;
    }

    :hover{
        cursor: pointer;
        color: #fff;
        border: 1px solid ${props => props.theme['base-subtitle']};
        background-color: ${props => props.theme['base-subtitle']};
        border-radius: 10px;
        padding: 4px;
        margin: -5px;
    }
`

export const HandleChangeTheme = styled.div`
    width: 3rem;
    height: 1.3rem;
    background: ${props => props.theme['base-card']};
    border: 1px solid black;
    border-radius: 50px;
    
    :hover{
        cursor: pointer;
    }
`

export const CicleChengeTheme = styled.div`
    display: flex;
    position:relative;
    top: 1px;
    left: 2px;
    width: 1rem;
    height: 1rem;
    background: ${props => props.theme['background']};
    border-radius: 50px;

`