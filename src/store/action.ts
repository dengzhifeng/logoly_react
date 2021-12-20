/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-17 11:30:12
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-20 17:43:42
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
    },
    changeReverseHighlight(reverseHighlight: Boolean): AnyAction {
        return {
            type: actionTypes.SET_REVERSE_HIGHLIGHT,
            payload: reverseHighlight
        };
    },
    changeTransparentBg(reverseHighlight: Boolean): AnyAction {
        return {
            type: actionTypes.SET_TRANSPARENT_BG,
            payload: reverseHighlight
        };
    },
    changeFontFamily(fontFamily: string): AnyAction {
        return {
            type: actionTypes.SET_FONT_FAMILY,
            payload: fontFamily
        };
    },
    changePrefix(prefix: string): AnyAction {
        return {
            type: actionTypes.SET_PREFIX,
            payload: prefix
        };
    },
    changeSuffix(prefix: string): AnyAction {
        return {
            type: actionTypes.SET_SUFFIX,
            payload: prefix
        };
    }
};
