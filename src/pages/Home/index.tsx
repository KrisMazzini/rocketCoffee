import { Container } from "./styles"
import { Blur } from "../../components/Blur"
import { DesktopNavBar } from "../../components/DesktopNavBar"

import { tablet } from "../../constants/devices"
import { useWindowSize } from "../../utils/windowSize"

export function Home() {
    return (
        <>
            <Container>
                <header>
                    {
                        useWindowSize().width > tablet.maxWidth ? <DesktopNavBar /> : <></>
                    }
                </header>
            </Container>
            <Blur left="29px" reverseAnimation={true}></Blur>
            <Blur left="calc(100% - 233px)" reverseAnimation={false}></Blur>
        </>
    )
}