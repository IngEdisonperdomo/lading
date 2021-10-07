import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        ></meta>
        <title>Landing page in nextjs</title>
        <meta
          key="description"
          name="description"
          content="lading page in nextjs"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
