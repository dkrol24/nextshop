import Head from "next/head";

export default function Product({ productId, title }) {
  return (
    <div>
      <Head>
        <title>{title} - my clothing store</title>
        <meta name="description" content={`Learn more about ${title}`} />
        <meta property="og:title" content={`${title} - My Clothing Store`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
        <p>Product ID: {productId}</p>
      </main>
    </div>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  return {
    props: {
      productId: params.productId,
      title: `Product ${params.productId}`,
    },
  };
}
export async function getStaticPaths() {
  const paths = [...new Array(5)].map((i, index) => {
    return {
      params: {
        productId: `${index + 1}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
