import { useState } from "react"

import { DesktopContainer, MobileContainer } from "./styles"
import { NavMenu } from "../NavMenu"
import { Button } from "../Button/styles"

import { mobile, smallDesktop } from "../../constants/devices"
import { useWindowSize } from "../../utils/windowSize"

import desktopLogo from "../../assets/logo-desktop.svg"
import mobileLogo from "../../assets/logo-mobile.svg"
import openMenuIcon from "../../assets/menu-buguer-open.svg"
import closeMenuIcon from "../../assets/menu-buguer-close.svg"

import { Desktop } from "./styles"

type Icon = {
    src: string,
    onclick(): void,
}

export function Menu() {
    const [openedMenu, setOpenedMenu] = useState<boolean>(false)
    const [menuIcon, setMenuIcon] = useState<Icon>({
        src: openMenuIcon,
        onclick: openMenu,
    })

    const isMobile = useWindowSize().width < mobile.maxWidth
    const isSmallDesktop = useWindowSize().width < smallDesktop.maxWidth

    function openMenu():void {
        setOpenedMenu(true)
        setMenuIcon({
            src: closeMenuIcon,
            onclick: closeMenu,
        })
    }

    function closeMenu():void {
        setOpenedMenu(false)
        setMenuIcon({
            src: openMenuIcon,
            onclick: openMenu,
        })
    }

    const logo:string = isMobile ? mobileLogo : desktopLogo
    const Container = isMobile ? MobileContainer : DesktopContainer
    
    return (
        <Container margin={(isMobile || isSmallDesktop) ? "0 20px" : "0 8%"} >
            <img src={logo} alt="Logo" />
            {
                isMobile && (
                    <button onClick={menuIcon.onclick}><img src={menuIcon.src} alt="Icon" /></button>
                )
            }
            {
                (!isMobile || openedMenu) && (
                    <NavMenu />
                )
            }
            {
                !isSmallDesktop && <Button>Grab my coffee</Button>
            }
        </Container>
    )
}