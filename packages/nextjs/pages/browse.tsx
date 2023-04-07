import Head from "next/head";
import type { NextPage } from "next";
import { Centry } from "~~/components/browse/Centry";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const Browse: NextPage = () => {
  const { data: centrysArray } = useScaffoldContractRead({
    contractName: "FactoryCentry",
    functionName: "getCentrysArray",
  });

  //const centrysList = centrysArray?.map(centryAddress => <Centry key={centryAddress} address={centryAddress} />);
  const centrysList = centrysArray?.map((centryAddress: string) => (
    <Centry key={centryAddress} address={centryAddress} />
  ));

  return (
    <>
      <Head>
        <title>Browse c-entrys</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      </Head>

      <div className="grid flex-grow">
        <div>{centrysList?.reverse()}</div>
      </div>
    </>
  );
};

export default Browse;
