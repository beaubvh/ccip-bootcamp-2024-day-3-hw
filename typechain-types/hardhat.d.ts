/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "CCIPReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPReceiver__factory>;
    getContractFactory(
      name: "IAny2EVMMessageReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAny2EVMMessageReceiver__factory>;
    getContractFactory(
      name: "IRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouter__factory>;
    getContractFactory(
      name: "IRouterClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRouterClient__factory>;
    getContractFactory(
      name: "Client",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Client__factory>;
    getContractFactory(
      name: "Internal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Internal__factory>;
    getContractFactory(
      name: "MerkleMultiProof",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleMultiProof__factory>;
    getContractFactory(
      name: "MockCCIPRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockCCIPRouter__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "OwnerIsCreator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnerIsCreator__factory>;
    getContractFactory(
      name: "CallWithExactGas",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallWithExactGas__factory>;
    getContractFactory(
      name: "IERC677Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC677Receiver__factory>;
    getContractFactory(
      name: "IOwnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOwnable__factory>;
    getContractFactory(
      name: "IBurnMintERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBurnMintERC20__factory>;
    getContractFactory(
      name: "BurnMintERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BurnMintERC677__factory>;
    getContractFactory(
      name: "ERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677__factory>;
    getContractFactory(
      name: "IERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC677__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "BurnMintERC677Helper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BurnMintERC677Helper__factory>;
    getContractFactory(
      name: "CCIPLocalSimulator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CCIPLocalSimulator__factory>;
    getContractFactory(
      name: "LinkToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkToken__factory>;
    getContractFactory(
      name: "WETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WETH9__factory>;
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "SafeERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeERC20__factory>;
    getContractFactory(
      name: "Address",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Address__factory>;
    getContractFactory(
      name: "ReentrancyGuard",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuard__factory>;
    getContractFactory(
      name: "EnumerableMap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EnumerableMap__factory>;
    getContractFactory(
      name: "CometMainInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CometMainInterface__factory>;
    getContractFactory(
      name: "CrossChainReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CrossChainReceiver__factory>;
    getContractFactory(
      name: "ISwapTestnetUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapTestnetUSDC__factory>;
    getContractFactory(
      name: "MockUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockUSDC__factory>;
    getContractFactory(
      name: "IFauceteer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFauceteer__factory>;
    getContractFactory(
      name: "SwapTestnetUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapTestnetUSDC__factory>;
    getContractFactory(
      name: "TransferUSDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransferUSDC__factory>;

    getContractAt(
      name: "CCIPReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPReceiver>;
    getContractAt(
      name: "IAny2EVMMessageReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAny2EVMMessageReceiver>;
    getContractAt(
      name: "IRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouter>;
    getContractAt(
      name: "IRouterClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRouterClient>;
    getContractAt(
      name: "Client",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Client>;
    getContractAt(
      name: "Internal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Internal>;
    getContractAt(
      name: "MerkleMultiProof",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleMultiProof>;
    getContractAt(
      name: "MockCCIPRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockCCIPRouter>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "OwnerIsCreator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnerIsCreator>;
    getContractAt(
      name: "CallWithExactGas",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallWithExactGas>;
    getContractAt(
      name: "IERC677Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC677Receiver>;
    getContractAt(
      name: "IOwnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOwnable>;
    getContractAt(
      name: "IBurnMintERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBurnMintERC20>;
    getContractAt(
      name: "BurnMintERC677",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BurnMintERC677>;
    getContractAt(
      name: "ERC677",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677>;
    getContractAt(
      name: "IERC677",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC677>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "BurnMintERC677Helper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BurnMintERC677Helper>;
    getContractAt(
      name: "CCIPLocalSimulator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CCIPLocalSimulator>;
    getContractAt(
      name: "LinkToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkToken>;
    getContractAt(
      name: "WETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WETH9>;
    getContractAt(
      name: "IERC1155Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "SafeERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeERC20>;
    getContractAt(
      name: "Address",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Address>;
    getContractAt(
      name: "ReentrancyGuard",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuard>;
    getContractAt(
      name: "EnumerableMap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EnumerableMap>;
    getContractAt(
      name: "CometMainInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CometMainInterface>;
    getContractAt(
      name: "CrossChainReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CrossChainReceiver>;
    getContractAt(
      name: "ISwapTestnetUSDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapTestnetUSDC>;
    getContractAt(
      name: "MockUSDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockUSDC>;
    getContractAt(
      name: "IFauceteer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFauceteer>;
    getContractAt(
      name: "SwapTestnetUSDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapTestnetUSDC>;
    getContractAt(
      name: "TransferUSDC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TransferUSDC>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}