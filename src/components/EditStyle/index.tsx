/*
 * @description: 编辑样式组件
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 15:50:13
 */
import { InitState } from '@/typings/store';
import React, { useState, PropsWithChildren } from 'react';
import './index.less';
import actions from '@/store/action';
import { connect } from 'react-redux';
import { HashRouterProps } from 'react-router-dom';

type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Props = PropsWithChildren<HashRouterProps & stateProps & DispatchProps>;
function EditStyle(props: Props) {
    const [fontSize, setFontSize] = useState<number>(40);

    const fontSizeChange = (e: any) => {
        const value = e.target.value;
        console.log('fontSizeChange', e.target.value);
        // setFontSize(value);
        props.changeFontSize(value);
        props.changeColor(1000);
        console.log('props', props);
    };
    return (
        <div className="EditStyle">
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
                {/* {fontSize}px */}
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
