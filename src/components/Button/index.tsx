import styled from "styled-components";

type Props = {
    children: JSX.Element | JSX.Element[];
}

export function Button(props:Props) {
    const { children } = props;
    return (
        <ButtonContainer>
            {children}
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    padding: 10px 30px;
    border: 1px solid var(--button);
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 10px;

    cursor: pointer;

    background-color: #fff0;

    :hover {
        background-color: var(--button);
        transition: background-color 150ms linear;
    }

    :active {
        filter: brightness(90%);
        transition: none;
    }

    * {
        font-weight: 800;
        font-size: 11px;
        line-height: 15px;
        letter-spacing: 0.02em;

        text-transform: uppercase;
        
        color: var(--text-color);
    }
`