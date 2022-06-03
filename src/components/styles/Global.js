import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    body {
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Open Sans', sans-serif;
        font-size: 1.15em;
        transition-property: color, background;
        transition-duration: ${(props) => props.theme.transitionTime};
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
        transition: color ${(props) => props.theme.transitionTime};
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
