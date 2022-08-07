import { Container, Main } from "./styles"
import { Blur } from "../../components/Blur/styles"
import { Menu } from "../../components/Menu"

import RocketCoffee from "../../assets/rocket-coffee.png";

export function Home() {
    return (
        <>
            <Container>
                <header>
                    <Menu />
                </header>
                <Main>
                    <h1>Great Coffee</h1>
                    <h2>&lt; Great Code / &gt;</h2>
                    <img src={RocketCoffee} alt="" />
                </Main>
            </Container>
            <Blur left="29px" reverseAnimation={true}></Blur>
            <Blur left="calc(100% - 233px)" reverseAnimation={false}></Blur>
        </>
    )
}