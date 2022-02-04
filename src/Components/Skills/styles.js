import styled from 'styled-components'

const width = '400px'

export const Container = styled.div`
    width: ${width};
    background-color: var(--white);
    border-radius: 8px;
    text-align: center;
    padding: 2rem;
    box-sizing: border-box;  
    transform: translateY(-25%);
    box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
    @media (max-width: 600px) {
        width: 90%;
        transform: translateY(-16%);
    }
`
export const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 100%;
    margin-top: 0;
`
export const P = styled.p`
    color: var(--colorPrimaryMain);
    font-weight: 600;
    margin-top: 2rem;
`
export const Bold = styled.p`    
    font-weight: 500;
`

export const Img = styled.img`
    width: 50px;
`

export const ContainerLogo = styled.li`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 16px;
    padding: 1rem;
    & > *:{
        margin: 0 .5rem;
    }
`
