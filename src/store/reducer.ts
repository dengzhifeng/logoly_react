/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:30:05
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-21 12:00:21
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
        case actionTypes.SET_REVERSE_HIGHLIGHT:
            return {
                ...state,
                reverseHighlight: action.payload
            };
            break;
        case actionTypes.SET_TRANSPARENT_BG:
            return {
                ...state,
                transparentBg: action.payload
            };
            break;
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.payload
            };
            break;
        case actionTypes.SET_PREFIX:
            return {
                ...state,
                prefix: action.payload
            };
            break;
        case actionTypes.SET_SUFFIX:
            return {
                ...state,
                suffix: action.payload
            };
            break;
        default:
            break;
    }
    return state;
}
