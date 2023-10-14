import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    padding: 1rem 5rem;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    background: ${props => props.theme['background']};

    @media (max-width: 768px){
        justify-content: space-around;
        padding: 1rem; 
    }
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
    // flex-shrink: 0;
    
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

export const SmallMenu = styled.div`
    display: block;
    background: ${props => props.theme['border-avatar']};
    opacity: 0.97;
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    
    text-align: center;

    a{
        text-decoration: none;
        color: ${props => props.theme['background']};
        font-size: 28px;
       
    }

    li{
        text-decoration: none;
        list-style-type: none;
        margin: 2rem;
    }
`

export const HandleChangeTheme = styled.div`
    width: 3rem;
    height: 1.5rem;
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
    top: 2.5px;
    left: 2px;
    width: 1rem;
    height: 1rem;
    background: ${props => props.theme['background']};
    border-radius: 50px;

`