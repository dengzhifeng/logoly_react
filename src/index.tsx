/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 15:13:33
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-20 18:10:16
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './style/common.less';
import './index.less';
import Logo from '@/components/Logo';
import Description from '@/components/Description';
import GeneratePornhub from '@/routes/GeneratePornhub';
import GeneratePornhubVertical from '@/routes/GeneratePornhubVertical';
import About from '@/routes/About';
import { store } from '@/store';
import { Provider } from 'react-redux';
import Ribbon from './components/Ribbon';
let IndexDiv = (
    <Provider store={store}>
        <div className="main">
            <Logo></Logo>
            <Description></Description>
            <Ribbon></Ribbon>
            <Router>
                <div id="nav">
                    <div className="menu">
                        <Link to="/about">
                            <span className="postfix">About</span>
                        </Link>
                        <Link className="pb" to="/">
                            <span className="prefix">Porn</span>
                            <span className="postfix">hub</span>
                        </Link>
                        <Link className="vph" to="/vertical-ph">
                            <p className="prefix">Porn</p>
                            <p className="postfix">hub</p>
                        </Link>
                    </div>
                </div>
                {/* 路由 */}
                <Routes>
                    <Route path="/" element={<GeneratePornhub />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route
                        path="/vertical-ph"
                        element={<GeneratePornhubVertical />}
                    ></Route>
                </Routes>
            </Router>
        </div>
    </Provider>
);
ReactDOM.render(IndexDiv, document.getElementById('root'));
