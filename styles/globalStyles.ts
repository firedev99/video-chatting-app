import * as styled from "styled-components"

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --max-width: 1920px;
    --primary-font-family: "Poppins";
    --secondary-font-family: "Josefin Sans";
    --text-color: 13, 17, 23;
    --bg-color: 230, 234, 248;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: 230, 234, 248;
      --bg-color: 13, 17, 23;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background: rgba(var(--bg-color), 1);
    color: rgba(var(--text-color), 1);
    font-family: var(--primary-font-family), sans-serif;
  }

  main {
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: var(--primary-font-family), sans-serif;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`
