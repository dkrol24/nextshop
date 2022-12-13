import React from "react";
import Head from "next/head";
const about = () => {
  return (
    <div>
      <Head>
        <title>About us - my clothing store</title>
        <meta name="description" content="About at my store!" />
        <meta property="og:title" content="About Us - mY cLOTHING Store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About my clothing store</h1>
      </main>
    </div>
  );
};

export default about;
