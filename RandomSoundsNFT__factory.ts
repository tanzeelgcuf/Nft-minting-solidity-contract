/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RandomSoundsNFT,
  RandomSoundsNFTInterface,
} from "../RandomSoundsNFT";

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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "string",
        name: "tokenURI_",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
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
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "tokenIdsByOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "tokenURIsAndIDsByOwner",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "uri",
            type: "string",
          },
        ],
        internalType: "struct RandomSoundsNFT.URIwithID[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405268068155a43676e000006008553480156200001e57600080fd5b50604080518082018252600f81526e14985b991bdb54dbdd5b991cd39195608a1b6020808301918252835180850190945260058452641494d3919560da1b908401528151919291620000739160009162000102565b5080516200008990600190602084019062000102565b505050620000a6620000a0620000ac60201b60201c565b620000b0565b620001e5565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200011090620001a8565b90600052602060002090601f0160209004810192826200013457600085556200017f565b82601f106200014f57805160ff19168380011785556200017f565b828001600101855582156200017f579182015b828111156200017f57825182559160200191906001019062000162565b506200018d92915062000191565b5090565b5b808211156200018d576000815560010162000192565b600181811c90821680620001bd57607f821691505b60208210811415620001df57634e487b7160e01b600052602260045260246000fd5b50919050565b611f4380620001f56000396000f3fe6080604052600436106101355760003560e01c80638da5cb5b116100ab578063a22cb4651161006f578063a22cb46514610363578063b88d4fde14610383578063c87b56dd146103a3578063d85d3d27146103c3578063e985e9c5146103e3578063f2fde38b1461042c57600080fd5b80638da5cb5b146102b65780638f85fa94146102d457806391b7f5ed1461030157806395d89b4114610321578063a05c4e151461033657600080fd5b8063379607f5116100fd578063379607f51461020b57806342842e0e1461021e5780636352211e1461023e57806370a082311461025e578063715018a61461028c578063853828b6146102a157600080fd5b806301ffc9a71461013a57806306fdde031461016f578063081812fc14610191578063095ea7b3146101c957806323b872dd146101eb575b600080fd5b34801561014657600080fd5b5061015a610155366004611b12565b61044c565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b5061018461049e565b6040516101669190611cf7565b34801561019d57600080fd5b506101b16101ac366004611b90565b610530565b6040516001600160a01b039091168152602001610166565b3480156101d557600080fd5b506101e96101e4366004611ae9565b6105bd565b005b3480156101f757600080fd5b506101e96102063660046119fb565b6106d3565b6101e9610219366004611b90565b610704565b34801561022a57600080fd5b506101e96102393660046119fb565b61082e565b34801561024a57600080fd5b506101b1610259366004611b90565b610849565b34801561026a57600080fd5b5061027e6102793660046119af565b6108c0565b604051908152602001610166565b34801561029857600080fd5b506101e9610947565b3480156102ad57600080fd5b506101e961097d565b3480156102c257600080fd5b506006546001600160a01b03166101b1565b3480156102e057600080fd5b506102f46102ef3660046119af565b6109d6565b6040516101669190611cb3565b34801561030d57600080fd5b506101e961031c366004611b90565b610ae1565b34801561032d57600080fd5b50610184610b10565b34801561034257600080fd5b506103566103513660046119af565b610b1f565b6040516101669190611c40565b34801561036f57600080fd5b506101e961037e366004611aaf565b610c72565b34801561038f57600080fd5b506101e961039e366004611a36565b610d37565b3480156103af57600080fd5b506101846103be366004611b90565b610d6f565b3480156103cf57600080fd5b5061027e6103de366004611b4a565b610d7a565b3480156103ef57600080fd5b5061015a6103fe3660046119c9565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561043857600080fd5b506101e96104473660046119af565b610ddb565b60006001600160e01b031982166380ac58cd60e01b148061047d57506001600160e01b03198216635b5e139f60e01b145b8061049857506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546104ad90611e51565b80601f01602080910402602001604051908101604052809291908181526020018280546104d990611e51565b80156105265780601f106104fb57610100808354040283529160200191610526565b820191906000526020600020905b81548152906001019060200180831161050957829003601f168201915b5050505050905090565b600061053b82610e76565b6105a15760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105c882610849565b9050806001600160a01b0316836001600160a01b031614156106365760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610598565b336001600160a01b0382161480610652575061065281336103fe565b6106c45760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610598565b6106ce8383610e93565b505050565b6106dd3382610f01565b6106f95760405162461bcd60e51b815260040161059890611d91565b6106ce838383610feb565b600854341461074a5760405162461bcd60e51b8152602060048201526012602482015271496e76616c69642073656e742076616c756560701b6044820152606401610598565b3315801590610773575061075d81610849565b6001600160a01b0316336001600160a01b031614155b6107d05760405162461bcd60e51b815260206004820152602860248201527f4e6f6e2d6578697374656e742061646472657373206f7220616c72656164792060448201526730b71037bbb732b960c11b6064820152608401610598565b60006107db82610849565b6040519091506001600160a01b038216903480156108fc02916000818181858888f19350505050158015610813573d6000803e3d6000fd5b5061081f816001610c72565b61082a813384610feb565b5050565b6106ce83838360405180602001604052806000815250610d37565b6000818152600260205260408120546001600160a01b0316806104985760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610598565b60006001600160a01b03821661092b5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610598565b506001600160a01b031660009081526003602052604090205490565b6006546001600160a01b031633146109715760405162461bcd60e51b815260040161059890611d5c565b61097b600061118b565b565b6006546001600160a01b031633146109a75760405162461bcd60e51b815260040161059890611d5c565b6040514790339082156108fc029083906000818181858888f1935050505015801561082a573d6000803e3d6000fd5b606060006109e3836108c0565b905080610a045760408051600080825260208201909252905b509392505050565b6000808267ffffffffffffffff811115610a2e57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610a57578160200160208202803683370190505b50905060015b60328111610ad257856001600160a01b0316610a7882610849565b6001600160a01b03161415610ac057808284610a9381611e86565b955081518110610ab357634e487b7160e01b600052603260045260246000fd5b6020026020010181815250505b80610aca81611e86565b915050610a5d565b50949350505050565b50919050565b6006546001600160a01b03163314610b0b5760405162461bcd60e51b815260040161059890611d5c565b600855565b6060600180546104ad90611e51565b60606000610b2c836109d6565b90506000815167ffffffffffffffff811115610b5857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b9e57816020015b604080518082019091526000815260606020820152815260200190600190039081610b765790505b50905060005b82518110156109fc57610bdd838281518110610bd057634e487b7160e01b600052603260045260246000fd5b6020026020010151610d6f565b828281518110610bfd57634e487b7160e01b600052603260045260246000fd5b602002602001015160200181905250828181518110610c2c57634e487b7160e01b600052603260045260246000fd5b6020026020010151828281518110610c5457634e487b7160e01b600052603260045260246000fd5b60209081029190910101515280610c6a81611e86565b915050610ba4565b6001600160a01b038216331415610ccb5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610598565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610d413383610f01565b610d5d5760405162461bcd60e51b815260040161059890611d91565b610d69848484846111dd565b50505050565b606061049882611210565b6006546000906001600160a01b03163314610da75760405162461bcd60e51b815260040161059890611d5c565b610db5600980546001019055565b6000610dc060095490565b9050610dcc338261137f565b6104988184611399565b919050565b6006546001600160a01b03163314610e055760405162461bcd60e51b815260040161059890611d5c565b6001600160a01b038116610e6a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610598565b610e738161118b565b50565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610ec882610849565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610f0c82610e76565b610f6d5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610598565b6000610f7883610849565b9050806001600160a01b0316846001600160a01b03161480610fb35750836001600160a01b0316610fa884610530565b6001600160a01b0316145b80610fe357506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610ffe82610849565b6001600160a01b0316146110665760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610598565b6001600160a01b0382166110c85760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610598565b6110d3600082610e93565b6001600160a01b03831660009081526003602052604081208054600192906110fc908490611e0e565b90915550506001600160a01b038216600090815260036020526040812080546001929061112a908490611de2565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6111e8848484610feb565b6111f484848484611424565b610d695760405162461bcd60e51b815260040161059890611d0a565b606061121b82610e76565b6112815760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b6064820152608401610598565b6000828152600760205260408120805461129a90611e51565b80601f01602080910402602001604051908101604052809291908181526020018280546112c690611e51565b80156113135780601f106112e857610100808354040283529160200191611313565b820191906000526020600020905b8154815290600101906020018083116112f657829003601f168201915b50505050509050600061133160408051602081019091526000815290565b9050805160001415611344575092915050565b81511561137657808260405160200161135e929190611bd4565b60405160208183030381529060405292505050919050565b610fe384611531565b61082a828260405180602001604052806000815250611609565b6113a282610e76565b6114055760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610598565b600082815260076020908152604090912082516106ce92840190611889565b60006001600160a01b0384163b1561152657604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611468903390899088908890600401611c03565b602060405180830381600087803b15801561148257600080fd5b505af19250505080156114b2575060408051601f3d908101601f191682019092526114af91810190611b2e565b60015b61150c573d8080156114e0576040519150601f19603f3d011682016040523d82523d6000602084013e6114e5565b606091505b5080516115045760405162461bcd60e51b815260040161059890611d0a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610fe3565b506001949350505050565b606061153c82610e76565b6115a05760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610598565b60006115b760408051602081019091526000815290565b905060008151116115d75760405180602001604052806000815250611602565b806115e18461163c565b6040516020016115f2929190611bd4565b6040516020818303038152906040525b9392505050565b6116138383611756565b6116206000848484611424565b6106ce5760405162461bcd60e51b815260040161059890611d0a565b6060816116605750506040805180820190915260018152600360fc1b602082015290565b8160005b811561168a578061167481611e86565b91506116839050600a83611dfa565b9150611664565b60008167ffffffffffffffff8111156116b357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156116dd576020820181803683370190505b5090505b8415610fe3576116f2600183611e0e565b91506116ff600a86611ea1565b61170a906030611de2565b60f81b81838151811061172d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535061174f600a86611dfa565b94506116e1565b6001600160a01b0382166117ac5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610598565b6117b581610e76565b156118025760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610598565b6001600160a01b038216600090815260036020526040812080546001929061182b908490611de2565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461189590611e51565b90600052602060002090601f0160209004810192826118b757600085556118fd565b82601f106118d057805160ff19168380011785556118fd565b828001600101855582156118fd579182015b828111156118fd5782518255916020019190600101906118e2565b5061190992915061190d565b5090565b5b80821115611909576000815560010161190e565b600067ffffffffffffffff8084111561193d5761193d611ee1565b604051601f8501601f19908116603f0116810190828211818310171561196557611965611ee1565b8160405280935085815286868601111561197e57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b0381168114610dd657600080fd5b6000602082840312156119c0578081fd5b61160282611998565b600080604083850312156119db578081fd5b6119e483611998565b91506119f260208401611998565b90509250929050565b600080600060608486031215611a0f578081fd5b611a1884611998565b9250611a2660208501611998565b9150604084013590509250925092565b60008060008060808587031215611a4b578081fd5b611a5485611998565b9350611a6260208601611998565b925060408501359150606085013567ffffffffffffffff811115611a84578182fd5b8501601f81018713611a94578182fd5b611aa387823560208401611922565b91505092959194509250565b60008060408385031215611ac1578182fd5b611aca83611998565b915060208301358015158114611ade578182fd5b809150509250929050565b60008060408385031215611afb578182fd5b611b0483611998565b946020939093013593505050565b600060208284031215611b23578081fd5b813561160281611ef7565b600060208284031215611b3f578081fd5b815161160281611ef7565b600060208284031215611b5b578081fd5b813567ffffffffffffffff811115611b71578182fd5b8201601f81018413611b81578182fd5b610fe384823560208401611922565b600060208284031215611ba1578081fd5b5035919050565b60008151808452611bc0816020860160208601611e25565b601f01601f19169290920160200192915050565b60008351611be6818460208801611e25565b835190830190611bfa818360208801611e25565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611c3690830184611ba8565b9695505050505050565b60006020808301818452808551808352604092508286019150828160051b870101848801865b83811015611ca557888303603f19018552815180518452870151878401879052611c9287850182611ba8565b9588019593505090860190600101611c66565b509098975050505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611ceb57835183529284019291840191600101611ccf565b50909695505050505050565b6020815260006116026020830184611ba8565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611df557611df5611eb5565b500190565b600082611e0957611e09611ecb565b500490565b600082821015611e2057611e20611eb5565b500390565b60005b83811015611e40578181015183820152602001611e28565b83811115610d695750506000910152565b600181811c90821680611e6557607f821691505b60208210811415610adb57634e487b7160e01b600052602260045260246000fd5b6000600019821415611e9a57611e9a611eb5565b5060010190565b600082611eb057611eb0611ecb565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610e7357600080fdfea26469706673582212206d88aa4549ff71d5dabd8f40731dfd8356f883ea9beb891c7dd8464a6912049064736f6c63430008040033";

export class RandomSoundsNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RandomSoundsNFT> {
    return super.deploy(overrides || {}) as Promise<RandomSoundsNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RandomSoundsNFT {
    return super.attach(address) as RandomSoundsNFT;
  }
  connect(signer: Signer): RandomSoundsNFT__factory {
    return super.connect(signer) as RandomSoundsNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RandomSoundsNFTInterface {
    return new utils.Interface(_abi) as RandomSoundsNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RandomSoundsNFT {
    return new Contract(address, _abi, signerOrProvider) as RandomSoundsNFT;
  }
}
