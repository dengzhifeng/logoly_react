/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:29:23
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-14 17:45:10
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

function Description() {
    return (
        <div className="about container">
            <h3>Logoly.pro</h3>
            <p>
                This project is an open source project, you can find it on{' '}
                <a
                    href="https://github.com/dengzhifeng/logoly_react"
                    target="_blank"
                >
                    GitHub
                </a>
            </p>
        </div>
    );
}
export default Description;
