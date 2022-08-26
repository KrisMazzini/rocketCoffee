import { useContext } from "react"
import { WindowContext } from "../../contexts/WindowContext"
import styled from "styled-components"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import arrow from "../../assets/arrow.svg"
import rocketCoffee from "../../assets/rocket-coffee.png"
import blur from "../../assets/blur-mobile.png"

type mainProps = {
    maxImgWidth: string;
    textSize: number;
}

export function Home() {
    const windowSize = useContext<string>(WindowContext)
    const textSize = windowSize === "desktop" ? 80 : 50;
    const maxImgWidth = windowSize === "desktop" ? "800px" : "428px";
    return (
        <>
            <Header />
            <Main maxImgWidth={maxImgWidth} textSize={textSize} >
                {
                    windowSize !== "desktop" && <>
                        <p>The coffee that will make your code take off to the next level.</p>
                        <Button>
                            <span>Grab my coffee</span>
                            <img src={arrow} alt="" />
                        </Button>
                    </>
                }
                <h1>Great Coffee<br/>
                <span>&lt;Great Code/&gt;</span></h1>
                <img src={rocketCoffee} alt="Rocket Coffee" />
            </Main>
        </>
    )
}

const Main = styled.main`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    flex-grow: 1;

    background: url(${blur}) no-repeat bottom center;
    background-size: 100% auto;

    > p {
        max-width: 373px;

        font-weight: 600;
        font-size: 30px;
        line-height: 41px;
        letter-spacing: 0.02em;
        text-align: center;

        color: var(--text-color);
    }

    h1 {
        font-weight: 700;
        font-size: ${(props:mainProps) => props.textSize + "px"};
        line-height: ${(props:mainProps) => (props.textSize * 1.36) + "px"};
        letter-spacing: -0.03em;

        text-align: center;

        color: var(--text-color);
    }

    > button {
        margin: 10px 0;
    }

    h1 > span {
        color: var(--background);
        text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), -1px 1px 0 var(--button), 1px 1px 0 var(--button);
    }

    > img {
        max-width: ${(props:mainProps) => props.maxImgWidth};
        width: 100%;
    }
`