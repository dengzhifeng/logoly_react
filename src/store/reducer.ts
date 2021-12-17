/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:30:05
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 15:52:53
 */
import { InitState } from '@/typings/store';
import { AnyAction } from 'redux';
import * as actionTypes from './action-types';
const initState: InitState = {
    fontSize: 40,
    color: 10
};
export default function (state: InitState = initState, action: AnyAction) {
    switch (action.type) {
        case actionTypes.SET_FONT_SIZE:
            return {
                ...state,
                fontSize: action.payload
            };
            console.log('state.fontSize ', state.fontSize);
            break;
        case actionTypes.SET_COLOR:
            return {
                ...state,
                color: action.payload
            };
            console.log('state.color ', state.color);
            break;
        default:
            break;
    }
    return state;
}
