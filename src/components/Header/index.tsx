import { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../contexts/WindowContext";
import { NavigationContext } from "../../contexts/NavigationContext";
import styled from "styled-components";

import desktopLogo from "../../assets/logo-desktop.svg"
import mobileLogo from "../../assets/logo-mobile.svg"
import openMenu from "../../assets/menu-buguer-open.svg"
import closeMenu from "../../assets/menu-buguer-close.svg"

export function Header() {
    const { navbarHidden, setNavbarHidden } = useContext(NavigationContext)
    const windowSize = useContext(WindowContext)
    const [navIcon, setNavIcon] = useState<string>(openMenu)

    const logo = windowSize === "mobile" ? mobileLogo : desktopLogo

    useEffect(() => {
        const icon = navbarHidden ? openMenu : closeMenu
        setNavIcon(icon)
    }, [navbarHidden])

    return (
        <MobileHeader>
            <img src={logo} alt="Logo" />
            <img src={navIcon} alt="Navbar Icon" onClick={() => {
                if (setNavbarHidden) {
                    setNavbarHidden(!navbarHidden)
                }
            }}/>
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