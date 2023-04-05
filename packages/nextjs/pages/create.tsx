import Head from "next/head";
import type { NextPage } from "next";
import { FactoryInteraction } from "~~/components/create/FactoryInteraction";

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create centry</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>
      <FactoryInteraction />

      <p>Hello</p>
      <p>I am creating!!</p>
    </>
  );
};

export default Create;
