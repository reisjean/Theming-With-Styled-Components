import { createGlobalStyle, css } from 'styled-components';

export const CentralizedFlex = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
  }

  body, input, textarea, button{
    font-family: 'Hubballi', cursive;
  }

  a {
    text-decoration: none;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  .app{
    display: grid;
    grid-template-areas: "header" "main" "footer";
    grid-template-columns: auto;
    grid-template-rows: 80px calc(100vh - 115px) 35px;
  }
`;