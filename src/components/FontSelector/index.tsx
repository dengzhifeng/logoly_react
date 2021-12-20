/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 16:29:23
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-20 17:05:47
 */
import React, { ChangeEvent, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { InitState } from '@/typings/store';
import actions from '@/store/action';
import { connect } from 'react-redux';
import { HashRouterProps } from 'react-router-dom';
type stateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
type Props = PropsWithChildren<HashRouterProps & stateProps & DispatchProps>;
function FontSelector(props: Props) {
    const fontList = [
        'Roboto',
        'Zilla Slab Highlight',
        'Open Sans',
        'Spectral',
        'Slabo 27px',
        'Lato',
        'Roboto Condensed',
        'Oswald',
        'Source Sans Pro',
        'Raleway',
        'Zilla Slab',
        'Montserrat',
        'PT Sans',
        'Roboto Slab',
        'Merriweather',
        'Saira Condensed',
        'Saira',
        'Open Sans Condensed',
        'Saira Semi Condensed',
        'Saira Extra Condensed',
        'Julee',
        'Archivo',
        'Ubuntu',
        'Lora',
        'Manuale',
        'Asap Condensed',
        'Faustina',
        'Cairo',
        'Playfair Display',
        'Droid',
        'Noto Sans',
        'PT',
        'Droid Sans',
        'Arimo',
        'Poppins',
        'Sedgwick Ave Display',
        'Titillium Web',
        'Muli',
        'Sedgwick Ave',
        'Indie Flower',
        'Mada',
        'PT Sans Narrow',
        'Noto',
        'Bitter',
        'Dosis',
        'Josefin Sans',
        'Inconsolata',
        'Bowlby One SC',
        'Oxygen',
        'Arvo',
        'Hind',
        'Cabin',
        'Fjalla One',
        'Anton',
        'Cairo',
        'Playfair Display',
        'Droid ',
        'Noto Sans',
        'PT',
        'Droid Sans',
        'Arimo',
        'Poppins',
        'Sedgwick Ave Display',
        'Titillium Web',
        'Muli',
        'Sedgwick Ave',
        'Indie Flower',
        'Mada',
        'PT Sans Narrow',
        'Noto',
        'Bitter',
        'Dosis',
        'Josefin Sans',
        'Inconsolata',
        'Bowlby One SC',
        'Oxygen',
        'Arvo',
        'Hind',
        'Cabin',
        'Fjalla One',
        'Anton',
        'Acme',
        'Archivo Narrow',
        'Mukta Vaani',
        'Play',
        'Cuprum',
        'Maven Pro',
        'EB Garamond',
        'Passion One',
        'Ropa Sans',
        'Francois One',
        'Archivo Black',
        'Pathway Gothic One',
        'Exo',
        'Vollkorn',
        'Libre Franklin',
        'Crete Round',
        'Alegreya',
        'PT Sans Caption',
        'Alegreya Sans',
        'Source Code Pro'
    ];

    const changeFontFamily = (event: ChangeEvent<HTMLSelectElement>) => {
        props.changeFontFamily(event.target.value);
    };
    return (
        <select className="FontSelector" onChange={changeFontFamily}>
            {fontList.map((item, index) => {
                return (
                    <option style={{ fontFamily: item }} key={index}>
                        {item}
                    </option>
                );
            })}
        </select>
    );
}
// state放入到组件
let mapStateToProps = (state: InitState) => {
    return state;
};
let mapActionToProps = actions; // 经过绑定后actions也会成为组件的属性对象

export default connect(mapStateToProps, mapActionToProps)(FontSelector);
