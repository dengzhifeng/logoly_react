/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-16 18:15:59
 */
import React from 'react';
import ReactDOM from 'react-dom';
import domToImage from 'dom-to-image';
import './index.less';
function GeneratePornhub() {
    function download() {
        console.log('download');
        const node = document.getElementById('logo');
        domToImage.toPng(node).then(function (res: string) {
            console.log(res);
            downloadImage(res, 'logo.png');
        });
    }

    function downloadImage(imgsrc: string, name: string) {
        //下载图片地址和图片名
        let image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = function () {
            let canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            let context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, image.width, image.height);
            let url = canvas.toDataURL('image/png');
            let a = document.createElement('a');
            let event = new MouseEvent('click');
            a.download = name || 'photo';
            a.href = url;
            a.dispatchEvent(event);
        };
        image.src = imgsrc;
    }

    return (
        <div className="pornhub container">
            <div className="box">
                <div className="editarea" id="logo">
                    <span
                        className="prefix"
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                    >
                        ss
                    </span>
                    <span
                        className="postfix"
                        contentEditable={true}
                        suppressContentEditableWarning={true}
                    >
                        xx
                    </span>
                </div>
            </div>
            <div className="download-share">
                <div className="download" onClick={download}>
                    Export
                </div>
            </div>
        </div>
    );
}
export default GeneratePornhub;
