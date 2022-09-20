import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset};
a {
    text-decoration: none;
    color: inherit;
  }
* {
    box-sizing: border-box;
}
  body {
    display: grid;
  }
`;

export default GlobalStyle;
