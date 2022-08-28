import styled from "styled-components"

export function Navigation() {
    const navItems:string[] = ["home", "menu", "rewards", "gift cards", "stores"]
    
    const Navbar = MobileNavbar

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

const MobileNavbar = styled.nav`
    flex-grow: 1;
    background-color: var(--background);
    
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
    }

    li:hover {
        border-left: 5px solid var(--button);
        color: var(--text-color)
    }
`