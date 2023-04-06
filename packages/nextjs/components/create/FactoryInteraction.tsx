import { useState } from "react";
import { utils } from "ethers";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const FactoryInteraction = () => {
  const [recipient, setRecipient] = useState("");
  const [maxParticipants, setMaxParticipants] = useState(2);
  const [entranceFee, setEntranceFee] = useState(utils.parseEther("0.001"));
  const [description, setDescription] = useState("");
  const [numOfDays, setNumOfDays] = useState(2);

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "FactoryCentry",
    functionName: "createCentry",

    args: [recipient, maxParticipants, entranceFee, description, numOfDays],

    // value: "0.01",
  });

  return (
    <div className="flex bg-base-300 relative pb-10">
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary items-center">
          <span className="text-4xl sm:text-6xl text-black">Create c-entry</span>

          <div className="mt-8 flex flex-col sm:flex-col items-start sm:items-center gap-2 sm:gap-5 w-1/2">
            <input
              type="text"
              placeholder="Recipient address"
              className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
              onChange={e => setRecipient(e.target.value)}
            />
            <input
              type="text"
              placeholder="Number of participants"
              className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
              onChange={e => setMaxParticipants(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="Set the entrance fee"
              className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
              onChange={e => setEntranceFee(utils.parseEther(e.target.value))}
            />
            <input
              type="text"
              placeholder="Brief description of this c-entry"
              className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
              onChange={e => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="# of days"
              className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
              onChange={e => setNumOfDays(Number(e.target.value))}
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
        </div>
      </div>
    </div>
  );
};
