import styled from 'styled-components'

export const ContainerAbout = styled.section`
    display: flex;
    position: relative;
    padding: 6rem 0rem;
    height: 50rem;
    justify-content: center;
`

export const Titles = styled.div`
    width: 16rem;
    position: absolute;
    font-family: 'Baloo 2';

    h1{
        font-size: 45px;
        color: ${props => props.theme['base-title']};
    }

    h2{
        margin-top: -15px;
        margin-left: 5px;
        font-size: 21px;
        font-weight: 400;
        color: ${props => props.theme['base-subtitle']};
    }

`

export const ContainerApresentation = styled.div`
    display: flex;
    position: relative;
    top: 12rem;
    gap: 200px;
`
export const Description = styled.div`
   width: 30rem;

   p{
        font-size: 20px;
        text-align: justify;
        color: ${props => props.theme['base-title']};
        font-family: 'Baloo 2';
        line-height: 150%;
   }
`

export const Picture = styled.img`
    width: 400px;
    height: 400px;
    position:relative;
   
`

export const ButtonCV = styled.button`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 237px;
    height: 67px;
    margin-top: 21rem;
    margin-left: 37rem;
    gap: 23px;
    font-style: normal;
    border:none;
    border-radius: 20px;
    background: ${props => props.theme['base-card']};

    color: ${props => props.theme['background']};
    font-family: 'Baloo 2';
    font-size: 20px;
    font-weight: 700;

    img{
        fill: ${props => props.theme['background']};   
    }
`