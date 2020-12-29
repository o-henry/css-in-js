import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        // now, 1rem is 16px 
        font-size: 16px;
        // maximum no matter what padding margin width, keep it within the box
        box-sizing: border-box
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${primaryFont};
    }

    main {
        width: 90%;
        margin: 0 auto;
    }
`;
