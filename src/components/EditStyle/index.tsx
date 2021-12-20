/*
 * @description: 编辑样式组件
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-20 17:06:08
 */
import { InitState } from '@/typings/store';
import actions from '@/store/action';
import React, { useState, PropsWithChildren, FormEvent } from 'react';
import './index.less';
import { connect } from 'react-redux';
import { HashRouterProps } from 'react-router-dom';
import FontSelector from '../FontSelector';

type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Props = PropsWithChildren<HashRouterProps & stateProps & DispatchProps>;
function EditStyle(props: Props) {
    const fontSizeChange = (e: any) => {
        const value = e.target.value;
        console.log('fontSizeChange', e.target.value);
        props.changeFontSize(value);
        console.log('props', props);
    };

    const prefixColorChange = (event: any) => {
        props.changePrefixColor(event.target.value);
    };
    // 修改后缀颜色
    const suffixColorChange = (event: any) => {
        props.changeSuffixColor(event.target.value);
    };
    // 修改后缀背景色
    const suffixBgColorChange = (event: any) => {
        props.changeSuffixBgColor(event.target.value);
    };
    // 颜色反转
    const reverseChange = (event: any) => {
        props.changeReverseHighlight(event.target.checked);
    };
    // 背景颜色透明化
    const changeTransparentBg = (event: any) => {
        props.changeTransparentBg(event.target.checked);
    };
    return (
        <div className="EditStyle">
            <div>
                Prefix Text Color: &nbsp;
                <input
                    type="color"
                    value={props.prefixColor}
                    onInput={prefixColorChange}
                />
            </div>

            <div>
                Suffix Text Color: &nbsp;
                <input
                    type="color"
                    value={props.suffixColor}
                    onInput={suffixColorChange}
                />
            </div>

            <div>
                Suffix Background Color: &nbsp;
                <input
                    type="color"
                    value={props.suffixBgColor}
                    onInput={suffixBgColorChange}
                />
            </div>

            <div>
                Font Size: &nbsp;
                <input
                    type="range"
                    min="30"
                    max="200"
                    onInput={fontSizeChange}
                />
                {props.fontSize}px
            </div>

            <div>
                Reverse Highlight: &nbsp;
                <input type="checkbox" onInput={reverseChange} />
            </div>
            <div>
                Transparent Background: &nbsp;
                <input
                    type="checkbox"
                    value="transparentBg"
                    onInput={changeTransparentBg}
                />
            </div>

            <div>
                Font: &nbsp;
                <FontSelector></FontSelector>
            </div>
        </div>
    );
}
// state放入到组件
let mapStateToProps = (state: InitState) => {
    return state;
};
let mapActionToProps = actions; // 经过绑定后actions也会成为组件的属性对象

export default connect(mapStateToProps, mapActionToProps)(EditStyle);
