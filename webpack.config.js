let path = require('path')
let webpack = require('webpack')
let HTMLPlugin = require('html-webpack-plugin')

let config = {
	target: 'web',
	mode: 'development',
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue/,
				loader: 'vue-loader'
			},
			{
				test: /\.(jpg|jpeg|png|gif)/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 2048
						}
					}
				]
			}
		]
	},

	plugins: [
		new HTMLPlugin({
			template: path.join(__dirname, 'src/template/template-index.ejs')
		}),
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		port: 8000,
		host: '0.0.0.0',
		hot: true,
		overlay: {
            errors: true
		},
		proxy: {
			'/s/': {
				target: 'http://dev.minganmed.com',
				changeOrigin: true
			},
			'/uploads/': {
				target: 'http://toc.minganonline.com',
				changeOrigin: true
			}
		}
	}
}
module.exports = config
