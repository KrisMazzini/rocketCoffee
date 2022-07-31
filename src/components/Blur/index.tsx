import styled from "styled-components"

type BlurProps = {
    left: string;
    reverseAnimation: boolean;
}

export const Blur = styled.div`
    width: 321px;
    height: 321px;

    position: fixed;
    z-index: 1;
    left: ${(props:BlurProps) => props.left};

    background-color: var(--blur);
    filter: blur(200px);

    animation: move 10s backwards linear alternate infinite;
    animation-direction: ${props => props.reverseAnimation ? "alternate-reverse" : "alternate"};

    @keyframes move {
        from {
            top: -63px;
        }

        to {
            top: calc(100% - 48px);
        }
    }
`