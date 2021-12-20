/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:29:34
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-20 17:42:24
 */
import { createStore } from 'redux';
import reducer from './reducer';
import { InitState } from '@/typings/store';
const initState: InitState = {
    fontSize: 60,
    prefixColor: '#ffffff',
    suffixColor: '#000000',
    suffixBgColor: '#ff9900',
    reverseHighlight: false,
    transparentBg: false,
    fontFamily: 'sans-serif',
    prefix: 'edit',
    suffix: 'me'
};
const store = createStore(reducer, initState);
export { store };
