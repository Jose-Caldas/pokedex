import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/global";
import { PokemonProvider } from "../context/usePokemons";

function App({ Component, pageProps }: AppProps) {
  return (
    <PokemonProvider>
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
    </PokemonProvider>
  );
}
export default App;
