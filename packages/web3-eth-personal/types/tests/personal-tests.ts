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
 * @file personal-tests.ts
 * @author Huan Zhang <huanzhang30@gmail.com>
 * @date 2018
 */

import * as net from 'net';
import { Personal } from 'web3-eth-personal';
import {ProvidersModuleFactory, HttpProvider, IpcProvider, WebsocketProvider} from 'web3-providers';

const options = {
    timeout: 20000,
    headers: [
        {
            name: 'Access-Control-Allow-Origin', value: '*'
        }
    ]
};

const providersModuleFactory = new ProvidersModuleFactory();
const httpProvider = new HttpProvider('http://localhost:8545', options);
const ipcProvider = new IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', new net.Server());
const websocketProvider = new WebsocketProvider('ws://localhost:8546');
const PersonalClass = new Personal(
    httpProvider,
    providersModuleFactory,
    {
        HttpProvider: httpProvider,
        WebsocketProvider: websocketProvider,
        IpcProvider: ipcProvider
    },
)

// $ExpectType string
PersonalClass.defaultGasPrice;
