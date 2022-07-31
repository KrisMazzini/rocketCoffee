import { Container, Nav } from "./styles"
import { Button } from "../Button/styles"

import desktopLogo from "../../assets/logo-desktop.svg"

export function NavBar() {
    
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
            <Button>Grab my coffee</Button>
        </Container>
    )
}