/*
 * @description: 
 * @author: steve.deng
 * @Date: 2021-12-20 21:47:17
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-20 22:21:22
 */

const debounce = function (fn: Function, time: number) {
    let timeout: any;
    return (params: any) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(params);
        }, time);
    }
}

export {
    debounce
};