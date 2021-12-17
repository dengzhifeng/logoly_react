/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:30:05
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 16:50:17
 */
import { InitState } from '@/typings/store';
import { AnyAction } from 'redux';
import * as actionTypes from './action-types';
export default function (state: InitState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.SET_FONT_SIZE:
            return {
                ...state,
                fontSize: action.payload
            };
            console.log('state.fontSize ', state.fontSize);
            break;
        case actionTypes.SET_PREFIX_COLOR:
            return {
                ...state,
                prefixColor: action.payload
            };
            break;
        case actionTypes.SET_SUFFIX_COLOR:
            return {
                ...state,
                suffixColor: action.payload
            };
        case actionTypes.SET_SUFFIX_BG_COLOR:
            return {
                ...state,
                suffixBgColor: action.payload
            };
            break;
        default:
            break;
    }
    return state;
}
