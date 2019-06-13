const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        vendor: "./vendor.js",
        app: "./main.js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        // This plugin will generate an html5 file for you
        // that includes all your webpack bundles in the body
        // using script tags.
        new HtmlWebpackPlugin({
            template: "./index.html", // Input FileName
            filename: "./index.html" // Output FileName
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};