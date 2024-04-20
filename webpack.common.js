const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appDirectory = fs.realpathSync(process.cwd());
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(__dirname, '/game/index.ts'),
    },
    output: {
        filename: 'js/bundleName.js', //name for the js file that is created/compiled in memory
        clean: true,
        publicPath: 'auto',
    },

    stats: 'errors-only',
    resolve: {
        extensions: ['.ts', '.js', '.json', '.png', '.glb', '.jpg', '.mp3', '.svg', '.css', '.gif', '.mp4', 'env'],
        alias: {
            helper: path.resolve(__dirname, './game/helper'),
            assets: path.resolve(__dirname, './game/assets'),
            class: path.resolve(__dirname, './game/class'),
            game: path.resolve(__dirname, './game'),
        },
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        static: path.resolve(appDirectory, 'public'), //tells webpack to serve from the public folder
        hot: true,
        devMiddleware: {
            publicPath: '/',
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|svg|glb|mp3|env)$/,
                loader: 'file-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(appDirectory, 'public/index.html'),
        }),
        // new CopyPlugin({ patterns: [{ from: './game/assets', to: './public/assets' }] }),
    ],
    mode: 'development',
};
