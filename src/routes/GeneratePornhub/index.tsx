/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-15 07:52:32
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

function GeneratePornhub() {
    function download() {
        console.log('download');
        const node = document.getElementById('logo')
        //   domtoimage.toPng(node).then(function(res) {
        //     console.log(res)
        //     that.downloadImage(res, 'logo.png')
        //   })
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
                <div
                    className="download"
                    onClick={download}
                >Export</div>
            </div>
        </div>
    );
}
export default GeneratePornhub;
