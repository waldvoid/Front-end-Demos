const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
	mode: 'production',
	entry: {
		main: './src/script/script.js',
		styles: './src/css/style.css',
	},

	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve(__dirname, './dist'),

	},
	devServer: {
		static: {
			directory: path.join(__dirname, './dist'),
		},
		watchFiles: ["src/*.html"],
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
				generator: {
					filename: 'css/[name].[contenthash][ext]',
				},
			},
			{
				test: /\.js$/,
				exclude: /node_module s/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'img/[name][ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: path.resolve(__dirname, 'dist', 'index.html'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: './src/assets/images', to: 'img' },
			],
		}),
	],
};
