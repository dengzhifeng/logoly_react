/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-21 10:28:46
 */
import React, { PropsWithChildren, useState } from 'react';
import ReactDOM from 'react-dom';
import domToImage from 'dom-to-image';
import EditStyle from '@/components/EditStyle';
import { connect } from 'react-redux';
import './index.less';
import { InitState } from '@/typings/store';
import actions from '@/store/action';
import { HashRouterProps } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import useCommon from '@/hooks/useCommon';

type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Props = PropsWithChildren<HashRouterProps & stateProps & DispatchProps>;
function GeneratePornhubVertical(props: Props) {
    const { download, onInputPrefix, onInputSuffix } = useCommon(props);
    const [prefix, setPrefix] = useState<string>(props.prefix);
    const [suffix, setSuffix] = useState<string>(props.suffix);
    return (
        <div className="pornhub container">
            <div
                className="box"
                data-tip="Edit the text to create your own logo"
                data-effect="solid"
            >
                <div
                    className="editarea"
                    id="logo"
                    style={{
                        background: props.transparentBg
                            ? 'transparent'
                            : '#000000',
                        fontFamily: props.fontFamily
                    }}
                >
                    <p
                        className="prefix"
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        style={{
                            fontSize: props.fontSize + 'px',
                            color: props.reverseHighlight
                                ? props.suffixColor
                                : props.prefixColor,
                            background: props.reverseHighlight
                                ? props.suffixBgColor
                                : 'none'
                        }}
                        onInput={onInputPrefix}
                    >
                        {prefix}
                    </p>
                    <p
                        className="postfix"
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        style={{
                            fontSize: props.fontSize + 'px',
                            color: !props.reverseHighlight
                                ? props.suffixColor
                                : props.prefixColor,
                            background: !props.reverseHighlight
                                ? props.suffixBgColor
                                : 'none'
                        }}
                        onInput={onInputSuffix}
                    >
                        {suffix}
                    </p>
                </div>
            </div>
            <EditStyle></EditStyle>
            <div className="download-share">
                <div
                    className="download"
                    data-tip="Export your own logo"
                    data-effect="solid"
                    onClick={download}
                >
                    Export
                </div>
            </div>
            <ReactTooltip />
        </div>
    );
}
let mapStateToProps = (state: InitState) => state;
let mapActionToProps = actions; // ???????????????actions?????????????????????????????????

export default connect(
    mapStateToProps,
    mapActionToProps
)(GeneratePornhubVertical);
