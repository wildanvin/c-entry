import React from "react";
import { utils } from "ethers";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useCustomContractRead, useCustomContractWrite } from "~~/hooks/scaffold-eth";

interface CentryProps {
  key: string;
  address: string;
}

export const Centry: React.FC<CentryProps> = ({ address }) => {
  const { data: description } = useCustomContractRead({
    contractName: "Centry",
    functionName: "description",
    address: address,
  });

  const { data: recipient } = useCustomContractRead({
    contractName: "Centry",
    functionName: "recipient",
    address: address,
  });

  const { data: entranceFee } = useCustomContractRead({
    contractName: "Centry",
    functionName: "entranceFee",
    address: address,
  });

  const { data: maxParticipants } = useCustomContractRead({
    contractName: "Centry",
    functionName: "maxParticipants",
    address: address,
  });

  const { data: participantsCounter } = useCustomContractRead({
    contractName: "Centry",
    functionName: "participantsCounter",
    address: address,
  });

  const { data: dueDate } = useCustomContractRead({
    contractName: "Centry",
    functionName: "dueDate",
    address: address,
  });

  const { writeAsync, isLoading } = useCustomContractWrite({
    contractName: "Centry",
    functionName: "enterCentry",
    address: address,
    value: entranceFee ? utils.formatEther(entranceFee) : "0",
  });

  return (
    <div className="flex bg-base-300 relative pb-10">
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary items-center">
          <span className="text-3xl sm:text-4xl text-black">{description}</span>

          <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
            <div>
              <div>Recipient: {recipient}</div>
              <div>
                Participants: {participantsCounter}/{maxParticipants}
              </div>
              <div>Fee: {entranceFee ? utils.formatEther(entranceFee) : "0"} ETH</div>
              <div>Date: {Number(dueDate)} </div>
            </div>

            <button
              className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
                isLoading ? "loading" : ""
              }`}
              onClick={writeAsync}
            >
              {!isLoading && (
                <>
                  Enter <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
