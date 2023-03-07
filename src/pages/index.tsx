import Head from "next/head";

const Home: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Matko Vuković | Naslovna</title>
        <meta property="og:title" content="Matko Vuković | Naslovna" />
        <meta name="description" content="description" />
        <meta property="og:description" content="description" />
      </Head>
      <main>
        <h1>EVO NOVOG TEKSTA</h1>
      </main>
    </>
  );
};

export default Home;
