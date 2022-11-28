// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { LumaFont } from './components-Luma/LumaFonts/LumaFonts';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${LumaFont.DEFAULT.REGULAR};
    font-size: 16px;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
