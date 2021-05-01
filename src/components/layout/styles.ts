import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.6rem;
        min-height: 100vh;
    }

    body {
        background-color: ${props => props.theme.colors.secondary};
    }
`

export const Wrapper = styled.div`
    padding: 2rem 9.5rem;
`
