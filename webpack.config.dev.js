var path = require('path');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        './client/entry.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "raw-loader"
        }, {
            test: /\.jpg$/,
            loader: "file-loader"
        }, {
            test: /\.png$/,
            loader: "url-loader?mimetype=image/png"
        }, {
            test: /\.svg/,
            loader: 'svg-url-loader'
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.css$/,
            include: path.join(__dirname, 'client'),
            loader: "style-loader!css-loader?minimize!postcss-loader"
        }, {
            test: /\.scss$/,
            include: path.join(__dirname, 'client'),
            loader: "style-loader!css-loader?minimize!postcss!sass?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
        }, {
            test: /\.js$/,
            include: path.join(__dirname, 'client'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new LiveReloadPlugin()
    ]
};
