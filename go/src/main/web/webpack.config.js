const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode,
    devServer: {
        historyApiFallback: true,
        // inline: true,
        port: 3000,
        hot: true,
        // publicPath: '/',
    },
    entry: {
        app: path.join(__dirname,  './src/index.tsx'),
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['babel-loader', 'ts-loader'],
                // exclude: path.join(__dirname, "/node_modules/")
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[contenthash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '/'
                    }
                }, 'css-loader', 'sass-loader']
            },
            // {
            //     // write files under 10k to inline or copy files over 10k
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 fallback: 'file-loader',
            //                 name: '[name].[ext]',
            //                 publicPath: '/'
            //             },
            //         },
            //     ],
            // }
            // {
            //     test: /\.(woff|woff2|ttf|otf)$/,
            //     loader: 'file-loader',
            //     // include: [/fonts/],
            //
            //     options: {
            //         name: '[hash].[ext]',
            //         // outputPath: 'css/',
            //         // publicPath: url => '../css/' + url
            //         publicPath: '/'
            //     }
            // }
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        // Limit at 50k. Above that it emits separate files
                        limit: 50000,
                        // url-loader sets mimetype if it's passed.
                        // Without this it derives it from the file extension
                        mimetype: 'application/font-woff',
                        // Output below fonts directory
                        name: './fonts/[name].[ext]',
                    },
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, '/build/static'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },

    plugins: [
        // new webpack.ProvidePlugin({
        //   React: 'react',
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['build']
        })
    ],
};