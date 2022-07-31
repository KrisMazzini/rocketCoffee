import { Container } from "./styles"
import { Blur } from "../../components/Blur/styles"
import { Menu } from "../../components/Menu"

export function Home() {
    return (
        <>
            <Container>
                <header>
                    <Menu />
                </header>
            </Container>
            <Blur left="29px" reverseAnimation={true}></Blur>
            <Blur left="calc(100% - 233px)" reverseAnimation={false}></Blur>
        </>
    )
}