import styled from "styled-components";

export const Container = styled.div`
    div {
        width: 48px;
        height: 48px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 30px;
        right: 20px;
    }
    
    div > img {
        cursor: pointer;
        position: static;
    }
`

export const DesktopNav = styled.nav`
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;

    color: var(--text-color);

    ul {
        display: flex;
        gap: 33px;
    }

    a {
        cursor: pointer;
    }
`

export const MobileNav = styled.nav`
    min-height: 100vh;
    min-width: 100vw;

    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    background-color: var(--background);
    color: var(--border-menu-mobile);

    position: fixed;
    top: 104px;
    bottom: 0;
    right: 0;

    ul {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    li {
        display: flex;
        align-items: center;
        height: 57px;
        padding-left: 31px;
        
        cursor: pointer;
        
        border-top: 1px solid var(--border);

        :hover {
            border-left: 5px solid var(--button);
            font-weight: 700;
            color: var(--text-color-menu-mobile);
            padding-left: 26px;
        }
    }
`