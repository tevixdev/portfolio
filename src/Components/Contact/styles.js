import styled from 'styled-components'

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px;
`

export const Img = styled.img`
    width: 150px;
    @media (max-width: 600px){
        width: 30%;
    }
`
export const Title = styled.h1`
    font-weight: 300;
    font-size: 1.6rem;
    margin: 2rem auto;    
    opacity: 0.7;
    color: var(--white);
    max-width: 400px;
    text-align: center;
       @media (max-width: 600px){
        font-size: 1.1rem;
    }
}
`

export const ContainerIcons = styled.div`
    margin-right: auto;
    margin-left: auto;
}
`
export const A = styled.a`
    font-size: 35px;
    border: 3px solid #ffffff85;
    padding: 1rem 1.2rem;
    border-radius: 50%;    
    margin: 0 1rem;
    color: var(--white);
    transition: .3s background-color ease, .3s color ease; 
    background-color: transparent;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        transition: .3s background-color ease, .3s color ease; 
        background-color: var(--white);
        color: var(--colorPrimaryMain)
    }
    @media (max-width: 600px){
        font-size: 25px;
        padding: .7rem .9rem;
    }
}
`
