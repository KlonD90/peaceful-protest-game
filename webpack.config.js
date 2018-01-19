const path = require('path');
const webpack = require('webpack');

//process.env.NO_UGLIFY
process.env["NO_UGLIFY"] = true;

console.log(`process.env.NODE_ENV is ${process.env.NODE_ENV}`);
plugins = process.env.NO_UGLIFY ? [] : [new webpack.optimize.UglifyJsPlugin()]
plugins.push(
  new webpack.EnvironmentPlugin(['NODE_ENV'])
);

plugins.push(
    new webpack.SourceMapDevToolPlugin({filename: '[name].js.map'})
);

module.exports = {
    entry: {
        polyfill: ['core-js/es6', 'core-js/es7'],
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: '[name].js',
    },
    devtool: 'source-map',
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                          'flow',
                          [
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
                test: /\.(jpg|png|mp3|jpeg|gif)$/,
                loader: 'file-loader',
                query: process.env.NODE_ENV === 'production' ? {
                  outputPath: 'assets/',
                  publicPath: '/protest/'
                } : {
                  outputPath: 'assets/'
                }
            },
            {
              test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    plugins: plugins
};