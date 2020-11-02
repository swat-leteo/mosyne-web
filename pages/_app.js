import AngelState from "../context/angel/angelState";

function MyApp({ Component, pageProps }) {
  return (
    <AngelState>
      <Component {...pageProps} />
    </AngelState>
  );
}

export default MyApp;
