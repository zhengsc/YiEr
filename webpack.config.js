let path = require('path')
let webpack = require('webpack')
let HTMLPlugin = require('html-webpack-plugin')
let ExtractText = require('extract-text-webpack-plugin')

let isDev = (process.env.NODE_ENV === 'development')

let config = {
	target: 'web',
	mode: process.env.NODE_ENV,
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
	},

	module: {
		rules: [
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
		new webpack.DefinePlugin({
			"process.env" : {
				NODE_ENV: isDev ? '"development"' : '"production"'
			}
		}),
		new HTMLPlugin({
			template: path.join(__dirname, 'src/template/template-index.ejs')
		})
	]
}

if(isDev) {
	config.devtool = '#cheap-module-eval-source-map'

	config.module.rules.push(
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
		}
	)

	config.devServer = {
		port: 8010,
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
		},
		historyApiFallback: true
	}

	config.plugins.push(
		new webpack.HotModuleReplacementPlugin()
	)
} else {
	config.entry = {
		app: path.join(__dirname, 'src/index.js'),
		vendor: ['vue']
	}

	config.output.filename = '[name].[chunkhash:8].js'

	config.module.rules.push({
		test: /\.css$/,
        use: ExtractText.extract({
            fallback: 'style-loader',
            use: [
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
        })
	})

	config.plugins.push(
		new ExtractText('style.[contenthash:8].css'),
		// new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime'
        // })
	)
}

module.exports = config
