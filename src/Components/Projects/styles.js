import styled from 'styled-components'

export const Div = styled.div`
    width: 100%;
`

export const Title = styled.h1`
    font-size: 2rem;
    line-height: 1.125;
    font-weight: 800;
    margin: 0;
    margin-bottom: 1.5rem;
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`

export const TitleImg = styled.h1`
    font-size: 1.5rem;
    line-height: 1.125;
    font-weight: 800;
    margin: 0;
    animation: opacity 1s ease;
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`
export const Description = styled.div`
    height: 100%;
    padding: 0 1rem;
    margin: 0;
    animation: opacity 1s ease;
    @keyframes opacity {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const Subtitle = styled.h2`
    font-size: 1.25rem;
    line-height: 1.125;
    font-weight: 300;
    margin: 0;
    margin-bottom: 1.5rem;
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    position: absolute;
    top: 0;
    left: 0;
    &:hover{
        animation: 5s scale ease
    }
    @keyframes scale{
        0% {
            transform: scale(.1)
        }
        100% {
            transform: scale(1)
        }
    }
`

export const ContainerImg = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: 0;
    padding: 0;
    text-align: center;
    font-weight: 600;
    opacity:  ${({ opacity }) => opacity};
    z-index: 10;
    color: white;
    border-radius: 12px;
    background-color: ${({ color }) => color};
`

export const ContainerProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 24px;
    padding: 64px 0;
    justify-content: center;
    @media (max-width: 1430px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, .7fr));
    }
`

export const Figure = styled.figure`
    margin: 0;
    height: 100%;
    min-height: 250px;
    position: relative;
    @media (max-width: 1430px) {
        min-height: 204px;
    }
`

export const P = styled.p`
    padding-top: 1rem;
    font-size: 1.3rem;
    line-height: 1.125;
    @media (max-width: 1500px) {
        font-size: 1.1rem;
    }
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`
export const I = styled.i`
    margin-left: 1rem;
`

export const Button = styled.a`
    margin: .8rem 0 0 0;
    padding: .8rem 2rem;
    transition: .3s background-color ease;
    background-color: transparent;
    border: 3px solid var(--colorPrimaryMain);
    font-size: 18px;    
    border-radius: 32px;
    font-weight: 600;
    color: ${({ color }) => color};
    cursor: pointer;
    text-decoration: none;
    &:hover{
        color: ${({ colorHover }) => colorHover};
        transition: .3s background-color ease;
        background-color: var(--colorPrimaryMain);
    }
    @media (max-width: 600px){
        padding: 0.5rem 1rem;
        font-size: 14px;
    }
`
