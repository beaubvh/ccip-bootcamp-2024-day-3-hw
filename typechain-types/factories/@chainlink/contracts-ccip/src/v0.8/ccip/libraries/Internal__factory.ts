/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  Internal,
  InternalInterface,
} from "../../../../../../../@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Internal";

const _abi = [
  {
    inputs: [],
    name: "GAS_PRICE_BITS",
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
    name: "MESSAGE_FIXED_BYTES",
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
    name: "MESSAGE_FIXED_BYTES_PER_TOKEN",
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
] as const;

const _bytecode =
  "0x60ba610034600b8282823980515f1a60731461002857634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106046575f3560e01c806318994e7a14604a5780637a4bb232146065578063dc47c58b14607d575b5f80fd5b605261022081565b6040519081526020015b60405180910390f35b606c607081565b60405160ff9091168152602001605c565b605260808156fea26469706673582212202801ba6cd8cde3f535afd33d0340f16643b5fa86114017054167270b9c3e1e1064736f6c63430008140033";

type InternalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InternalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Internal__factory extends ContractFactory {
  constructor(...args: InternalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Internal> {
    return super.deploy(overrides || {}) as Promise<Internal>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Internal {
    return super.attach(address) as Internal;
  }
  override connect(signer: Signer): Internal__factory {
    return super.connect(signer) as Internal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InternalInterface {
    return new utils.Interface(_abi) as InternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Internal {
    return new Contract(address, _abi, signerOrProvider) as Internal;
  }
}
