import React from "react";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { useCustomContractWrite } from "~~/hooks/scaffold-eth";

interface ClaimBackProps {
  address: string;
}
export const ClaimBack: React.FC<ClaimBackProps> = ({ address }) => {
  const { writeAsync, isLoading } = useCustomContractWrite({
    contractName: "Centry",
    functionName: "claimEntranceFee",
    address: address,
  });
  return (
    <button
      className={`bg-pink-600 text-white py-2 px-4 rounded-full uppercase font-semibold my-2 hover:bg-pink-700 transition-all tracking-wider ${
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
          Claim Back <ArrowSmallLeftIcon className="w-3 h-3 ml-2" />
        </>
      )}
    </button>
  );
};
