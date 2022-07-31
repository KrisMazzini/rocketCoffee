import { Container } from "./styles"
import { Blur } from "../../components/Blur"
import { NavBar } from "../../components/NavBar"

export function Home() {
    return (
        <>
            <Container>
                <header>
                    <NavBar />
                </header>
            </Container>
            <Blur left="29px" reverseAnimation={true}></Blur>
            <Blur left="calc(100% - 233px)" reverseAnimation={false}></Blur>
        </>
    )
}