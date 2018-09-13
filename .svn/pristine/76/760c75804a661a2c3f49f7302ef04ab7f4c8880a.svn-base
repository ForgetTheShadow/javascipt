// 会在node.js的环境中运行
// nodejs中的模块化开发规范：commonJS

// 关于路径操作模块
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	// 配置入口文件
	entry:'./src/app.js',

	// 配置输出选项
	output:{
		 path:path.resolve(__dirname,'./dist'),
         filename:'js/bundle.js'
	},

	// 配置环境
	mode:'development',

	// loader配置（加载器）
	module:{
		rules:[
			{
				test:/\.vue$/,//匹配以.vue结尾的文件
				loader:['vue-loader']
			},

			{
				test:/\.css$/,
				loader:['style-loader','css-loader']
			}
		]
	},

	// 插件
	plugins:[
		// 依据html模板生成一个自动引用你打包后的文件（js或css）的新的html页面
		new HtmlWebpackPlugin({
			template:'./src/index.html'
		}),

		// Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴随 VueLoaderPlugin
		new VueLoaderPlugin()
	]
}



