const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	mode: 'production',
	entry: {
		main: './src/index.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, './dist'),
		},
		port: 3000,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module s/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'dist/images/',
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader' ],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: path.resolve(__dirname, 'dist', 'index.html'),
			publicPath: './',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/images', to: 'images' },
				{ from: 'src/css', to: 'css' },
			]
		})
	],
};
