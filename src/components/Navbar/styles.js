import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
   
    margin: 1rem 2rem 0;
    padding: 1rem 5rem;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${props => props.theme['base-title']};
    border-radius: 10px;
`
export const ContainerLogo = styled.div`
    display: flex;

    p {
        color: ${props => props.theme['base-title']};
        font-size: 30px;
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