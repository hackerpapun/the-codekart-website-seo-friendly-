import React from "react";
import Head from "next/head";

const DynamicMetadata = ({ children, title, description }) => {
  const defaultTitle = "CodeKart Solutions | Empowering Innovation";
  const defaultDescription =
    "Discover digital excellence with CodeKart Solutions – custom software, web & app development, AI, cloud, and more.";

  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.codekart.in" />

        <meta property="og:title" content={title || defaultTitle} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codekart.in" />
        <meta
          property="og:image"
          content="https://www.codekart.in/assets/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title || defaultTitle} />
        <meta
          name="twitter:description"
          content={description || defaultDescription}
        />
        <meta
          name="twitter:image"
          content="https://www.codekart.in/assets/twitter-image.jpg"
        />
      </Head>

      {children}
    </>
  );
};

export default React.memo(DynamicMetadata);
