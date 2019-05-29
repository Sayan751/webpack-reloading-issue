const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseUrl = "/";

/** @type {() => import("webpack").Configuration} */
module.exports = () => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.ejs",
            metadata: { baseUrl }
        })
    ]
})