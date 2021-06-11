/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts'

import type { L1GatewayTester } from '../L1GatewayTester'

export class L1GatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(overrides?: Overrides): Promise<L1GatewayTester> {
    return super.deploy(overrides || {}) as Promise<L1GatewayTester>
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayTester {
    return super.attach(address) as L1GatewayTester
  }
  connect(signer: Signer): L1GatewayTester__factory {
    return super.connect(signer) as L1GatewayTester__factory
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayTester {
    return new Contract(address, _abi, signerOrProvider) as L1GatewayTester
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'InboundTransferFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_transferId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'OutboundTransferInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cloneableProxyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_cloneableProxyHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_l2BeaconProxyFactory',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2BeaconProxyFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_cloneableProxyHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_l2BeaconProxyFactory',
        type: 'address',
      },
    ],
    name: 'postUpgradeInit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b50611890806100206000396000f3fe60806040526004361061009c5760003560e01c8063a01893bf11610064578063a01893bf14610254578063a0c76a96146102a7578063a7e28d4814610380578063d2ce7d65146103b3578063f887ea401461044d578063fb0e722b146104625761009c565b80630fa80525146100a15780632db09c1c146100dc5780632e567b361461010d57806370fc045f1461021857806397881f8d1461022d575b600080fd5b3480156100ad57600080fd5b506100da600480360360408110156100c457600080fd5b50803590602001356001600160a01b0316610477565b005b3480156100e857600080fd5b506100f16105c1565b604080516001600160a01b039092168252519081900360200190f35b6101a3600480360360a081101561012357600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561016557600080fd5b82018360208201111561017757600080fd5b803590602001918460018302840111600160201b8311171561019857600080fd5b5090925090506105d0565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101dd5781810151838201526020016101c5565b50505050905090810190601f16801561020a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022457600080fd5b506100f1610790565b34801561023957600080fd5b5061024261079f565b60408051918252519081900360200190f35b34801561026057600080fd5b506100da600480360360a081101561027757600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013591608090910135166107a5565b3480156102b357600080fd5b506101a3600480360360a08110156102ca57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561030c57600080fd5b82018360208201111561031e57600080fd5b803590602001918460018302840111600160201b8311171561033f57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061086c945050505050565b34801561038c57600080fd5b506100f1600480360360208110156103a357600080fd5b50356001600160a01b0316610bc4565b6101a3600480360360c08110156103c957600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561040f57600080fd5b82018360208201111561042157600080fd5b803590602001918460018302840111600160201b8311171561044257600080fd5b509092509050610c1c565b34801561045957600080fd5b506100f1610df3565b34801561046e57600080fd5b506100f1610e02565b816104bd576040805162461bcd60e51b81526020600482015260116024820152700929cac82989288bea0a49eb0b29082a69607b1b604482015290519081900360640190fd5b6001600160a01b038116610509576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b6003541561054d576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b6004546001600160a01b03161561059a576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600391909155600480546001600160a01b0319166001600160a01b03909216919091179055565b6000546001600160a01b031681565b60606105da610e11565b610626576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b600060608484604081101561063a57600080fd5b81359190810190604081016020820135600160201b81111561065b57600080fd5b82018360208201111561066d57600080fd5b803590602001918460018302840111600160201b8311171561068e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509698509196506106dd95508e94508c93508b9250610e22915050565b81876001600160a01b0316896001600160a01b03167f179a84706122b1b806f7d61c28c5caef276b7ff474ae596df3cad4bbaf0eb97d8c8a8a8a60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a45050604080516020810190915260008152979650505050505050565b6004546001600160a01b031681565b60035481565b6107b0858585610e41565b816107f6576040805162461bcd60e51b81526020600482015260116024820152700929cac82989288bea0a49eb0b29082a69607b1b604482015290519081900360640190fd5b6001600160a01b038116610842576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b600391909155600480546001600160a01b0319166001600160a01b03909216919091179055505050565b606080610880876306fdde0360e01b610f09565b610891886395d89b4160e01b610f09565b6108a28963313ce56760e01b610f09565b60405160200180806020018060200180602001848103845287818151815260200191508051906020019080838360005b838110156108ea5781810151838201526020016108d2565b50505050905090810190601f1680156109175780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b8381101561094a578181015183820152602001610932565b50505050905090810190601f1680156109775780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b838110156109aa578181015183820152602001610992565b50505050905090810190601f1680156109d75780820380516001836020036101000a031916815260200191505b5096505050505050506040516020818303038152906040529050632e567b3660e01b878787878588604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610a43578181015183820152602001610a2b565b50505050905090810190601f168015610a705780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610aa3578181015183820152602001610a8b565b50505050905090810190601f168015610ad05780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152908290526001600160a01b03808c16602484019081528b82166044850152908a1660648401526084830189905260a060a48401908152825160c48501528251929850909650945060e4909101925060208601915080838360005b83811015610b50578181015183820152602001610b38565b50505050905090810190601f168015610b7d5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b6000610bce610fe5565b610c0d576040805162461bcd60e51b815260206004820152600b60248201526a27a7262cafa927aaaa22a960a91b604482015290519081900360640190fd5b610c1682610ff6565b92915050565b6060610c26610fe5565b610c65576040805162461bcd60e51b815260206004820152600b60248201526a27a7262cafa927aaaa22a960a91b604482015290519081900360640190fd5b60008060006060610cab87878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061102792505050565b91955092509050610cc46001600160a01b038d166111ec565b610d07576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000610d128d610ff6565b9050610d1f8d868d6111f2565b610d2f8d868e8e8e8e898961120d565b935050505080896001600160a01b0316836001600160a01b03167f9c003a9d1163eca79021710dcd5d9f657218bf2bd67aaa13389009a6047894a88d8c8a8a60405180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600083820152604051601f909101601f191690920182900397509095505050505050a46040805160208082019390935281518082039093018352810190529998505050505050505050565b6001546001600160a01b031681565b6002546001600160a01b031681565b6000546001600160a01b0316331490565b610e3c6001600160a01b038416838363ffffffff61123716565b505050565b6001600160a01b038216610e89576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b610e938383611289565b6001600160a01b038116610eda576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600180546001600160a01b039384166001600160a01b0319918216179091556002805492909316911617905550565b60408051600481526024810182526020810180516001600160e01b03166001600160e01b031985161781529151815160609360009385936001600160a01b03891693919290918291908083835b60208310610f755780518252601f199092019160209182019101610f56565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610fd5576040519150601f19603f3d011682016040523d82523d6000602084013e610fda565b606091505b509695505050505050565b6001546001600160a01b0316331490565b60008061100283611355565b600354600454919250611020918391906001600160a01b03166113ad565b9392505050565b6000806060611034610fe5565b1561110f5783806020019051604081101561104e57600080fd5b815160208301805160405192949293830192919084600160201b82111561107457600080fd5b90830190602082018581111561108957600080fd5b8251600160201b8111828201881017156110a257600080fd5b82525081516020918201929091019080838360005b838110156110cf5781810151838201526020016110b7565b50505050905090810190601f1680156110fc5780820380516001836020036101000a031916815260200191505b5060405250929550909250611115915050565b50339150825b80806020019051604081101561112a57600080fd5b815160208301805160405192949293830192919084600160201b82111561115057600080fd5b90830190602082018581111561116557600080fd5b8251600160201b81118282018810171561117e57600080fd5b82525081516020918201929091019080838360005b838110156111ab578181015183820152602001611193565b50505050905090810190601f1680156111d85780820380516001836020036101000a031916815260200191505b506040525095979296509094509092505050565b3b151590565b610e3c6001600160a01b03841683308463ffffffff61140816565b600061122a8860008588886112258f8f8f8f8c61086c565b611468565b9998505050505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610e3c908490611542565b6001600160a01b0382166112da576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611327576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b600054604080516001600160a01b0393841660208083019190915282518083038201815282840184528051908201209490931660608201526080808201949094528151808203909401845260a0019052815191012090565b604080516001600160f81b031960208083019190915260609390931b6bffffffffffffffffffffffff191660218201526035810194909452605580850193909352805180850390930183526075909301909252805191012090565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052611462908590611542565b50505050565b60008054604051835183926060926001600160a01b0390911691869190819060208401908083835b602083106114af5780518252601f199092019160209182019101611490565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611511576040519150601f19603f3d011682016040523d82523d6000602084013e611516565b606091505b50915091503d6000803e81801561152c57611531565b816000fd5b506105399998505050505050505050565b6060611597826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115f39092919063ffffffff16565b805190915015610e3c578080602001905160208110156115b657600080fd5b5051610e3c5760405162461bcd60e51b815260040180806020018281038252602a815260200180611831602a913960400191505060405180910390fd5b6060611602848460008561160a565b949350505050565b60608247101561164b5760405162461bcd60e51b815260040180806020018281038252602681526020018061180b6026913960400191505060405180910390fd5b611654856111ec565b6116a5576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106116e45780518252601f1990920191602091820191016116c5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611746576040519150601f19603f3d011682016040523d82523d6000602084013e61174b565b606091505b509150915061175b828286611766565b979650505050505050565b60608315611775575081611020565b8251156117855782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117cf5781810151838201526020016117b7565b50505050905090810190601f1680156117fc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220a58a013861fba79a5004c247b940df4c3c0279ccd53657c7da68026a0f9a18c864736f6c634300060b0033'