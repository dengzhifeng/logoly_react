/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:29:34
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 16:56:43
 */
import { createStore } from 'redux';
import reducer from './reducer';
import { InitState } from '@/typings/store';
const initState: InitState = {
    fontSize: 60,
    prefixColor: '#ffffff',
    suffixColor: '#000000',
    suffixBgColor: '#ff9900'
};
const store = createStore(reducer, initState);
export { store };
