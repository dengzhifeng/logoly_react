/*
 * @description: 编辑样式组件
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 16:49:16
 */
import { InitState } from '@/typings/store';
import React, { useState, PropsWithChildren, FormEvent } from 'react';
import './index.less';
import actions from '@/store/action';
import { connect } from 'react-redux';
import { HashRouterProps } from 'react-router-dom';

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
                Font Size:
                <input
                    type="range"
                    min="30"
                    max="200"
                    onInput={fontSizeChange}
                />
                props.fontSize
                {props.fontSize}
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
