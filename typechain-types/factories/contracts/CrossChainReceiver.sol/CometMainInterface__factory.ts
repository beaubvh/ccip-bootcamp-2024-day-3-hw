/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CometMainInterface,
  CometMainInterfaceInterface,
} from "../../../contracts/CrossChainReceiver.sol/CometMainInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "supply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class CometMainInterface__factory {
  static readonly abi = _abi;
  static createInterface(): CometMainInterfaceInterface {
    return new utils.Interface(_abi) as CometMainInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CometMainInterface {
    return new Contract(address, _abi, signerOrProvider) as CometMainInterface;
  }
}
