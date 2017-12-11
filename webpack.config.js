const path = require('path');
const webpack = require('webpack');

plugins = process.env.NO_UGLIFY ? [] : [new webpack.optimize.UglifyJsPlugin()]

module.exports = {
    entry: {
        polyfill: ['core-js/es6', 'core-js/es7'],
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [[
                            'env',
                            {
                                targets: {
                                    browsers: ['last 2 versions']
                                },
                                modules: false
                            }
                        ]],
                        plugins: [
                            'transform-class-properties',
                            'transform-object-rest-spread'
                        ]
                    }
                }
            },
            {
                test: /\.(jpg|png|mp3)$/,
                loader: 'file-loader',
                query: {
                    outputPath: 'assets/'
                }
            }
        ]
    },
    plugins: plugins
};
