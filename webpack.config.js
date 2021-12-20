/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-12-14 12:14:50
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-12-20 14:49:40
 */
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { mainModule } = require('process');
module.exports = {
    // production 默认会压缩
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        static: path.join(__dirname, 'static'),
        historyApiFallback: {
            index: './index.html' // 解决history路由刷新404问题，会重定向到index.html
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '~': path.resolve(__dirname, 'node_modules')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /.(j|t)sx?$/,
                loader: 'babel-loader', // ts-loader比较慢 所以用babel-loader
                options: {
                    presets: [
                        '@babel/preset-env', // ES6->ES5
                        '@babel/preset-react', // react->js
                        '@babel/preset-typescript' // ts->js
                    ]
                    // plugins: [
                    //     [
                    //         'import',
                    //         {
                    //             libraryName: 'antd',
                    //             style: 'css'
                    //         }
                    //     ]
                    // ]
                },
                // include: path.resolve('src'),
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 3
                        }
                    },
                    {
                        // 处理兼容
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['autoprefixer']
                            }
                        }
                    },
                    // {
                    //     loader: 'px2rem-loader',
                    //     options: {
                    //         remUnit: 75, // 1个rem 对应的px
                    //         remPrecesion: 8 // rem计算保留的精度
                    //     }
                    // },
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg)/,
                type: 'asset' // webpack5新增的配置
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ]
};
