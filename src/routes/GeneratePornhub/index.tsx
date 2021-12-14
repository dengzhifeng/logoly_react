/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-14 18:08:39
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

function GeneratePornhub() {
    return (
        <div className="pornhub container">
            <div className="box">
                <div className="editarea">
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
        </div>
    );
}
export default GeneratePornhub;
