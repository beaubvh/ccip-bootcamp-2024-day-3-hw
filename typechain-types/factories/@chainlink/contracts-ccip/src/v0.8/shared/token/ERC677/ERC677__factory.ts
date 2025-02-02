/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  ERC677,
  ERC677Interface,
} from "../../../../../../../../@chainlink/contracts-ccip/src/v0.8/shared/token/ERC677/ERC677";

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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
] as const;

const _bytecode =
  "0x608060405234801562000010575f80fd5b5060405162000e4638038062000e4683398101604081905262000033916200011b565b818160036200004383826200020d565b5060046200005282826200020d565b5050505050620002d5565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011262000081575f80fd5b81516001600160401b03808211156200009e576200009e6200005d565b604051601f8301601f19908116603f01168101908282118183101715620000c957620000c96200005d565b81604052838152602092508683858801011115620000e5575f80fd5b5f91505b83821015620001085785820183015181830184015290820190620000e9565b5f93810190920192909252949350505050565b5f80604083850312156200012d575f80fd5b82516001600160401b038082111562000144575f80fd5b620001528683870162000071565b9350602085015191508082111562000168575f80fd5b50620001778582860162000071565b9150509250929050565b600181811c908216806200019657607f821691505b602082108103620001b557634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111562000208575f81815260208120601f850160051c81016020861015620001e35750805b601f850160051c820191505b818110156200020457828155600101620001ef565b5050505b505050565b81516001600160401b038111156200022957620002296200005d565b62000241816200023a845462000181565b84620001bb565b602080601f83116001811462000277575f84156200025f5750858301515b5f19600386901b1c1916600185901b17855562000204565b5f85815260208120601f198616915b82811015620002a75788860151825594840194600190910190840162000286565b5085821015620002c557878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b610b6380620002e35f395ff3fe608060405234801561000f575f80fd5b50600436106100cf575f3560e01c80634000aea01161007d578063a457c2d711610058578063a457c2d71461019e578063a9059cbb146101b1578063dd62ed3e146101c4575f80fd5b80634000aea01461015b57806370a082311461016e57806395d89b4114610196575f80fd5b806323b872dd116100ad57806323b872dd14610126578063313ce567146101395780633950935114610148575f80fd5b806306fdde03146100d3578063095ea7b3146100f157806318160ddd14610114575b5f80fd5b6100db6101fc565b6040516100e891906108cf565b60405180910390f35b6101046100ff366004610903565b61028c565b60405190151581526020016100e8565b6002545b6040519081526020016100e8565b61010461013436600461092b565b6102a5565b604051601281526020016100e8565b610104610156366004610903565b6102c8565b610104610169366004610978565b610306565b61011861017c366004610a3c565b6001600160a01b03165f9081526020819052604090205490565b6100db6103f0565b6101046101ac366004610903565b6103ff565b6101046101bf366004610903565b6104ad565b6101186101d2366004610a55565b6001600160a01b039182165f90815260016020908152604080832093909416825291909152205490565b60606003805461020b90610a86565b80601f016020809104026020016040519081016040528092919081815260200182805461023790610a86565b80156102825780601f1061025957610100808354040283529160200191610282565b820191905f5260205f20905b81548152906001019060200180831161026557829003601f168201915b5050505050905090565b5f336102998185856104ba565b60019150505b92915050565b5f336102b2858285610611565b6102bd8585856106a1565b506001949350505050565b335f8181526001602090815260408083206001600160a01b03871684529091528120549091906102999082908690610301908790610abe565b6104ba565b5f61031184846104ad565b50836001600160a01b0316336001600160a01b03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c168585604051610357929190610add565b60405180910390a36001600160a01b0384163b156103e6576040517fa4c0ed360000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063a4c0ed36906103b890339087908790600401610afd565b5f604051808303815f87803b1580156103cf575f80fd5b505af11580156103e1573d5f803e3d5ffd5b505050505b5060019392505050565b60606004805461020b90610a86565b335f8181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104a05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102bd82868684036104ba565b5f336102998185856106a1565b6001600160a01b0383166105355760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610497565b6001600160a01b0382166105b15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610497565b6001600160a01b038381165f8181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381165f908152600160209081526040808320938616835292905220545f19811461069b578181101561068e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610497565b61069b84848484036104ba565b50505050565b6001600160a01b03831661071d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610497565b6001600160a01b0382166107995760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610497565b6001600160a01b0383165f90815260208190526040902054818110156108275760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610497565b6001600160a01b038481165f81815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361069b565b5f81518084525f5b818110156108b057602081850181015186830182015201610894565b505f602082860101526020601f19601f83011685010191505092915050565b602081525f6108e1602083018461088c565b9392505050565b80356001600160a01b03811681146108fe575f80fd5b919050565b5f8060408385031215610914575f80fd5b61091d836108e8565b946020939093013593505050565b5f805f6060848603121561093d575f80fd5b610946846108e8565b9250610954602085016108e8565b9150604084013590509250925092565b634e487b7160e01b5f52604160045260245ffd5b5f805f6060848603121561098a575f80fd5b610993846108e8565b925060208401359150604084013567ffffffffffffffff808211156109b6575f80fd5b818601915086601f8301126109c9575f80fd5b8135818111156109db576109db610964565b604051601f8201601f19908116603f01168101908382118183101715610a0357610a03610964565b81604052828152896020848701011115610a1b575f80fd5b826020860160208301375f6020848301015280955050505050509250925092565b5f60208284031215610a4c575f80fd5b6108e1826108e8565b5f8060408385031215610a66575f80fd5b610a6f836108e8565b9150610a7d602084016108e8565b90509250929050565b600181811c90821680610a9a57607f821691505b602082108103610ab857634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561029f57634e487b7160e01b5f52601160045260245ffd5b828152604060208201525f610af5604083018461088c565b949350505050565b6001600160a01b0384168152826020820152606060408201525f610b24606083018461088c565b9594505050505056fea2646970667358221220605b5ef878e821138e3cf2dfa07279f05f462d5284497e292b65bd8e222d8fb164736f6c63430008140033";

type ERC677ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC677ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC677__factory extends ContractFactory {
  constructor(...args: ERC677ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC677> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC677>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): ERC677 {
    return super.attach(address) as ERC677;
  }
  override connect(signer: Signer): ERC677__factory {
    return super.connect(signer) as ERC677__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC677Interface {
    return new utils.Interface(_abi) as ERC677Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC677 {
    return new Contract(address, _abi, signerOrProvider) as ERC677;
  }
}
