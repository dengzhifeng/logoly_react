/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:30:12
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 16:48:28
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
    changePrefixColor(color: String): AnyAction {
        return {
            type: actionTypes.SET_PREFIX_COLOR,
            payload: color
        };
    },
    changeSuffixColor(color: String): AnyAction {
        return {
            type: actionTypes.SET_SUFFIX_COLOR,
            payload: color
        };
    },
    changeSuffixBgColor(color: String): AnyAction {
        return {
            type: actionTypes.SET_SUFFIX_BG_COLOR,
            payload: color
        };
    }
};
