import '../public/style.css';  // Ensure this path points to your global stylesheet

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;