const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './app/index.js',
	module: {
		rules: [
			//{ test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
			{ test: /\.(js)$/, use: 'babel-loader' }
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Custom template',
			template: './app/index.html'
		}),
		new MiniCssExtractPlugin()
	],
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};