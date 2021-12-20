import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 10rem 1rem;
    @media (max-width: 600px) {
        max-width: 100%;
    }
    & > *{
        color: var(--white);
        max-width: 50%;
        @media (max-width: 600px) {
            max-width: 100%;
        }
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    line-height: 1.125;
    font-weight: 800;
    margin: 0 0 1.5rem 0;
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`

export const Subtitle = styled.h2`
    font-size: 1.25rem;
    line-height: 1.125;
    font-weight: 300;
    margin: 0 0 1.5rem 0;
    @media (max-width: 600px) {
        font-size: 1.05rem;
    }
`
