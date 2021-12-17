/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:29:34
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 14:56:38
 */
import { createStore } from 'redux';
import reducer from './reducer';
import { InitState } from '@/typings/store';
const initState: InitState = {
    fontSize: 40,
    color: 10
};
const store = createStore(reducer, initState);
export { store };
