import styled from 'styled-components'

export const ContainerAbout = styled.section`
    display: flex;
    position: relative;
    padding: 6rem 0rem;
    height: 50rem;
    justify-content: center;

    @media (max-width: 768px){
        align-items: center;
        height: 65rem;
    }
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
        text-align:center;
        top: 5rem;
        width: 100vw;
}
`

export const ContainerApresentation = styled.div`
    display: flex;
    position: relative;
    top: 12rem;
    gap: 150px;

    @media (max-width: 768px){
        display: block;
        top: 5rem;
        gap: 0px;
        width: 90vw;
}
`
export const Description = styled.div`
   width: 32rem;

   p{
        font-size: 20px;
        text-align: justify;
        color: ${props => props.theme['base-title']};
        font-family: 'Baloo 2';
        line-height: 150%;
   }

   strong{
        font-size: 18px;
        text-align: justify;
        font-family: 'Baloo 2';
        line-height: 180%;
   }

   @media (max-width: 768px){
    width: 90vw;
}

`

export const Picture = styled.img`
    width: 400px;
    height: 400px;
    position:relative;

    @media (max-width: 768px){
        width: 300px;
        height: 300px;
        top: 8rem;
        left: 50%;
        transform: translate(-50%, -50%);
        position: relative;
    }
   
`

export const ButtonCV = styled.button`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 237px;
    height: 67px;
    margin-top: 22rem;
    margin-left: 34rem;
    gap: 23px;
    font-style: normal;
    border:none;
    border-radius: 20px;
    cursor: pointer;
    background: ${props => props.theme['base-card']};

    color: ${props => props.theme['background']};
    font-family: 'Baloo 2';
    font-size: 20px;
    font-weight: 700;

    img{
        fill: ${props => props.theme['background']};   
    }

    @media (max-width: 768px){
        width: 70vw;
        margin-top: 5rem;
        margin-left: 50%;
        
        transform: translate(-50%, -50%);
    }
`