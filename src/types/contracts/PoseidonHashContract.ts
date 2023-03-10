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
} from "./common";

export interface PoseidonHashContractInterface extends utils.Interface {
  functions: {
    "poseidon(bytes32[1])": FunctionFragment;
    "poseidon(uint256[1])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "poseidon(bytes32[1])" | "poseidon(uint256[1])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "poseidon(bytes32[1])",
    values: [[PromiseOrValue<BytesLike>]]
  ): string;
  encodeFunctionData(
    functionFragment: "poseidon(uint256[1])",
    values: [[PromiseOrValue<BigNumberish>]]
  ): string;

  decodeFunctionResult(
    functionFragment: "poseidon(bytes32[1])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poseidon(uint256[1])",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PoseidonHashContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PoseidonHashContractInterface;

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
    "poseidon(bytes32[1])"(
      input: [PromiseOrValue<BytesLike>],
      overrides?: CallOverrides
    ): Promise<[string]>;

    "poseidon(uint256[1])"(
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  "poseidon(bytes32[1])"(
    input: [PromiseOrValue<BytesLike>],
    overrides?: CallOverrides
  ): Promise<string>;

  "poseidon(uint256[1])"(
    input: [PromiseOrValue<BigNumberish>],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    "poseidon(bytes32[1])"(
      input: [PromiseOrValue<BytesLike>],
      overrides?: CallOverrides
    ): Promise<string>;

    "poseidon(uint256[1])"(
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    "poseidon(bytes32[1])"(
      input: [PromiseOrValue<BytesLike>],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "poseidon(uint256[1])"(
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "poseidon(bytes32[1])"(
      input: [PromiseOrValue<BytesLike>],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "poseidon(uint256[1])"(
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
