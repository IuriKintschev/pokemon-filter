import { createGlobalStyle } from "styled-components";
import { background, characters } from "./constants";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', Arial, Helvetica, sans-serif;
        background: ${background.Root};
        color: ${characters.title};
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`;
