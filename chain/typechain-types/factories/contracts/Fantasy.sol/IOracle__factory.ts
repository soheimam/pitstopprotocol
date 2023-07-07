/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOracle,
  IOracleInterface,
} from "../../../contracts/Fantasy.sol/IOracle";

const _abi = [
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
        name: "teamNumber",
        type: "uint8",
      },
    ],
    name: "getTeamRating",
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
] as const;

export class IOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOracleInterface {
    return new utils.Interface(_abi) as IOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOracle {
    return new Contract(address, _abi, signerOrProvider) as IOracle;
  }
}
