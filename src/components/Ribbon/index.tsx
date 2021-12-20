/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:12:41
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-20 18:11:02
 */
import React from 'react';
import './index.less';

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
                src="https://github.blog/wp-content/uploads/2008/12/forkme_right_orange_ff7600.png?resize=149%2C149"
                className="attachment-full size-full"
                alt="Fork me on GitHub"
                data-recalc-dims="1"
            />
        </a>
    );
}
export default Ribbon;
