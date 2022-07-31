import { DesktopNav, MobileNav } from "./styles"
import { mobile } from "../../constants/devices"
import { useWindowSize } from "../../utils/windowSize"


export function NavMenu() {
    const navItems = ["Home", "Menu", "Rewards", "Gift Cards", "Stores"]

    const isMobile = useWindowSize().width < mobile.maxWidth
    const Nav = isMobile ? MobileNav : DesktopNav

    return(
        <>
            {
                <Nav>
                    <ul>
                    {
                        navItems.map(item => (
                            <li><a>{item}</a></li>
                            ))
                        }
                    </ul>
                </Nav>
            }
        </>
    )
}