import { createContext } from "react";

export type NavContextType = {
    navbarHidden: boolean;
    setNavbarHidden?: React.Dispatch<React.SetStateAction<boolean>> | void;
}

export const NavigationContext = createContext<NavContextType>({
    navbarHidden: true
});