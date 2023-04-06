import Head from "next/head";
import type { NextPage } from "next";
import { Centry } from "~~/components/browse/Centry";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const Browse: NextPage = () => {
  const { data: centrysArray } = useScaffoldContractRead({
    contractName: "FactoryCentry",
    functionName: "getCentrysArray",
  });

  console.log(`The array is: ${centrysArray}`);

  const elementList = centrysArray?.map(id => <div key={id}>Element {id}</div>);

  return (
    <>
      <Head>
        <title>Browse c-entrys</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>

      <div className="grid flex-grow">
        <div>{elementList}</div>
        <Centry />
        <Centry />
      </div>
    </>
  );
};

export default Browse;
