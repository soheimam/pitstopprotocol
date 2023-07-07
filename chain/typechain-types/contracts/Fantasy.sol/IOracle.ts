/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type TrackDataStruct = {
  temperature: PromiseOrValue<BigNumberish>;
  conditions: PromiseOrValue<BigNumberish>;
};

export type TrackDataStructOutput = [number, number] & {
  temperature: number;
  conditions: number;
};

export interface IOracleInterface extends utils.Interface {
  functions: {
    "getDriverCost(uint8)": FunctionFragment;
    "getDriverRating(uint8)": FunctionFragment;
    "getTeamCost(uint8)": FunctionFragment;
    "getTeamRating(uint8)": FunctionFragment;
    "getTrackData(uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getDriverCost"
      | "getDriverRating"
      | "getTeamCost"
      | "getTeamRating"
      | "getTrackData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDriverCost",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDriverRating",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTeamCost",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTeamRating",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTrackData",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDriverCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDriverRating",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTeamCost",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTeamRating",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTrackData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IOracleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getDriverCost(
      driverNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDriverRating(
      driverNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getTeamCost(
      teamNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTeamRating(
      teamNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getTrackData(
      raceNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[TrackDataStructOutput]>;
  };

  getDriverCost(
    driverNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDriverRating(
    driverNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getTeamCost(
    teamNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTeamRating(
    teamNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  getTrackData(
    raceNumber: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<TrackDataStructOutput>;

  callStatic: {
    getDriverCost(
      driverNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDriverRating(
      driverNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getTeamCost(
      teamNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTeamRating(
      teamNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    getTrackData(
      raceNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<TrackDataStructOutput>;
  };

  filters: {};

  estimateGas: {
    getDriverCost(
      driverNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDriverRating(
      driverNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTeamCost(
      teamNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTeamRating(
      teamNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTrackData(
      raceNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDriverCost(
      driverNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDriverRating(
      driverNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTeamCost(
      teamNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTeamRating(
      teamNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTrackData(
      raceNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}