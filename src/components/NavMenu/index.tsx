import { useState } from "react"

import { Container, DesktopNav, MobileNav } from "./styles"
import { mobile } from "../../constants/devices"
import { useWindowSize } from "../../utils/windowSize"
import openMenuIcon from "../../assets/menu-buguer-open.svg"
import closeMenuIcon from "../../assets/menu-buguer-close.svg"

type Icon = {
    src: string,
    onclick(): void,
}

export function NavMenu() {
    const [openedMenu, setOpenedMenu] = useState<boolean>(false)
    const [menuIcon, setMenuIcon] = useState<Icon>({
        src: openMenuIcon,
        onclick: openMenu,
    })

    const navItems = ["Home", "Menu", "Rewards", "Gift Cards", "Stores"]

    const isMobile = useWindowSize().width < mobile.maxWidth
    const Nav = isMobile ? MobileNav : DesktopNav

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

    return(
        <Container>
            {
                isMobile && <div>
                    <img src={menuIcon.src} alt="icon" onClick={menuIcon.onclick} />
                </div>
            }
            {
                (openedMenu || !isMobile) && (
                    <Nav>
                        <ul>
                        {
                            navItems.map(item => (
                                <li><a>{item}</a></li>
                                ))
                            }
                        </ul>
                    </Nav>
                )
            }
        </Container>
    )
}