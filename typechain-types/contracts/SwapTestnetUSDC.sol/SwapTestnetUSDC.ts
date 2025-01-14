/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface SwapTestnetUSDCInterface extends utils.Interface {
  functions: {
    "getSupportedTokens()": FunctionFragment;
    "swap(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getSupportedTokens" | "swap"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getSupportedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {
    "Swap(address,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export interface SwapEventObject {
  tokenIn: string;
  tokenOut: string;
  amount: BigNumber;
  trader: string;
}
export type SwapEvent = TypedEvent<
  [string, string, BigNumber, string],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface SwapTestnetUSDC extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapTestnetUSDCInterface;

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
    getSupportedTokens(
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { usdcToken: string; compoundUsdcToken: string }
    >;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getSupportedTokens(
    overrides?: CallOverrides
  ): Promise<
    [string, string] & { usdcToken: string; compoundUsdcToken: string }
  >;

  swap(
    tokenIn: PromiseOrValue<string>,
    tokenOut: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getSupportedTokens(
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { usdcToken: string; compoundUsdcToken: string }
    >;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Swap(address,address,uint256,address)"(
      tokenIn?: null,
      tokenOut?: null,
      amount?: null,
      trader?: null
    ): SwapEventFilter;
    Swap(
      tokenIn?: null,
      tokenOut?: null,
      amount?: null,
      trader?: null
    ): SwapEventFilter;
  };

  estimateGas: {
    getSupportedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSupportedTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      tokenIn: PromiseOrValue<string>,
      tokenOut: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
