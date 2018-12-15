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
 * @file BatchRequest.js
 * @author Samuel Furter <samuel@ethereum.org>, Marek Kotewicz <marek@ethdev.com>
 * @date 2018
 */

import isFunction from 'underscore-es/isFunction';
import isObject from 'underscore-es/isObject';
import isArray from 'underscore-es/isArray';
import JsonRpcResponseValidator from '../validators/JsonRpcResponseValidator';

export default class BatchRequest {
    /**
     * @param {AbstractProviderAdapter} provider
     *
     * @constructor
     */
    constructor(provider) {
        this.provider = provider;
        this.methods = [];
    }

    /**
     * Should be called to add create new request to batch request
     *
     * @method add
     *
     * @param {AbstractMethod} method
     */
    add(method) {
        if (!isObject(method)) {
            throw new Error('Please provide a object of type AbstractMethod.');
        }

        this.methods.push(method);
    }

    /**
     * Should be called to execute batch request
     *
     * @method execute
     *
     * @param {AbstractWeb3Module} moduleInstance
     *
     * @returns Promise<{methods: AbstractMethod[], response: Object[]}|Error[]>
     */
    execute(moduleInstance) {
        return this.provider.sendBatch(this.methods, moduleInstance)
            .then(response => {
                let errors = [];
                this.methods.forEach((method, index) => {
                    if (!isArray(response)) {
                        method.callback(
                            new Error(`Response should be of type Array but is: ${typeof response}`),
                            null
                        );

                        errors.push(`Response should be of type Array but is: ${typeof response}`);

                        return;
                    }

                    const responseItem = response[index] || null;

                    if (isFunction(method.callback)) {
                        if (isObject(responseItem) && responseItem.error) {
                            method.callback(
                                new Error(`Returned node error: ${responseItem.error}`),
                                null
                            );

                            errors.push(`Returned node error: ${responseItem.error}`);

                            return;
                        }

                        if (!JsonRpcResponseValidator.validate(responseItem)) {
                            method.callback(
                                new Error(`Invalid JSON RPC response: ${JSON.stringify(responseItem)}`),
                                null
                            );

                            errors.push(`Invalid JSON RPC response: ${JSON.stringify(responseItem)}`);

                            return;
                        }

                        try {
                            const mappedResult = method.afterExecution(responseItem.result);

                            response[index] = mappedResult;
                            method.callback(false, mappedResult);
                        } catch (error) {
                            errors.push(error);
                            method.callback(error, null);
                        }
                    }
                });

                if (errors.length > 0) {
                    throw new Error(`BatchRequest error: ${JSON.stringify(errors)}`);
                }

                return {
                    methods: this.methods,
                    response
                };
            });
    }
}
