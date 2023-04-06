import Head from "next/head";
import type { NextPage } from "next";
import { Centry } from "~~/components/browse/Centry";

const Browse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Browse c-entrys</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>

      <div className="grid flex-grow">
        <Centry />
        <Centry />
      </div>
    </>
  );
};

export default Browse;
