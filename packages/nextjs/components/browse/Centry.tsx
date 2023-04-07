import React from "react";
import { Address, Balance } from "../scaffold-eth";
import { ClaimBack } from "./ClaimBack";
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

  const date = new Date(Number(dueDate) * 1000);

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
          <div className="flex items-center justify-between py-4 border-b border-gray-200 w-4/5">
            <span className="text-2xl sm:text-3xl text-black">{description}</span>
            <div className="flex items-center">
              <div className="mr-4">
                <Balance address={address} />
              </div>
              <div>
                <Address address={address} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-lg ">
            <div>
              <div className="font-medium text-gray-500 mb-2">Recipient:</div>
              <Address address={recipient} />
              <div className="text-gray-500 font-medium mt-2">
                Participants: {participantsCounter}/{maxParticipants}
              </div>
              <div className="text-gray-500 font-medium">
                Fee: {entranceFee ? utils.formatEther(entranceFee) : "0"} ETH
              </div>
              <div className="text-gray-500 font-sm">
                {" "}
                <div>
                  If it fails, claim back after{" "}
                  {date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>{" "}
              </div>
            </div>

            <div className="flex flex-col items-center justify-end">
              <button
                className={`bg-indigo-600 text-white py-2 px-4 rounded-full uppercase font-semibold hover:bg-indigo-700 transition-all tracking-wider ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={writeAsync}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="animate-pulse mr-2">Loading</span>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 018 4.828v-.035a1 1 0 011-.993h2a1 1 0 011 .993v.035a7.962 7.962 0 012 12.463v.034a1 1 0 01-1 .993h-2a1 1 0 01-1-.993v-.034A7.962 7.962 0 016 17.291zm6 1.709A7.962 7.962 0 0116 4.828v-.035a1 1 0 011-.993h2a1 1 0 011 .993v.035a7.962 7.962 0 012 12.463v.034a1 1 0 01-1 .993h-2a1 1 0 01-1-.993v-.034A7.962 7.962 0 0112 19.999z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    Enter <ArrowSmallRightIcon className="w-3 h-3 ml-2" />
                  </>
                )}
              </button>
              <ClaimBack address={address} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
