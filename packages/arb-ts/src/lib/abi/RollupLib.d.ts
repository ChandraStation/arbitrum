/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface RollupLibInterface extends ethers.utils.Interface {
  functions: {
    'c_0xf5a952b0(bytes32)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'c_0xf5a952b0',
    values: [BytesLike]
  ): string

  decodeFunctionResult(
    functionFragment: 'c_0xf5a952b0',
    data: BytesLike
  ): Result

  events: {}
}

export class RollupLib extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: RollupLibInterface

  functions: {
    c_0xf5a952b0(
      c__0xf5a952b0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>

    'c_0xf5a952b0(bytes32)'(
      c__0xf5a952b0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>
  }

  c_0xf5a952b0(
    c__0xf5a952b0: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>

  'c_0xf5a952b0(bytes32)'(
    c__0xf5a952b0: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>

  callStatic: {
    c_0xf5a952b0(
      c__0xf5a952b0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    'c_0xf5a952b0(bytes32)'(
      c__0xf5a952b0: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    c_0xf5a952b0(
      c__0xf5a952b0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'c_0xf5a952b0(bytes32)'(
      c__0xf5a952b0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    c_0xf5a952b0(
      c__0xf5a952b0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'c_0xf5a952b0(bytes32)'(
      c__0xf5a952b0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}