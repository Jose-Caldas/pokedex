import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    letter-spacing:0.1px;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
      
}

body{
    -webkit-font-smoothing: antialiased;
    background:#FBFBFB;
    font-family: 'Rubik', sans-serif;
  }
  `;
