/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.d.ts
 * @author Huan Zhang <huanzhang30@gmail.com>
 * @date 2018
 */

import {AbstractProviderAdapter, ProvidersModuleFactory, provider} from 'web3-providers';
import {Web3ModuleOptions} from 'web3-core';
import * as Utils from 'web3-utils'
export class Personal {
    constructor(
        provider: AbstractProviderAdapter | provider | string,
        providersModuleFactory: ProvidersModuleFactory,
        // not sure what the below object structure is
        providers:  {},
        // dont have type yet
        // as this is in web3-core-method
        // can be sorted later once dependencies
        // are cleaned up
        methodModuleFactory: any,
        // dont have type yet
        // as this is in web3-core-method
        // can be sorted later once dependencies
        // are cleaned up
        MethodFactory: any,
        // TODO: the Network type for the web3-net package
        // have not been defined yet.
        net: any,
        utils,
        // dont have type yet
        // as this is in web3-core-helpers
        // can be sorted later once dependencies
        // are cleaned up
        formatters: any,
        options: Web3ModuleOptions
    );
    defaultGasPrice: string;
    defaultGas: number;
    transactionBlockTimeout: number;
    transactionConfirmationBlocks: number;
    transactionPollingTimeout: number;
    defaultAccount: string | null;
    defaultBlock: string | number;
}
