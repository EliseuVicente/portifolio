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

`

export const HabilitiesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem 4.813rem;
    margin-top: 13rem;
    justify-content: center;
`

export const HabilitiesLabel = styled.div`
    /* flex: 1 1 auto; */
    width: 528px;
    height: 25rem;
    border-radius: 80px 20px;
    border: 2px solid ${props => props.theme['border-avatar']};
    background: #FAFAFA;
`

export const TitleLabel = styled.h1`
    color: ${props => props.theme['border-avatar']};
    font-family: 'Baloo 2';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
`

export const ContainerHabilitie = styled.div`
    display: inline-flex;
    position: relative;
    width: 10rem;
    margin-bottom: 3rem;
    margin-left: 4rem;
`

export const TitleHabilitie = styled.h1`
    margin-top: -0.1rem;
    margin-left: .5rem;
    color: #272221;
    font-family: 'Baloo 2';
    font-size: 25px;
    font-weight: 700;
`