import styled from "styled-components"

export const Button = styled.button`
    width: 172px;
    height: 37px;

    border: 1px solid var(--button);
    border-radius: 6px;

    cursor: pointer;

    font-weight: 800;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0.02em;

    background-color: #fff0;
    color: var(--text-color);

    :hover {
        background-color: var(--button);
        transition: all 300ms linear;
    }

    :active {
        filter: brightness(0.8);
        transition: none;
    }
`