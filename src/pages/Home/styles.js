import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    position: relative;
    justify-content: space-around;
    padding: 2rem 8rem;
`

export const ContainerAvatar = styled.div`
   
    img{
        border: 10px solid ${props => props.theme['border-avatar']};
        border-radius: 100%;
        width: 20.5rem;
        height: 20rem;
    }
`
export const ContainerApresentation = styled.div`
        margin-left: 3rem;
        padding: 0rem 2rem;
        width: 35rem;
        border: 1px solid ${props => props.theme['border-avatar']};
        border-radius: 5%;
    
        h1 {
        font-family: 'Baloo 2';
        font-size: 40px;
        color: ${props => props.theme['base-title']};
        text-align: center;
        }
        h2{
            font-size: 18px;
            color: ${props => props.theme['base-subtitle']};
        }

        p{
            font-size: 15px;
            text-align: justify;
            color: ${props => props.theme['base-text']};
            line-height: 130%;
        }
    
`