import * as path from 'path';
import * as webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			favicon: './src/assets/images/favicon.ico'
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
				test: /\.(png|jp(e*)g|gif)$/,
				type: "asset/images",
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', 'jsx'],
		plugins: [
			new TsconfigPathsPlugin()
		]
	},
	devServer: {
		port: 3008,
		open: true,
		historyApiFallback: true,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
		}
	},
};
