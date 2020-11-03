import AngelState from "../context/angel/angelState";
import AuthState from "../context/auth/authState";

function MyApp({ Component, pageProps }) {
  return (
    <AuthState>
      <AngelState>
        <Component {...pageProps} />
      </AngelState>
    </AuthState>
  );
}

export default MyApp;
