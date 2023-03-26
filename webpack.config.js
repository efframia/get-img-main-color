const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: {
        "getMainColor": './src/main.js',
        "getMainColor.min": './src/main.js',
    },
    output: {
        filename: "[name].js",
        library: "getMainColor",
        libraryTarget: "umd",
        globalObject: "this",
    },
    mode: "none",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            test: /\.min.js/
        })]
    },
    externals: "canvas",
}