let path = require('path')
let webpack = require('webpack')
// 生成html文件
let HTMLPlugin = require('html-webpack-plugin')
// 将css单独打包成一个文件
let ExtractText = require('extract-text-webpack-plugin')
// 压缩css
let OptimizeCssAssest = require('optimize-css-assets-webpack-plugin')
// 根据控制台的命令参数判断环境
let isDev = (process.env.NODE_ENV === 'development')

let config = {
	target: 'web',
	/* mode 
	 * webpack 4 新增配置
	 * {String} production | development
	 * production模式：
	 * 		提供所有可能的优化，如代码压缩，作用域提升
	 * 		不支持watching
	 * 		process.env.NODE_ENV 的值不需要再定义，默认是 production
	 * development模式：
	 * 		增量构建速度
	 * 		支持注释和提示，并且支持 eval 下的 source map
	 * 		process.env.NODE_ENV 的值不需要再定义，默认是 development
	 */
	mode: process.env.NODE_ENV,
	entry: path.join(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.[hash:8].js',
		path: path.join(__dirname, 'dist'),
		// 设置publicPath为 '/' 防止加载资源路径失败
		publicPath: '/'
	},

	module: {
		// 资源文件的解析规则
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
				test: /\.(jpg|jpeg|png|gif)$/,
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
		// new webpack.DefinePlugin({
		// 	"process.env" : {
		// 		NODE_ENV: isDev ? '"development"' : '"production"'
		// 	}
		// }),
		// 根据ejs模版创建index.html文件
		new HTMLPlugin({
			template: path.join(__dirname, 'src/template/template-index.ejs')
		})
	]
}

if(isDev) {
	// sourceMap生成模式
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
		// 在浏览器上显示编译的error信息
		overlay: {
            errors: true 
		},
		// 设置代理路径
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
		// 依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
		historyApiFallback: true
	}

	config.plugins.push(
		// 热更换修改的代码，不用刷新页面
		new webpack.HotModuleReplacementPlugin()
	)
} else {
	config.entry = {
		app: path.join(__dirname, 'src/index.js'),
		vendor: ['vue']
	}

	config.output.publicPath = '/dist/'

	// 根据文件内容生成hash
	config.output.filename = '[name].[chunkhash:8].js'

	config.module.rules.push({
		test: /\.css$/,
		// 将css单独打包成一个文件
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
		// 压缩css文件
		// new OptimizeCssAssest({
		// 	cssProcessorOption: {
		// 		safe: true
		// 	}
		// }),
		// 压缩js文件
		// new webpack.optimize.UglifyJsPlugin({
		// 	parallel: true, //使用多进程并行运行来提高打包速度
		// 	compress: {
		// 		warnings: false,
		// 		drop_console: true, // 删除console.log
		// 		pure_funcs: ['console.log']
		// 	},
		// 	sourceMap: true
		// })
		// 公共模块的打包
		// new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime'
        // })
	)
}

module.exports = config
