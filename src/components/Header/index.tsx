import { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../contexts/WindowContext";
import { NavigationContext } from "../../contexts/NavigationContext";
import styled from "styled-components";

import { Navigation } from "../Navigation";

import desktopLogo from "../../assets/logo-desktop.svg"
import mobileLogo from "../../assets/logo-mobile.svg"
import openMenu from "../../assets/menu-buguer-open.svg"
import closeMenu from "../../assets/menu-buguer-close.svg"
import { Button } from "../Button";

type ContainerProps = {
    background: string;
}

export function Header() {
    const { navbarHidden, setNavbarHidden } = useContext(NavigationContext)
    const windowSize = useContext(WindowContext)

    const [logo, setLogo] = useState<string>(desktopLogo)
    const [navIcon, setNavIcon] = useState<string>(openMenu)
    const [background, setBackground] = useState<string>("#000")

    useEffect(() => {
        setLogo(windowSize === "mobile" ? mobileLogo : desktopLogo)
        setBackground(windowSize === "mobile" ? "var(--background)" : "linear-gradient(90deg, #0000, #000000EE 30% 70%, #0000)")
    }, [windowSize])

    useEffect(() => {
        if (setNavbarHidden && windowSize !== "mobile") {
            setNavbarHidden(true)
            return
        }
        const icon = navbarHidden ? openMenu : closeMenu
        setNavIcon(icon)
    }, [windowSize, navbarHidden])

    return (
        <Container background={background}>
            <img src={logo} alt="Logo" />
            {
                windowSize === "mobile" ? <img src={navIcon} alt="Navbar Icon" onClick={() => {
                    if (setNavbarHidden) {
                        setNavbarHidden(!navbarHidden)
                    }
                }}/> : <Navigation />
            }
            {
                windowSize === "desktop" ? <Button>
                    <p>Grab My Coffee</p>
                </Button> : <></>
            }
        </Container>
    )
}

const Container = styled.header`
    position: fixed;
    
    width: 100%;
    height: 95.5px;

    padding: 0 26px;
    border-bottom: 1px solid var(--border);

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    overflow: hidden;

    background-color: var(--background);
    background: ${(props:ContainerProps) => props.background};

    > img {
        cursor: pointer;
    }
`