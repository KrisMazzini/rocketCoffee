import styled from "styled-components";

export const DesktopNav = styled.nav`
    width: 430px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;

    position: absolute;
    left: calc((100% - 430px) / 2);

    color: var(--text-color);

    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    a {
        cursor: pointer;
    }
`

export const MobileNav = styled.nav`
    width: 100%;
    min-height: 100vh;

    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    background-color: var(--background);
    color: var(--border-menu-mobile);

    flex: 1 0 100%;

    margin-top: 26px;

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