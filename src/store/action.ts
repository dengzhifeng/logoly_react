/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:30:12
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 14:57:22
 */
import { AnyAction } from 'redux';
import * as actionTypes from './action-types';

export default {
    // 修改字体大小
    changeFontSize(fontSize: number): AnyAction {
        return {
            type: actionTypes.SET_FONT_SIZE,
            payload: fontSize
        };
    },
    changeColor(color: number): AnyAction {
        return {
            type: actionTypes.SET_COLOR,
            payload: color
        };
    }
};
