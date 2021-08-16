import type { AppProps } from "next/app";
import Head from "next/head";
import Home from ".";
import GlobalStyle from "../global";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="shortcut icon" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>

        <meta name="description" content="Pokedex" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default App;
