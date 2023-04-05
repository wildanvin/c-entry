import { useState } from "react";
import { utils } from "ethers";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const FactoryInteraction = () => {
  const [newGreeting, setNewGreeting] = useState("");

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "FactoryCentry",
    functionName: "createCentry",
    args: ["0x46Fbc4BCE7643cBceeccE9Fea79531b6c7f67E46", 3, utils.parseEther("0.001"), newGreeting, 1],
    // value: "0.01",
  });

  return (
    <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
      <span className="text-4xl sm:text-6xl text-black">Set a Greeting_</span>

      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
        <input
          type="text"
          placeholder="Write your greeting here"
          className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
          onChange={e => setNewGreeting(e.target.value)}
        />
        <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
          <div className="flex rounded-full border-2 border-primary p-1">
            <button
              className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
                isLoading ? "loading" : ""
              }`}
              onClick={writeAsync}
            >
              {!isLoading && (
                <>
                  Send <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 flex gap-2 items-start">
        <span className="text-sm leading-tight">Price:</span>
        <div className="badge badge-warning">0.01 ETH + Gas</div>
      </div>
    </div>
  );
};
