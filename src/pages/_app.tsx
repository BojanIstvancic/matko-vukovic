import { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "../store";

import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
:root {
  --white: #fff;
  --black: #000;
  --transparent: transparent;

  --green-50: #E0F6F6;
  --green-100: #CCEEED;
  --green-200: #A8DEDD;
  --green-300: #93D2D1;
  --green-400: #66BBB9;
  --green-500: #3AA5A3;
  --green-600: #0F8F8D;
  --green-700: #0C7271;
  --green-800: #095655;
  --green-900: #063938;

  --gray-100: #f5f5f5;
  --gray-200: #dddddd;
  --gray-250: #e8e8e8;
  --gray-300: #9d9d9d;
  --gray-350: #767676;
  --gray-400: #444444;
  --gray-500: #333333;

  --red-500: #EA4335;
  --red-600: #BE3A1D;

  --yellow-100: #FFFBEE;
  --yellow-200: #FEF2D2;
  --yellow-300: #FFE5A0;
  --yellow-400: #FFD752;
  --yellow-500: #FFCD44;
  --yellow-600: #FFC01D;

  --primary: var(--green-600);
  --secondary: var(--green-700);
}

::selection {
    background: var(--primary);
    color: var(--white);
}

html, input, textarea {
  font-family: "open sans", arial, sans-serif;
  color: var(--gray-500);
}

html,
body {
  scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 28px;
  font-weight: 300;
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid var(--gray-250);
}

h2 {
  font-size: 24px;
  font-weight: 300;
  color: var(--primary);
  margin-bottom: 10px;
}

h3 {
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 20px;
}

h4 {
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  margin-bottom: 5px;
  color: var(--gray-400);
}

input,
textarea {
  font-size: 15px;
  padding: 15px;
  border-radius: 4px;

  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;

  width: 100%;

  transition: all 500ms ease;

  border: 1px solid var(--gray-300);

  &:hover,
  &:active,
  &:focus {
    border-color: var(--green-700);
    outline: none;
  }
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Head>
        <title key="title">Matko Vuković</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
