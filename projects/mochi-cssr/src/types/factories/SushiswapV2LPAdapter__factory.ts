/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SushiswapV2LPAdapter,
  SushiswapV2LPAdapterInterface,
} from "../SushiswapV2LPAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cssr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Q112",
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
    name: "cssr",
    outputs: [
      {
        internalType: "contract IUniswapV2CSSR",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
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
        name: "_asset",
        type: "address",
      },
    ],
    name: "getLiquidity",
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
        name: "_asset",
        type: "address",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "denominator",
            type: "uint256",
          },
        ],
        internalType: "struct float",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "_pair",
        type: "address",
      },
    ],
    name: "getUnderlyingAsset",
    outputs: [
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract ICSSRRouter",
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
        name: "_asset",
        type: "address",
      },
    ],
    name: "support",
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
        name: "_asset",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
    ],
    name: "update",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numerator",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "denominator",
            type: "uint256",
          },
        ],
        internalType: "struct float",
        name: "price",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
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
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b50604051620013b0380380620013b0833981016040819052620000359162000080565b6001600160601b0319606094851b811660c05291841b8216608052831b811660a052911b1660e052620000dd565b80516001600160a01b03811681146200007b57600080fd5b919050565b600080600080608085870312156200009757600080fd5b620000a28562000063565b9350620000b26020860162000063565b9250620000c26040860162000063565b9150620000d26060860162000063565b905092959194509250565b60805160601c60a05160601c60c05160601c60e05160601c611248620001686000396000818161015901526103cf01526000818160f4015281816103f1015281816104310152818161054c015281816106a00152610b3b01526000818161018001526106cb0152600081816101dd01528181610238015281816103370152610b6701526112486000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063c45a015511610066578063c45a015514610154578063d1d198dd1461017b578063e660cc08146101a2578063e8689daa146101c5578063f887ea40146101d857600080fd5b806302a688ed146100a35780633bf7a83e146100d65780633fc8cef3146100ef57806341976e091461012e578063a747b93b14610141575b600080fd5b6100b66100b1366004610f91565b6101ff565b604080518251815260209283015192810192909252015b60405180910390f35b6100e1600160701b81565b6040519081526020016100cd565b6101167f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100cd565b6100b661013c366004610f57565b6102d5565b6100e161014f366004610f57565b610309565b6101167f000000000000000000000000000000000000000000000000000000000000000081565b6101167f000000000000000000000000000000000000000000000000000000000000000081565b6101b56101b0366004610f57565b6103ba565b60405190151581526020016100cd565b6101166101d3366004610f57565b61042d565b6101167f000000000000000000000000000000000000000000000000000000000000000081565b6040805180820190915260008082526020820152600061021e8461042d565b6040516302a688ed60e01b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302a688ed9061026f90879087906004016110f1565b6040805180830381600087803b15801561028857600080fd5b505af115801561029c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c09190611039565b506102cb848261066d565b9150505b92915050565b60408051808201909152600080825260208201528160006102f58261042d565b9050610301828261066d565b949350505050565b6000806103158361042d565b60405163a747b93b60e01b81526001600160a01b0380831660048301529192507f00000000000000000000000000000000000000000000000000000000000000009091169063a747b93b9060240160206040518083038186803b15801561037b57600080fd5b505afa15801561038f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b391906110d8565b9392505050565b6000806103c68361042d565b905060006104157f0000000000000000000000000000000000000000000000000000000000000000837f0000000000000000000000000000000000000000000000000000000000000000610c0f565b6001600160a01b039485169416939093149392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561049257600080fd5b505afa1580156104a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ca9190610f74565b6001600160a01b0316141561054a57816001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b15801561051257600080fd5b505afa158015610526573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cf9190610f74565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031663d21220a76040518163ffffffff1660e01b815260040160206040518083038186803b1580156105ad57600080fd5b505afa1580156105c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e59190610f74565b6001600160a01b0316141561062d57816001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561051257600080fd5b60405162461bcd60e51b815260206004820152600b60248201526a08595d1a081c185a5c995960aa1b60448201526064015b60405180910390fd5b919050565b6040805180820190915260008082526020820152604051630e846c4760e31b81526001600160a01b0383811660048301527f0000000000000000000000000000000000000000000000000000000000000000811660248301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063742362389060440160206040518083038186803b15801561070f57600080fd5b505afa158015610723573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074791906110d8565b9050600080856001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561078557600080fd5b505afa158015610799573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bd9190611088565b5091509150600080866001600160a01b0316886001600160a01b0316630dfe16816040518163ffffffff1660e01b815260040160206040518083038186803b15801561080857600080fd5b505afa15801561081c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108409190610f74565b6001600160a01b031614156108645750506001600160701b03808316908216610875565b50506001600160701b038082169083165b600082610886600160701b846111c1565b610890919061119f565b9050600086821015610929576000600160701b886108b187623cda206111c1565b6108bb91906111c1565b6108c5919061119f565b6108d08560096111c1565b6108da9190611187565b6108e490856111c1565b905060006107d06108f7866107cd6111c1565b61090084610cf1565b61090a91906111e0565b610914919061119f565b90506109208186611187565b925050506109ea565b600061093588866111c1565b90506000600160701b6109498360096111c1565b610953919061119f565b9050600061096486623cda206111c1565b905060006109926109758385611187565b610983600160701b8761119f565b61098d91906111c1565b610cf1565b90506000600160701b6109a68660036111c1565b6109b0919061119f565b905060006107d06109c18484611187565b6109cb919061119f565b6109d5908a6111e0565b90506109e1818a6111e0565b96505050505050505b60006109f78260026111c1565b90506000600160701b821115610a9857600160701b8c6001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a4557600080fd5b505afa158015610a59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7d91906110d8565b610a87908461119f565b610a9191906111c1565b9050610b24565b8b6001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610ad157600080fd5b505afa158015610ae5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0991906110d8565b610b17600160701b846111c1565b610b21919061119f565b90505b6040516341976e0960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166004830152610bff917f0000000000000000000000000000000000000000000000000000000000000000909116906341976e0990602401604080518083038186803b158015610baa57600080fd5b505afa158015610bbe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be29190611039565b60408051808201909152838152600160701b602082015290610d61565b9c9b505050505050505050505050565b6000806000610c1e8585610e48565b6040516bffffffffffffffffffffffff19606084811b8216602084015283901b1660348201529193509150869060480160405160208183030381529060405280519060200120604051602001610cc69291906001600160f81b0319815260609290921b6bffffffffffffffffffffffff1916600183015260158201527fe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303603582015260550190565b60408051601f1981840301815291905280516020909101206001600160a01b03169695505050505050565b60006003821115610d53576000610d0960028461119f565b610d14906001611187565b90508291505b81811015610d4d57905080600281610d32818661119f565b610d3c9190611187565b610d46919061119f565b9050610d1a565b50919050565b811561066857506001919050565b6040805180820190915260008082526020820152602083015115801590610d8b5750602082015115155b610dbf5760405162461bcd60e51b8152602060048201526005602482015264064697620360dc1b604482015260640161065f565b60408051808201909152825184518291610dd8916111c1565b815260200183602001518560200151610df191906111c1565b90528051909150600160801b108015610e115750600160801b8160200151115b156102cf578051610e2790600160401b9061119f565b81526020810151610e3d90600160401b9061119f565b602082015292915050565b600080826001600160a01b0316846001600160a01b03161415610ebb5760405162461bcd60e51b815260206004820152602560248201527f556e697377617056324c6962726172793a204944454e544943414c5f41444452604482015264455353455360d81b606482015260840161065f565b826001600160a01b0316846001600160a01b031610610edb578284610ede565b83835b90925090506001600160a01b038216610f395760405162461bcd60e51b815260206004820152601e60248201527f556e697377617056324c6962726172793a205a45524f5f414444524553530000604482015260640161065f565b9250929050565b80516001600160701b038116811461066857600080fd5b600060208284031215610f6957600080fd5b81356103b381611223565b600060208284031215610f8657600080fd5b81516103b381611223565b60008060408385031215610fa457600080fd5b8235610faf81611223565b915060208381013567ffffffffffffffff80821115610fcd57600080fd5b818601915086601f830112610fe157600080fd5b813581811115610ff357610ff361120d565b611005601f8201601f19168501611156565b9150808252878482850101111561101b57600080fd5b80848401858401376000848284010152508093505050509250929050565b60006040828403121561104b57600080fd5b6040516040810181811067ffffffffffffffff8211171561106e5761106e61120d565b604052825181526020928301519281019290925250919050565b60008060006060848603121561109d57600080fd5b6110a684610f40565b92506110b460208501610f40565b9150604084015163ffffffff811681146110cd57600080fd5b809150509250925092565b6000602082840312156110ea57600080fd5b5051919050565b60018060a01b038316815260006020604081840152835180604085015260005b8181101561112d57858101830151858201606001528201611111565b8181111561113f576000606083870101525b50601f01601f191692909201606001949350505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561117f5761117f61120d565b604052919050565b6000821982111561119a5761119a6111f7565b500190565b6000826111bc57634e487b7160e01b600052601260045260246000fd5b500490565b60008160001904831182151516156111db576111db6111f7565b500290565b6000828210156111f2576111f26111f7565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461123857600080fd5b5056fea164736f6c6343000807000a";

export class SushiswapV2LPAdapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _weth: string,
    _factory: string,
    _router: string,
    _cssr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SushiswapV2LPAdapter> {
    return super.deploy(
      _weth,
      _factory,
      _router,
      _cssr,
      overrides || {}
    ) as Promise<SushiswapV2LPAdapter>;
  }
  getDeployTransaction(
    _weth: string,
    _factory: string,
    _router: string,
    _cssr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _weth,
      _factory,
      _router,
      _cssr,
      overrides || {}
    );
  }
  attach(address: string): SushiswapV2LPAdapter {
    return super.attach(address) as SushiswapV2LPAdapter;
  }
  connect(signer: Signer): SushiswapV2LPAdapter__factory {
    return super.connect(signer) as SushiswapV2LPAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SushiswapV2LPAdapterInterface {
    return new utils.Interface(_abi) as SushiswapV2LPAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiswapV2LPAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SushiswapV2LPAdapter;
  }
}
