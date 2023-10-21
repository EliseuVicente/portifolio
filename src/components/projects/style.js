import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    position: relative;
    padding: 6rem 0rem;
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

    @media (max-width: 768px){
        justify-content: center;
        text-align: center;
        width: 100vw;
     }

`

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem 4.813rem;
    margin-top: 13rem;
    justify-content: center;

    @media(max-width: 868px){
        grid-template-columns: 1fr;
    }
`

export const ProjectsLabel = styled.div`
    width: 33rem;
    height: 28rem;
    border-radius:20px;
    border: 2px solid ${props => props.theme['border-avatar']};
    background: #FAFAFA;

    img {
        margin-left: 7rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    @media (max-width: 768px){
        width: 90vw;

        img{
            margin-bottom: 0rem;
            margin-left: 50%;
            transform: translate(-50%);
        }
     }
`

export const Title = styled.h1`
    color: #000;
    font-family: 'Baloo 2';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;

    @media (max-width: 768px){
        width: 90vw;
        font-size: 25px;
     }

`

export const LabelLinks = styled.div`
    display: inline-flex;
    width: 15rem;
    margin-top: 1.5rem;
    justify-content: center;
    /* gap: 5rem; */

    span{
        position: relative;
        color: #574F4D;
        font-family: 'Baloo 2';
        top: -0.6rem;
        left: 1rem;
        font-size: 15px;
        font-weight: 400;
    }

    a{
        text-decoration: none;
    }

    @media (max-width: 768px){
        width: 40vw;
        margin-top: 5rem;
        margin-left: .5rem;
        span{
            left: .3rem;
        }
    }
`