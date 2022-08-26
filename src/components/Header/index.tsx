import styled from "styled-components";

import mobileLogo from "../../assets/logo-mobile.svg"
import openMenu from "../../assets/menu-buguer-open.svg"

export function Header() {
    return (
        <MobileHeader>
            <img src={mobileLogo} alt="Logo" />
            <img src={openMenu} alt="Open Menu" />
        </MobileHeader>
    )
}

const MobileHeader = styled.header`
    width: 100%;
    height: 95.5px;

    padding: 0 26px;
    border-bottom: 1px solid var(--border);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    overflow: hidden;
`