import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --primary: #ffffff;
    --white-hover: #f9f9f9;
    --dark-white: #dedede;
    --secondary: #000000;
    --simple-black: #1f2129;
    --text-black:#333;
    --gray: #82849f;
    --dark-blue:#0056b3;
    --blue:#36f;
  }

  body {
    background-color: var(--primary);
    color: var(--simple-black);
    font-family: 'Quicksand', sans-serif, Arial;
  }
`