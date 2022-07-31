import { Container } from "./styles"
import { Blur } from "../../components/Blur"

export function Home() {
    return (
        <>
            <Container></Container>
            <Blur left="29px" reverseAnimation={true}></Blur>
            <Blur left="calc(100% - 233px)" reverseAnimation={false}></Blur>
        </>
    )
}