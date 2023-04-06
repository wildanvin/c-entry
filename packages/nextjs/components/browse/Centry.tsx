import React from "react";
import { useCustomContractRead } from "~~/hooks/scaffold-eth";

interface CentryProps {
  key: string;
}

export const Centry: React.FC<CentryProps> = ({ key }) => {
  const { data: description } = useCustomContractRead({
    contractName: "Centry",
    functionName: "description",
    address: key,
  });

  return (
    <div className="flex bg-base-300 relative pb-10">
      <div className="flex flex-col w-full mx-5 sm:mx-8 2xl:mx-20">
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary items-center">
          <span className="text-3xl sm:text-4xl text-black">{description}</span>

          <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
            <div>
              <div>Recipient:</div>
              <div>Participants: 2/3</div>
              <div>Fee: 0.1 ETH</div>
              {/* <div>hi: {description3 as ReactNode}</div> */}
            </div>

            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
              <button> Enter </button>

              {/* <div className="flex rounded-full border-2 border-primary p-1">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
