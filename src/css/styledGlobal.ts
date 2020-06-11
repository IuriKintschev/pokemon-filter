import { createGlobalStyle } from "styled-components";
import { background, characters, device } from "./constants";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        /* a cada 1rem será considera 10px */
        font-size: 62.5%;
    }

    body {
    font-size: 1.6rem;
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

    @media ${device.laptop} {
        html {
        font-size: 50%;
    }
  }
`;
