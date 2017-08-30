/*const path = require('path');

module.exports = {
    entry: './src/js/app/index.js',
    output: {
        path: path.resolve('dist/js'),
        filename: 'index.merge.js'
    }
};*/
const path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: "./src/js/app/index.js",
    output: {
        path: path.resolve('dist'),
        filename: 'index.merge.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ]
};

