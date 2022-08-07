import styled from 'styled-components'

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    
    position: sticky;
    z-index: 2;
`

export const Main = styled.main`

margin-top: 40px;

display: flex;
flex-direction: column;
align-items: center;


h1, h2 {
    font-weight: 700;
    font-size: 80px;
    letter-spacing: -0.03em;
    line-height: 109px;
}

h1 {
    color: var(--text-color);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

h2 {
    text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
}

img {
    width: 798.78px;
}
`