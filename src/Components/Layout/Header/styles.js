import styled from 'styled-components'

export const Nav = styled.nav`        
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2rem;
        height: var(--header);
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 100000;
    @media (max-width: 600px) {
        height: calc(var(--header) / 1.5);
    }
`
export const Img = styled.img`
    height: 50%;
`
