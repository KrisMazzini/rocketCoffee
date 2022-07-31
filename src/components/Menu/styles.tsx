import styled from "styled-components";

import { Props } from ".";

export const Container = styled.div`
    height: 50px;

    margin-top: ${(props:Props) => props.positionTop || 0};

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    img {
        position: absolute;
        left: ${(props:Props) => props.positionLeft};
    }

    button {
        position: absolute;
        right: 12%;
    }
`