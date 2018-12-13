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

import * as net from 'net';
import {AbstractProviderAdapter, ProvidersModuleFactory, provider, BatchRequest} from 'web3-providers';
import {AbstractWeb3Module, Web3ModuleOptions, Providers} from 'web3-core';
import { Network } from 'web3-net';
import * as Utils from 'web3-utils';
export class Personal extends AbstractWeb3Module {
    constructor(
        provider: AbstractProviderAdapter | provider,
        providersModuleFactory: ProvidersModuleFactory,
        providers: Providers,
        net: Network,
        // dont have type yet
        // as this is in web3-core-helpers
        // can be sorted later once dependencies
        // are cleaned up
        formatters?: any,
        utils?: any,
        // dont have type yet
        // as this is in web3-core-method
        // can be sorted later once dependencies
        // are cleaned up
        MethodFactory?: any,
        options?: Web3ModuleOptions
    )

    setProvider(provider: AbstractProviderAdapter | provider, net?: net.Server): boolean;
    givenProvider(): AbstractProviderAdapter;
    BatchRequest(): BatchRequest;
    providers: Providers;
    extend(): any;
    newAccount(password: string): Promise<string>
}
