/*module.exports = {
    entry: './src/app.js',
    output: {
        path: 'F:/repository/demos/test/webpack/demo0/bin',
        filename: 'app.bundle.js'
    }
};*/

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'my-first-webpack.bundle.js'
    }
}