/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  Client,
  ClientInterface,
} from "../../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client";

const _abi = [
  {
    inputs: [],
    name: "EVM_EXTRA_ARGS_V1_TAG",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c7610033600b8282823980515f1a607314602757634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106032575f3560e01c80633ab8c0d0146036575b5f80fd5b605c7f97a657c90000000000000000000000000000000000000000000000000000000081565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f3fea2646970667358221220308a3a81b9774adb4ff2ea694c19ec780b3f115209b6426228e5ca688839368964736f6c63430008140033";

type ClientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Client__factory extends ContractFactory {
  constructor(...args: ClientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Client> {
    return super.deploy(overrides || {}) as Promise<Client>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Client {
    return super.attach(address) as Client;
  }
  override connect(signer: Signer): Client__factory {
    return super.connect(signer) as Client__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClientInterface {
    return new utils.Interface(_abi) as ClientInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Client {
    return new Contract(address, _abi, signerOrProvider) as Client;
  }
}
