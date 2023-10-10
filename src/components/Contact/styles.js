import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    position: relative;
    padding: 6rem 0rem;
    justify-content: center;  
`

export const Titles = styled.div`
    position: absolute;
    font-family: 'Baloo 2';
    text-align: center;

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

export const ContainerContact = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    padding: 7rem;
    margin-top: 5rem;
    margin-bottom: 8rem;
    text-align: start;
    gap: 9.063rem;

    justify-content: center;
    align-items: center;
    
    @media(max-width: 968px){
        flex-wrap: wrap;
    }

    p{
        position: absolute;
        color: ${props => props.theme['base-title']};
        font-family: 'Baloo 2';
        font-size: 45px;
        left: 5rem;
        top: 5rem;
    }
`

export const LabelContact = styled.div`
    display: flex;
    position: relative;
    margin-top: 10rem;
    margin-bottom: -15rem;
    width: 19rem;
    height: 14rem;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: #FAFAFA;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1{
        display: block;
        position: absolute;
        margin-top: -10rem;
        color: #574F4D;
        font-family: 'Baloo 2';
        font-size: 20px;
        font-weight: 700;
    }

    span{
        position: absolute;
        top: 11rem;
        color: #4B2995;
        font-family: 'Baloo 2';
        font-size: 15px;
    }
`