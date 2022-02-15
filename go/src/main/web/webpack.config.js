const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const mode = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')



module.exports = () => {
    let publicPath = process.env.NODE_ENV === 'development' ? '/' : ''
    console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
    console.log('publicPath:', publicPath);
    return {
        mode,
        devtool: 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            // inline: true,
            port: 3000,
            hot: true,
            // publicPath: '/',
        },
        entry: {
            app: path.join(__dirname, './src/index.tsx'),
        },

        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },

        module: {
            rules: [
                // {
                //     test: /\.(js|jsx|ts|tsx)$/,
                //     enforce: 'pre',
                //     use: ['source-map-loader'],
                // },
                {
                    test: /\.(ts|tsx)$/,
                    use: ['babel-loader', 'ts-loader'],
                    // exclude: path.join(__dirname, "/node_modules/")
                },
                // {
                //     test: /\.(png|jpe?g|gif)$/,
                //     use: [
                //         {
                //             loader: 'file-loader',
                //             options: {
                //                 name: 'assets/[contenthash].[ext]'
                //             }
                //         }
                //     ]
                // },
                {
                    test: /\.(jpe?g|png|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192,
                                name: 'assets/images/[name].[hash:8].[ext]',
                            }
                        }
                    ]
                },
                {
                    test: /\.(scss|css)$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        }
                    }, 'css-loader', 'sass-loader']
                },

                // {
                //     test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                //     use: {
                //         loader: 'url-loader',
                //         options: {
                //             // Limit at 50k. Above that it emits separate files
                //             limit: 50000,
                //             // url-loader sets mimetype if it's passed.
                //             // Without this it derives it from the file extension
                //             mimetype: 'application/font-woff',
                //             // Output below fonts directory
                //             // name: './fonts/[name].[ext]',
                //             name: 'assets/[contenthash].[ext]'
                //         },
                //     },
                // },
                // {
                //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
                //     use: [
                //         {
                //             loader: 'file-loader',
                //             options: {
                //                 limit: 50000,
                //                 mimetype: 'application/font-woff',
                //                 name: 'assets/fonts/[name].[hash:8].[ext]',
                //             },
                //         },
                //     ],
                // },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
            ],
        },

        output: {
            path: path.join(__dirname, 'build/static'),
            filename: '[contenthash].bundle.js',
            publicPath: publicPath
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
            }),
            // new webpack.SourceMapDevToolPlugin({
            //     filename: "[file].map"
            // })
        ],
    }
};