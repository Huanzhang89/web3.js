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

// TypeScript Version: 2.2
import {AbstractProviderAdapter, ProvidersModuleFactory, provider} from 'web3-providers';
import {AbstractWeb3Module, Web3ModuleOptions, Providers} from 'web3-core';

import * as Utils from 'web3-utils'
export class Personal extends AbstractWeb3Module {
    constructor(
        provider: AbstractProviderAdapter | provider,
        providersModuleFactory: ProvidersModuleFactory,
        providers: Providers,
        // dont have type yet
        // as this is in web3-core-method
        // can be sorted later once dependencies
        // are cleaned up
        net?: any,
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

    setProvider(): boolean;
    providers(): Providers;
    givenProvider(): any;
    BatchRequest(): any;
    extend(): any;
    newAccount(password: string): Promise<string>
}
