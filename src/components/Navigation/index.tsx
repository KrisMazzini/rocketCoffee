import { useContext } from "react"
import { WindowContext } from "../../contexts/WindowContext"
import styled from "styled-components"

export function Navigation() {
    const navItems:string[] = ["home", "menu", "rewards", "gift cards", "stores"]

    const windowSize = useContext(WindowContext)
    
    const Navbar = windowSize === "mobile" ? MobileNavbar : DesktopNavbar

    return (
        <Navbar>
            <ul>
                {
                    navItems.map(item => <li>{item}</li>)
                }
            </ul>
        </Navbar>
    )
}

const DesktopNavbar = styled.nav`
    width: 432px;
    
    position: fixed;

    margin-left: calc((100% - 432px)/2);

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    animation: fadein 0.5s linear;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    li {
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.02em;

        cursor: pointer;
        
        text-transform: capitalize;

        color: var(--text-color);
    }
`

const MobileNavbar = styled.nav`
    margin-top: 95.5px;

    flex-grow: 1;
    background-color: var(--background);

    @keyframes dropdown {
        from {
            margin-top: -20%;
        }

        to {
            margin-top: 0;
        }
    }
    
    ul {
        display: flex;
        flex-direction: column;
    }

    li {
        height: 57px;

        display: flex;
        align-items: center;

        padding-left: 31px;
        border-bottom: 1px solid var(--border);
        
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;

        cursor: pointer;
        
        text-transform: capitalize;
        color: var(--text-menu-mobile);

        animation: dropdown 0.5s linear;
    }

    li:hover {
        border-left: 5px solid var(--button);
        color: var(--text-color)
    }
`