import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const Title = styled.h1`
    font-size: 3rem;
    line-height: 1.125;
    font-weight: 800;
    margin: 0 0 1.5rem 0;
    @media (max-width: 600px) {
        font-size: 2rem;
    }
`
export const Subtitle = styled.h2`
    font-size: 1.5rem;
    line-height: 1.125;
    font-weight: 300;
    margin: 0 0 1.5rem 0;
    @media (max-width: 600px) {
        font-size: 1.25rem;
    }
`
export const ImgProfile = styled.img`
    border-radius: 50%;
    max-width: 20%;
    margin: 2rem 0;
    @media (max-width: 600px) {
        max-width: 40%;
    }
`

export const ImgIt = styled.img`
    max-width: 50%;
    margin: 2rem 0 0 0;
    @media (max-width: 600px) {
        max-width: 100%;
    }
`
