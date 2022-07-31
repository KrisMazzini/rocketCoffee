import styled from "styled-components";

export const Container = styled.div`
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    * {
        color: var(--text-color);
    }

    img {
        position: absolute;
        left: 21%;
    }

    button {
        position: absolute;
        right: 12%;
    }
`

export const Nav = styled.nav`
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;

    ul {
        display: flex;
        gap: 33px;
    }

    a {
        cursor: pointer;
    }
`