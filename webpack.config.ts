import * as path from "path";
import * as webpack from "webpack";
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(svg|png|gif|jpg)$/,
                exclude: /fonts/,
                loader: 'file-loader'
            },
            {
                test: /\.(ttf|eot|woff|svg|woff2)$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        plugins: [
            new TsconfigPathsPlugin()
        ]
    },
    devServer: {
        port: 3008,
        open: true,
        historyApiFallback: true,
        hot: true,
    },
}