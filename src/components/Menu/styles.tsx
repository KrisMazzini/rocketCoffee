import styled from "styled-components";

export type Desktop = {
    margin: string;
}

export const DesktopContainer = styled.div`
    height: 50px;

    margin-top: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img, button {
        margin: ${(props:Desktop) => props.margin};
    }

`

export const MobileContainer = styled.div`
    min-height: 48px;

    margin-top: 30px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    position: relative;

    button {
        width: 48px;
        height: 48px;

        margin: ${(props:Desktop) => props.margin};

        border: none;
        outline: none;

        background-color: #fff0;

        cursor: pointer;
    }

    img {
        margin: ${(props:Desktop) => props.margin};
    }
`