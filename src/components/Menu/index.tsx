import { Container } from "./styles"
import { NavMenu } from "../NavMenu"
import { Button } from "../Button/styles"

import { mobile, smallDesktop } from "../../constants/devices"
import { useWindowSize } from "../../utils/windowSize"

import desktopLogo from "../../assets/logo-desktop.svg"
import mobileLogo from "../../assets/logo-mobile.svg"

export type Props = {
    src?: string;
    positionTop?: string;
    positionLeft: string;
}

export function Menu() {
    const isMobile = useWindowSize().width < mobile.maxWidth
    const isSmallDesktop = useWindowSize().width < smallDesktop.maxWidth

    function getSettings():Props {
        if (isMobile) {
            return {
                src: mobileLogo,
                positionLeft: "20px",
            }
        }

        if (isSmallDesktop) {
            return {
                src: desktopLogo,
                positionLeft: "26px",
                positionTop: "21px",
            }
        }

        return {
            src: desktopLogo,
            positionLeft: "21%",
            positionTop: "21px",
        }
    }

    const settings:Props = getSettings()
    
    return (
        <Container positionLeft={settings.positionLeft} positionTop={settings.positionTop}>
            <img src={settings.src} alt="Logo" />
            <NavMenu />
            {
                isSmallDesktop ? <></> : <Button>Grab my coffee</Button>
            }
        </Container>
    )
}