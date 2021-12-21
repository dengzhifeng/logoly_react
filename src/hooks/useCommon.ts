/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-20 17:51:28
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-21 10:29:30
 */
import React, { FormEvent, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import domToImage from 'dom-to-image';
import EditStyle from '@/components/EditStyle';
import { connect } from 'react-redux';
import { InitState } from '@/typings/store';
import actions from '@/store/action';
import { HashRouterProps } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { debounce } from '@/utils/index';
// type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Props = PropsWithChildren<HashRouterProps & DispatchProps>;

function useCommon(props: Props) {
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
        // document.body.appendChild(image);
    }
    let debounceChangePrefix = debounce(props.changePrefix, 500);
    const onInputPrefix = (event: any) => {
        // props.changePrefix(event.target.textContent);
        debounceChangePrefix(event.target.textContent);
    };
    let debounceChangeSuffix = debounce(props.changeSuffix, 500);
    const onInputSuffix = (event: any) => {
        debounceChangeSuffix(event.target.textContent);
    };
    return {
        download,
        downloadImage,
        onInputPrefix,
        onInputSuffix
    };
}

// let mapStateToProps = (state: InitState) => state;
// let mapActionToProps = actions; // 经过绑定后actions也会成为组件的属性对象

export default useCommon;
