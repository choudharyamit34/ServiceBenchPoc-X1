var webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require('path');
const rootDir = path.resolve(__dirname, "..");
module.exports = webpackMerge(commonConfig, {
    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: './',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});