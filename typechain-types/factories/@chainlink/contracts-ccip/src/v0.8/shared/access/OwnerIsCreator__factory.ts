/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  OwnerIsCreator,
  OwnerIsCreatorInterface,
} from "../../../../../../../@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
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
  "0x608060405234801561000f575f80fd5b5033805f816100655760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b5f80546001600160a01b0319166001600160a01b0384811691909117909155811615610094576100948161009c565b505050610144565b336001600160a01b038216036100f45760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640161005c565b600180546001600160a01b0319166001600160a01b038381169182179092555f8054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b6102c7806101515f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c806379ba5097146100435780638da5cb5b1461004d578063f2fde38b1461006b575b5f80fd5b61004b61007e565b005b5f54604080516001600160a01b039092168252519081900360200190f35b61004b610079366004610264565b610140565b6001546001600160a01b031633146100dd5760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064015b60405180910390fd5b5f80543373ffffffffffffffffffffffffffffffffffffffff19808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b610148610154565b610151816101af565b50565b5f546001600160a01b031633146101ad5760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e65720000000000000000000060448201526064016100d4565b565b336001600160a01b038216036102075760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016100d4565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038381169182179092555f8054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b5f60208284031215610274575f80fd5b81356001600160a01b038116811461028a575f80fd5b939250505056fea2646970667358221220baa6adf2039e1dcfaa8c24a6b30f7118c6093eb2c0296ed72d97f847d5ee88b164736f6c63430008140033";

type OwnerIsCreatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnerIsCreatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnerIsCreator__factory extends ContractFactory {
  constructor(...args: OwnerIsCreatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnerIsCreator> {
    return super.deploy(overrides || {}) as Promise<OwnerIsCreator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnerIsCreator {
    return super.attach(address) as OwnerIsCreator;
  }
  override connect(signer: Signer): OwnerIsCreator__factory {
    return super.connect(signer) as OwnerIsCreator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnerIsCreatorInterface {
    return new utils.Interface(_abi) as OwnerIsCreatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnerIsCreator {
    return new Contract(address, _abi, signerOrProvider) as OwnerIsCreator;
  }
}