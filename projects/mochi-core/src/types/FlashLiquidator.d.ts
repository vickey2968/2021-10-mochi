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
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import { TypedEventFilter, TypedEvent, TypedListener } from './commons';

interface FlashLiquidatorInterface extends ethers.utils.Interface {
  functions: {
    'CALLBACK_SUCCESS()': FunctionFragment;
    'DURATION()': FunctionFragment;
    'auctionId(address,uint256)': FunctionFragment;
    'auctions(uint256)': FunctionFragment;
    'buy(uint256,bytes)': FunctionFragment;
    'engine()': FunctionFragment;
    'priceOfAuction(uint256)': FunctionFragment;
    'triggerLiquidation(address,uint256,bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'CALLBACK_SUCCESS',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'DURATION', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'auctionId',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'auctions',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'buy',
    values: [BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: 'engine', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'priceOfAuction',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'triggerLiquidation',
    values: [string, BigNumberish, BytesLike],
  ): string;

  decodeFunctionResult(
    functionFragment: 'CALLBACK_SUCCESS',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'DURATION', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'auctionId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'auctions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'buy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'engine', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'priceOfAuction',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'triggerLiquidation',
    data: BytesLike,
  ): Result;

  events: {
    'Liquidated(address,uint256,uint256)': EventFragment;
    'Triggered(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Liquidated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Triggered'): EventFragment;
}

export class FlashLiquidator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: FlashLiquidatorInterface;

  functions: {
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<[string]>;

    DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    auctionId(
      asset: string,
      nftId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, BigNumber] & {
        keeper: string;
        liquidator: string;
        previousOwner: string;
        vault: string;
        nftId: BigNumber;
        startedAt: BigNumber;
        startPrice: BigNumber;
      }
    >;

    buy(
      _auctionId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    engine(overrides?: CallOverrides): Promise<[string]>;

    priceOfAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    triggerLiquidation(
      _asset: string,
      _nftId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<string>;

  DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  auctionId(
    asset: string,
    nftId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  auctions(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [string, string, string, string, BigNumber, BigNumber, BigNumber] & {
      keeper: string;
      liquidator: string;
      previousOwner: string;
      vault: string;
      nftId: BigNumber;
      startedAt: BigNumber;
      startPrice: BigNumber;
    }
  >;

  buy(
    _auctionId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  engine(overrides?: CallOverrides): Promise<string>;

  priceOfAuction(
    _auctionId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  triggerLiquidation(
    _asset: string,
    _nftId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<string>;

    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    auctionId(
      asset: string,
      nftId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [string, string, string, string, BigNumber, BigNumber, BigNumber] & {
        keeper: string;
        liquidator: string;
        previousOwner: string;
        vault: string;
        nftId: BigNumber;
        startedAt: BigNumber;
        startPrice: BigNumber;
      }
    >;

    buy(
      _auctionId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    engine(overrides?: CallOverrides): Promise<string>;

    priceOfAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    triggerLiquidation(
      _asset: string,
      _nftId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    Liquidated(
      _vault?: null,
      _nftId?: null,
      _amount?: null,
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _vault: string; _nftId: BigNumber; _amount: BigNumber }
    >;

    Triggered(
      _vault?: null,
      _nftId?: null,
      _amount?: null,
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { _vault: string; _nftId: BigNumber; _amount: BigNumber }
    >;
  };

  estimateGas: {
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<BigNumber>;

    DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    auctionId(
      asset: string,
      nftId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    auctions(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    buy(
      _auctionId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    engine(overrides?: CallOverrides): Promise<BigNumber>;

    priceOfAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    triggerLiquidation(
      _asset: string,
      _nftId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CALLBACK_SUCCESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    auctionId(
      asset: string,
      nftId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    auctions(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    buy(
      _auctionId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    engine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOfAuction(
      _auctionId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    triggerLiquidation(
      _asset: string,
      _nftId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
