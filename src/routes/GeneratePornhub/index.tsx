/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-17 16:49:35
 */
import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import domToImage from 'dom-to-image';
import EditStyle from '@/components/EditStyle';
import { connect } from 'react-redux';
import './index.less';
import { InitState } from '@/typings/store';
import actions from '@/store/action';
import { HashRouterProps } from 'react-router-dom';

type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Props = PropsWithChildren<HashRouterProps & stateProps & DispatchProps>;
function GeneratePornhub(props: Props) {
    function download() {
        const node = document.getElementById('logo');
        domToImage.toPng(node).then(function (res: string) {
            downloadImage(res, 'logo.png');
        });
    }

    function downloadImage(imgSrc: string, name: string) {
        //下载图片地址和图片名
        let image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = function () {
            // let canvas = document.createElement('canvas');
            // canvas.width = image.width;
            // canvas.height = image.height;
            // let context = canvas.getContext('2d');
            // context.drawImage(image, 0, 0, image.width, image.height);
            // let url = canvas.toDataURL('image/png');
            // debugger;
            let a = document.createElement('a');
            let event = new MouseEvent('click');
            a.download = name || 'photo';
            a.href = imgSrc;
            a.dispatchEvent(event);
        };
        image.src = imgSrc;
        document.body.appendChild(image);
    }

    return (
        <div className="pornhub container">
            <div className="box">
                <div className="editarea" id="logo">
                    <span
                        className="prefix"
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        style={{
                            fontSize: props.fontSize + 'px',
                            color: props.prefixColor
                        }}
                    >
                        edit
                    </span>
                    <span
                        className="postfix"
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                        style={{
                            fontSize: props.fontSize + 'px',
                            color: props.suffixColor,
                            background: props.suffixBgColor
                        }}
                    >
                        me
                    </span>
                </div>
            </div>
            <EditStyle></EditStyle>
            <div className="download-share">
                <div className="download" onClick={download}>
                    Export
                </div>
            </div>
        </div>
    );
}
let mapStateToProps = (state: InitState) => state;
let mapActionToProps = actions; // 经过绑定后actions也会成为组件的属性对象

export default connect(mapStateToProps, mapActionToProps)(GeneratePornhub);
