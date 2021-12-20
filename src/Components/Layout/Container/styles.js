import styled from 'styled-components'

export const Section = styled.section`
    max-width: 1366px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem 0 1rem;
    text-align: center;
      @media (max-width: 600px) {
        width: auto;
        padding: 4rem 1rem 1rem 1rem;
    }
`
