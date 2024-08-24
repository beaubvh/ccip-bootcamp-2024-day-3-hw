/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  BurnMintERC677,
  BurnMintERC677Interface,
} from "../../../../../../../../@chainlink/contracts-ccip/src/v0.8/shared/token/ERC677/BurnMintERC677";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "maxSupply_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "supplyAfterMint",
        type: "uint256",
      },
    ],
    name: "MaxSupplyExceeded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SenderNotBurner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "SenderNotMinter",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    name: "BurnAccessGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    name: "BurnAccessRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "MintAccessGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "MintAccessRevoked",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Transfer",
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
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBurners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinters",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    name: "grantBurnRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "burnAndMinter",
        type: "address",
      },
    ],
    name: "grantMintAndBurnRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "grantMintRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "burner",
        type: "address",
      },
    ],
    name: "isBurner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
        name: "burner",
        type: "address",
      },
    ],
    name: "revokeBurnRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "revokeMintRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "transferAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
  "0x60c060405234801562000010575f80fd5b5060405162001d8a38038062001d8a83398101604081905262000033916200026d565b33805f8686818160036200004883826200037e565b5060046200005782826200037e565b5050506001600160a01b0384169150620000ba90505760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600580546001600160a01b0319166001600160a01b0384811691909117909155811615620000ed57620000ed8162000104565b50505060ff90911660805260a05250620004469050565b336001600160a01b038216036200015e5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c660000000000000000006044820152606401620000b1565b600680546001600160a01b0319166001600160a01b03838116918217909255600554604051919216907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112620001d3575f80fd5b81516001600160401b0380821115620001f057620001f0620001af565b604051601f8301601f19908116603f011681019082821181831017156200021b576200021b620001af565b8160405283815260209250868385880101111562000237575f80fd5b5f91505b838210156200025a57858201830151818301840152908201906200023b565b5f93810190920192909252949350505050565b5f805f806080858703121562000281575f80fd5b84516001600160401b038082111562000298575f80fd5b620002a688838901620001c3565b95506020870151915080821115620002bc575f80fd5b50620002cb87828801620001c3565b935050604085015160ff81168114620002e2575f80fd5b6060959095015193969295505050565b600181811c908216806200030757607f821691505b6020821081036200032657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111562000379575f81815260208120601f850160051c81016020861015620003545750805b601f850160051c820191505b81811015620003755782815560010162000360565b5050505b505050565b81516001600160401b038111156200039a576200039a620001af565b620003b281620003ab8454620002f2565b846200032c565b602080601f831160018114620003e8575f8415620003d05750858301515b5f19600386901b1c1916600185901b17855562000375565b5f85815260208120601f198616915b828110156200041857888601518255948401946001909101908401620003f7565b50858210156200043657878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a051611914620004765f395f8181610422015281816107d501526107ff01525f61026701526119145ff3fe608060405234801561000f575f80fd5b50600436106101e7575f3560e01c806379cc679011610109578063c2e3273d1161009e578063d73dd6231161006e578063d73dd62314610446578063dd62ed3e14610459578063f2fde38b14610491578063f81094f3146104a4575f80fd5b8063c2e3273d146103e7578063c630948d146103fa578063c64d0ebc1461040d578063d5abeb0114610420575f80fd5b80639dc29fac116100d95780639dc29fac1461039b578063a457c2d7146103ae578063a9059cbb146103c1578063aa271e1a146103d4575f80fd5b806379cc67901461035d57806386fe8b43146103705780638da5cb5b1461037857806395d89b4114610393575f80fd5b806340c10f191161017f578063661884631161014f57806366188463146103055780636b32810b1461031857806370a082311461032d57806379ba509714610355575f80fd5b806340c10f19146102b757806342966c68146102cc5780634334614a146102df5780634f5632f8146102f2575f80fd5b806323b872dd116101ba57806323b872dd1461024d578063313ce5671461026057806339509351146102915780634000aea0146102a4575f80fd5b806301ffc9a7146101eb57806306fdde0314610213578063095ea7b31461022857806318160ddd1461023b575b5f80fd5b6101fe6101f9366004611577565b6104b7565b60405190151581526020015b60405180910390f35b61021b610587565b60405161020a91906115e1565b6101fe61023636600461160e565b610617565b6002545b60405190815260200161020a565b6101fe61025b366004611636565b61062e565b60405160ff7f000000000000000000000000000000000000000000000000000000000000000016815260200161020a565b6101fe61029f36600461160e565b610651565b6101fe6102b2366004611683565b61068f565b6102ca6102c536600461160e565b610778565b005b6102ca6102da366004611747565b610891565b6101fe6102ed36600461175e565b6108c5565b6102ca61030036600461175e565b6108d1565b6101fe61031336600461160e565b61091f565b610320610931565b60405161020a9190611777565b61023f61033b36600461175e565b6001600160a01b03165f9081526020819052604090205490565b6102ca610942565b6102ca61036b36600461160e565b610a03565b610320610a39565b6005546040516001600160a01b03909116815260200161020a565b61021b610a45565b6102ca6103a936600461160e565b610a54565b6101fe6103bc36600461160e565b610a5e565b6101fe6103cf36600461160e565b610b07565b6101fe6103e236600461175e565b610b14565b6102ca6103f536600461175e565b610b20565b6102ca61040836600461175e565b610b6e565b6102ca61041b36600461175e565b610b7c565b7f000000000000000000000000000000000000000000000000000000000000000061023f565b6102ca61045436600461160e565b610bca565b61023f6104673660046117c3565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b6102ca61049f36600461175e565b610bd4565b6102ca6104b236600461175e565b610be5565b5f6001600160e01b031982167f36372b0700000000000000000000000000000000000000000000000000000000148061051957506001600160e01b031982167f4000aea000000000000000000000000000000000000000000000000000000000145b8061054d57506001600160e01b031982167fe6599b4d00000000000000000000000000000000000000000000000000000000145b8061058157506001600160e01b031982167f01ffc9a700000000000000000000000000000000000000000000000000000000145b92915050565b606060038054610596906117f4565b80601f01602080910402602001604051908101604052809291908181526020018280546105c2906117f4565b801561060d5780601f106105e45761010080835404028352916020019161060d565b820191905f5260205f20905b8154815290600101906020018083116105f057829003601f168201915b5050505050905090565b5f33610624818585610c33565b5060019392505050565b5f3361063b858285610c59565b610646858585610ce3565b506001949350505050565b335f8181526001602090815260408083206001600160a01b0387168452909152812054909190610624908290869061068a908790611840565b610c33565b5f61069a8484610b07565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040516106e0929190611853565b60405180910390a36001600160a01b0384163b15610624576040517fa4c0ed360000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063a4c0ed369061074190339087908790600401611873565b5f604051808303815f87803b158015610758575f80fd5b505af115801561076a573d5f803e3d5ffd5b505050505060019392505050565b61078133610b14565b6107be576040517fe2c8c9d50000000000000000000000000000000000000000000000000000000081523360048201526024015b60405180910390fd5b81306001600160a01b038216036107d3575f80fd5b7f00000000000000000000000000000000000000000000000000000000000000001580159061083457507f00000000000000000000000000000000000000000000000000000000000000008261082860025490565b6108329190611840565b115b15610882578161084360025490565b61084d9190611840565b6040517fcbbf11130000000000000000000000000000000000000000000000000000000081526004016107b591815260200190565b61088c8383610d03565b505050565b61089a336108c5565b6108b95760405163c820b10b60e01b81523360048201526024016107b5565b6108c281610dc0565b50565b5f610581600983610dca565b6108d9610deb565b6108e4600982610e47565b156108c2576040516001600160a01b038216907f0a675452746933cefe3d74182e78db7afe57ba60eaa4234b5d85e9aa41b0610c905f90a250565b5f61092a8383610a5e565b9392505050565b606061093d6007610e5b565b905090565b6006546001600160a01b0316331461099c5760405162461bcd60e51b815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e65720000000000000000000060448201526064016107b5565b6005805473ffffffffffffffffffffffffffffffffffffffff19808216339081179093556006805490911690556040516001600160a01b03909116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a350565b610a0c336108c5565b610a2b5760405163c820b10b60e01b81523360048201526024016107b5565b610a358282610e67565b5050565b606061093d6009610e5b565b606060048054610596906117f4565b610a358282610a03565b335f8181526001602090815260408083206001600160a01b038716845290915281205490919083811015610afa5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016107b5565b6106468286868403610c33565b5f33610624818585610ce3565b5f610581600783610dca565b610b28610deb565b610b33600782610e7c565b156108c2576040516001600160a01b038216907fe46fef8bbff1389d9010703cf8ebb363fb3daf5bf56edc27080b67bc8d9251ea905f90a250565b610b7781610b20565b6108c2815b610b84610deb565b610b8f600982610e7c565b156108c2576040516001600160a01b038216907f92308bb7573b2a3d17ddb868b39d8ebec433f3194421abc22d084f89658c9bad905f90a250565b61088c8282610651565b610bdc610deb565b6108c281610e90565b610bed610deb565b610bf8600782610e47565b156108c2576040516001600160a01b038216907fed998b960f6340d045f620c119730f7aa7995e7425c2401d3a5b64ff998a59e9905f90a250565b81306001600160a01b03821603610c48575f80fd5b610c53848484610f46565b50505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f198114610c535781811015610cd65760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016107b5565b610c538484848403610c33565b81306001600160a01b03821603610cf8575f80fd5b610c5384848461109d565b6001600160a01b038216610d595760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016107b5565b8060025f828254610d6a9190611840565b90915550506001600160a01b0382165f81815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6108c23382611288565b6001600160a01b0381165f908152600183016020526040812054151561092a565b6005546001600160a01b03163314610e455760405162461bcd60e51b815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e65720000000000000000000060448201526064016107b5565b565b5f61092a836001600160a01b0384166113ef565b60605f61092a836114d2565b610e72823383610c59565b610a358282611288565b5f61092a836001600160a01b03841661152b565b336001600160a01b03821603610ee85760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016107b5565b6006805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03838116918217909255600554604051919216907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b6001600160a01b038316610fc15760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016107b5565b6001600160a01b03821661103d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016107b5565b6001600160a01b038381165f8181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166111195760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016107b5565b6001600160a01b0382166111955760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016107b5565b6001600160a01b0383165f90815260208190526040902054818110156112235760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016107b5565b6001600160a01b038481165f81815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610c53565b6001600160a01b0382166113045760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016107b5565b6001600160a01b0382165f90815260208190526040902054818110156113925760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016107b5565b6001600160a01b0383165f818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b5f81815260018301602052604081205480156114c9575f6114116001836118a3565b85549091505f90611424906001906118a3565b9050818114611483575f865f018281548110611442576114426118b6565b905f5260205f200154905080875f018481548110611462576114626118b6565b5f918252602080832090910192909255918252600188019052604090208390555b8554869080611494576114946118ca565b600190038181905f5260205f20015f90559055856001015f8681526020019081526020015f205f905560019350505050610581565b5f915050610581565b6060815f0180548060200260200160405190810160405280929190818152602001828054801561151f57602002820191905f5260205f20905b81548152602001906001019080831161150b575b50505050509050919050565b5f81815260018301602052604081205461157057508154600181810184555f848152602080822090930184905584548482528286019093526040902091909155610581565b505f610581565b5f60208284031215611587575f80fd5b81356001600160e01b03198116811461092a575f80fd5b5f81518084525f5b818110156115c2576020818501810151868301820152016115a6565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f61092a602083018461159e565b80356001600160a01b0381168114611609575f80fd5b919050565b5f806040838503121561161f575f80fd5b611628836115f3565b946020939093013593505050565b5f805f60608486031215611648575f80fd5b611651846115f3565b925061165f602085016115f3565b9150604084013590509250925092565b634e487b7160e01b5f52604160045260245ffd5b5f805f60608486031215611695575f80fd5b61169e846115f3565b925060208401359150604084013567ffffffffffffffff808211156116c1575f80fd5b818601915086601f8301126116d4575f80fd5b8135818111156116e6576116e661166f565b604051601f8201601f19908116603f0116810190838211818310171561170e5761170e61166f565b81604052828152896020848701011115611726575f80fd5b826020860160208301375f6020848301015280955050505050509250925092565b5f60208284031215611757575f80fd5b5035919050565b5f6020828403121561176e575f80fd5b61092a826115f3565b602080825282518282018190525f9190848201906040850190845b818110156117b75783516001600160a01b031683529284019291840191600101611792565b50909695505050505050565b5f80604083850312156117d4575f80fd5b6117dd836115f3565b91506117eb602084016115f3565b90509250929050565b600181811c9082168061180857607f821691505b60208210810361182657634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b808201808211156105815761058161182c565b828152604060208201525f61186b604083018461159e565b949350505050565b6001600160a01b0384168152826020820152606060408201525f61189a606083018461159e565b95945050505050565b818103818111156105815761058161182c565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52603160045260245ffdfea264697066735822122047fcb0a84f5061040f084da6934bdc98cdce6639caa7110ead6c51ecdbd7ed5864736f6c63430008140033";

type BurnMintERC677ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BurnMintERC677ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BurnMintERC677__factory extends ContractFactory {
  constructor(...args: BurnMintERC677ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    maxSupply_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BurnMintERC677> {
    return super.deploy(
      name,
      symbol,
      decimals_,
      maxSupply_,
      overrides || {}
    ) as Promise<BurnMintERC677>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    decimals_: PromiseOrValue<BigNumberish>,
    maxSupply_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      decimals_,
      maxSupply_,
      overrides || {}
    );
  }
  override attach(address: string): BurnMintERC677 {
    return super.attach(address) as BurnMintERC677;
  }
  override connect(signer: Signer): BurnMintERC677__factory {
    return super.connect(signer) as BurnMintERC677__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BurnMintERC677Interface {
    return new utils.Interface(_abi) as BurnMintERC677Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BurnMintERC677 {
    return new Contract(address, _abi, signerOrProvider) as BurnMintERC677;
  }
}
