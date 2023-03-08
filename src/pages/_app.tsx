import { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

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
  --gray-300: #444444;
  --gray-400: #333333;

  --primary: var(--green-600);
  --secondary: var(--green-700);
}

::selection {
    background: var(--primary);
    color: var(--white);
}

html {
  font-family: 'open sans', arial, sans-serif;
  color: var(--gray-400);
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
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title key="title">Matko Vuković</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
