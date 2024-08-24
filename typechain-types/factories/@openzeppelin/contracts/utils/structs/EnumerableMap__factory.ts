/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  EnumerableMap,
  EnumerableMapInterface,
} from "../../../../../@openzeppelin/contracts/utils/structs/EnumerableMap";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "EnumerableMapNonexistentKey",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea264697066735822122092a85a7ec641c4c3fc3d5cfe19ae42d104da5a0ac3260e4dc07f4c3f72c875e764736f6c63430008140033";

type EnumerableMapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnumerableMapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnumerableMap__factory extends ContractFactory {
  constructor(...args: EnumerableMapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EnumerableMap> {
    return super.deploy(overrides || {}) as Promise<EnumerableMap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EnumerableMap {
    return super.attach(address) as EnumerableMap;
  }
  override connect(signer: Signer): EnumerableMap__factory {
    return super.connect(signer) as EnumerableMap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnumerableMapInterface {
    return new utils.Interface(_abi) as EnumerableMapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EnumerableMap {
    return new Contract(address, _abi, signerOrProvider) as EnumerableMap;
  }
}