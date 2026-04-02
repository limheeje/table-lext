import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
  --init-fontsize: 16px;
  --color-dangol-red: #FF2233;
  --color-dangol-blue: #227AFF;
  --color-dangol-purple: #A44EFF;
  --color-dangol-balck0: #111111;
  --color-dangol-gray-7: #777777;
  --color-dangol-gray-9: #999999;
  --color-dangol-gray-line: #E2E2E2;
  --color-dangol-gray-line-2: #eeeeee;
  --color-dangol-gray-bg: #F4F6FA;
  --color-dangol-white0: #fff;
  --color-dangol-gradient: linear-gradient(101.61deg, #FF4F50 0.23%, #F65DFF 99.77%);
  --font-weight-bold: 700;
  --font-weight-semi-bold: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
}
`

export default GlobalStyle
