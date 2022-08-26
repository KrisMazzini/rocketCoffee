import { useContext, useState, useEffect } from "react";
import { NavigationContext } from "../../contexts/NavigationContext";
import styled from "styled-components";

import mobileLogo from "../../assets/logo-mobile.svg"
import openMenu from "../../assets/menu-buguer-open.svg"
import closeMenu from "../../assets/menu-buguer-close.svg"

export function Header() {
    const { navbarHidden, setNavbarHidden } = useContext(NavigationContext)
    const [navIcon, setNavIcon] = useState<string>(openMenu)

    useEffect(() => {
        const icon = navbarHidden ? openMenu : closeMenu
        setNavIcon(icon)
    }, [navbarHidden])

    return (
        <MobileHeader>
            <img src={mobileLogo} alt="Logo" />
            <img src={navIcon} alt="Navbar Icon" onClick={() => setNavbarHidden(!navbarHidden)}/>
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

    > img {
        cursor: pointer;
    }
`