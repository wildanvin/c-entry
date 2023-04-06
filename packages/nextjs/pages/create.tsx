import Head from "next/head";
import type { NextPage } from "next";
import { FactoryInteraction } from "~~/components/create/FactoryInteraction";

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create c-entry</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>

      <div className="grid flex-grow">
        <FactoryInteraction />
      </div>
    </>
  );
};

export default Create;
