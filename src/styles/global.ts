import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    letter-spacing:0.1px;

    

*{
  ::-webkit-scrollbar {
   width: 12px;
}

::-webkit-scrollbar-thumb {
  background-color: #283e51;
  border-radius: 20px;
  border: 3px solid #4b79a1;
}
  
}



  *:focus{
    outline:0;
  }

  html, body,  #root{
    background-color: #283e51;
       
  }
       
}
  
  `;
