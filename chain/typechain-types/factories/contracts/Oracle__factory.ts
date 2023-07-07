/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Oracle, OracleInterface } from "../../contracts/Oracle";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "driverCosts",
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
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "driverRatings",
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
    inputs: [
      {
        internalType: "uint8",
        name: "driverNumber",
        type: "uint8",
      },
    ],
    name: "getDriverCost",
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
        internalType: "uint8",
        name: "driverNumber",
        type: "uint8",
      },
    ],
    name: "getDriverRating",
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
    inputs: [
      {
        internalType: "uint8",
        name: "teamNumber",
        type: "uint8",
      },
    ],
    name: "getTeamCost",
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
        internalType: "uint8",
        name: "raceNumber",
        type: "uint8",
      },
    ],
    name: "getTrackData",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "temperature",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "conditions",
            type: "uint8",
          },
        ],
        internalType: "struct TrackData",
        name: "",
        type: "tuple",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "driverNumber",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    name: "setDriverCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "driverNumber",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "rating",
        type: "uint8",
      },
    ],
    name: "setDriverRating",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "teamNumber",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    name: "setTeamCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "raceNumber",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "temperature",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "conditions",
        type: "uint8",
      },
    ],
    name: "setTrackData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "teamCosts",
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
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "trackData",
    outputs: [
      {
        internalType: "uint8",
        name: "temperature",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "conditions",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6106578061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80638556646b11610097578063eac1638011610066578063eac16380146102bf578063f2fde38b146102df578063fcf4ed93146102f2578063fe16babb1461031857600080fd5b80638556646b1461024b5780638da5cb5b1461026e578063a14427ae14610289578063d122e93a1461029c57600080fd5b8063631869bf116100d3578063631869bf1461018857806367883f4b1461019b5780636b0639411461020e578063715018a61461024357600080fd5b8063067b51da146100fa57806343da32b61461012d5780635a7001f214610173575b600080fd5b61011a610108366004610536565b60016020526000908152604090205481565b6040519081526020015b60405180910390f35b61015961013b366004610536565b60046020526000908152604090205460ff8082169161010090041682565b6040805160ff938416815292909116602083015201610124565b610186610181366004610558565b61032b565b005b610186610196366004610558565b610349565b6101ed6101a9366004610536565b6040805180820182526000808252602091820181905260ff938416815260048252829020825180840190935254808416835261010090049092169181019190915290565b60408051825160ff9081168252602093840151169281019290925201610124565b61023161021c366004610536565b60036020526000908152604090205460ff1681565b60405160ff9091168152602001610124565b610186610367565b61011a610259366004610536565b60ff1660009081526002602052604090205490565b6000546040516001600160a01b039091168152602001610124565b610186610297366004610582565b61037b565b61011a6102aa366004610536565b60ff1660009081526001602052604090205490565b61011a6102cd366004610536565b60026020526000908152604090205481565b6101866102ed3660046105b5565b6103a5565b610231610300366004610536565b60ff9081166000908152600360205260409020541690565b6101866103263660046105de565b610423565b610333610476565b60ff909116600090815260016020526040902055565b610351610476565b60ff909116600090815260026020526040902055565b61036f610476565b61037960006104d0565b565b610383610476565b60ff9182166000908152600360205260409020805460ff191691909216179055565b6103ad610476565b6001600160a01b0381166104175760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610420816104d0565b50565b61042b610476565b60408051808201825260ff9384168152918316602080840191825294841660009081526004909552932090518154935183166101000261ffff19909416921691909117919091179055565b6000546001600160a01b031633146103795760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b803560ff8116811461053157600080fd5b919050565b60006020828403121561054857600080fd5b61055182610520565b9392505050565b6000806040838503121561056b57600080fd5b61057483610520565b946020939093013593505050565b6000806040838503121561059557600080fd5b61059e83610520565b91506105ac60208401610520565b90509250929050565b6000602082840312156105c757600080fd5b81356001600160a01b038116811461055157600080fd5b6000806000606084860312156105f357600080fd5b6105fc84610520565b925061060a60208501610520565b915061061860408501610520565b9050925092509256fea26469706673582212206f3aabe15c315ec6c8f585e29de4623471d39cec946e6827fc741c2dc97461f264736f6c63430008110033";

type OracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Oracle__factory extends ContractFactory {
  constructor(...args: OracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Oracle> {
    return super.deploy(overrides || {}) as Promise<Oracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Oracle {
    return super.attach(address) as Oracle;
  }
  override connect(signer: Signer): Oracle__factory {
    return super.connect(signer) as Oracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleInterface {
    return new utils.Interface(_abi) as OracleInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Oracle {
    return new Contract(address, _abi, signerOrProvider) as Oracle;
  }
}
