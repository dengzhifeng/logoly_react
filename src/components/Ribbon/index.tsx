/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-21 11:39:23
 */
import React from 'react';
import './index.less';
import logo from '@/assets/forkme_right_orange.png';
function Ribbon() {
    return (
        <a
            className="Ribbon"
            href="https://github.com/dengzhifeng/logoly_react"
            target="_blank"
        >
            <img
                width="149"
                height="149"
                src={logo}
                className="attachment-full size-full"
                alt="Fork me on GitHub"
                data-recalc-dims="1"
            />
        </a>
    );
}
export default Ribbon;
