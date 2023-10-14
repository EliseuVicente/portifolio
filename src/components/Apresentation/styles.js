import styled from 'styled-components'


export const Container = styled.section`
    display: flex;
    position: relative;
    padding: 10rem 0rem;
    height: 45rem;
    justify-content: space-around;

    @media (max-width: 768px){
        padding: 7rem 0rem;
        justify-content: center;
        height: 35rem;
    }
    
`

export const ContainerSocialMedias = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 19.884px;

    @media (max-width: 768px){
        flex-direction: row;
        position: absolute;
        gap: 55px;
        margin-top: 18rem;
    }
`

export const ContainerApresentation = styled.div`
        width: 25rem;

        h1 {
        margin-top: 20px;
        font-family: 'Baloo 2';
        font-size: 35px;
        color: ${props => props.theme['base-title']};

        }
        h2{
            font-size: 18px;
            color: ${props => props.theme['base-subtitle']};
            margin-top: -6px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        p{
            font-size: 20px;
            text-align: justify;
            color: ${props => props.theme['base-title']};
            font-family: 'Baloo 2';
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
        }
        @media (max-width: 768px){
            width: 85vw;
            text-align: center;
            
        }
`

export const ButtonContact = styled.button`
    width: 16.25rem;
    height: 4.875rem;
    border-radius: 20px;
    margin-top: 5.813rem;
    background-color: ${props => props.theme['border-avatar']};
    border: none;

    color: #F5F5F5;
    font-family: 'Baloo 2';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    transition: all 0.5s ease-in;

    :hover{
       /*  transform: scale(1.1); */
        background-color: #F5F5F5;
        color: black;
    }

    @media (max-width: 768px){
        margin-top: 8rem;

    }
`

export const ContainerAvatar = styled.div`
   
    img{
        border: 15px solid ${props => props.theme['border-avatar']};
        border-radius: 100%;
        width: 27.438rem;
        height: 27.438rem;
        margin-right: 6rem;
    }

    @media (max-width: 768px){
       display: none;
    }
`