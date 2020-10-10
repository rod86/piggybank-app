const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const path = require('path');
const isProduction = (process.env.NODE_ENV === "production");
const port = process.env.PORT || 3000;

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        port: port,
        contentBase: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsConfigPathsPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.scss$/,
                loader: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: (url, resourcePath, context) => {
                                const relativePath = path.relative(context, resourcePath);
                                return relativePath.replace('src/assets/', '');
                            }
                        }
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: 'styles.css',
        }),
        new CompressionPlugin({
            deleteOriginalAssets: isProduction
        }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
};
