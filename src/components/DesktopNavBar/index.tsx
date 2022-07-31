import { Container, Nav } from "./styles"
import { Button } from "../Button/styles"

import { smallDesktop } from "../../constants/devices"
import { useWindowSize } from "../../utils/windowSize"

import desktopLogo from "../../assets/logo-desktop.svg"

export function DesktopNavBar() {
    
    const navItems = ["Home", "Menu", "Rewards", "Gift Cards", "Stores"]
    
    return (
        <Container>
            <img src={desktopLogo} alt="Logo" />
            <Nav>
                <ul>
                    {
                        navItems.map(item => (
                            <li><a>{item}</a></li>
                        ))
                    }
                </ul>
            </Nav>
            {
                useWindowSize().width > smallDesktop.maxWidth ? <Button>Grab my coffee</Button> : <></>
            }
        </Container>
    )
}