export default {
  11155111: [
    {
      name: "sepolia",
      chainId: "11155111",
      contracts: {
        YourContract: {
          address: "0x11b63B3Ad78F828C15AE4d76338a5B420dF07EBD",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        Centry: {
          address: "0x1aCb99090368E82B81BBaf5b6Db30300f5E9FE23",
          abi: [
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "_recipient",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "_maxParticipants",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "_entranceFee",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "_numOfDays",
                  type: "uint8",
                },
                {
                  internalType: "string",
                  name: "_link",
                  type: "string",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "_participant",
                  type: "address",
                },
              ],
              name: "NewParticipant",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "claimEntranceFee",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "description",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "dueDate",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "enterCentry",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "entranceFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "isParticipant",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "link",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "maxParticipants",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "participantsCounter",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "recipient",
              outputs: [
                {
                  internalType: "address payable",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        FactoryCentry: {
          address: "0xE3Dbed38D1394615847C47c357d69BaB3E469Fdf",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "contract Centry",
                  name: "_centry",
                  type: "address",
                },
              ],
              name: "CentryCreated",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "centrys",
              outputs: [
                {
                  internalType: "contract Centry",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address payable",
                  name: "_recipient",
                  type: "address",
                },
                {
                  internalType: "uint8",
                  name: "_maxParticipants",
                  type: "uint8",
                },
                {
                  internalType: "uint256",
                  name: "_entranceFee",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "uint8",
                  name: "_numOfDays",
                  type: "uint8",
                },
                {
                  internalType: "string",
                  name: "_link",
                  type: "string",
                },
              ],
              name: "createCentry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "getCentrysArray",
              outputs: [
                {
                  internalType: "contract Centry[]",
                  name: "",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;
