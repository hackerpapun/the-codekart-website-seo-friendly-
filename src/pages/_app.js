import Head from "next/head";
import RootLayout from "./main_layout";
import ThemeProvider from "@/context/ThemeContext";
import "./global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codekart</title>
        <meta name="description" content="Codekart Solutions PVT LTD" />
        <link rel="icon" href="/favicon.ico" />

        {/* Preconnecting to the Google Fonts server */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Loading Noto Sans and Overpass fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Overpass:ital,wght@0,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Loading Montserrat font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </>
  );
}
