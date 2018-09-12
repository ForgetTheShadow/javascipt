/*
	* 团队项目
	* 每个人负责一块功能
 */
/*
	首页代码
		1）如何解决依赖问题
			* requirejs把一个js文件当作一个模块
			


	require.js使用
		* 引入：require(modules,callback)
			* 不带.js后缀（推荐）：基于data-main属性文件所在路径
			* 带.js后缀: 忽略baseUrl，基于html文件所在路径
		* 基础路径baseUrl：任何的引入都是基于这个路径
			* 有data-main属性：为data-main文件所在路径
			* 无data-mian属性：为html文件所在路径


		建议：使用data-main属性，并在引入其他模块时不写后缀.js
 */

// ;(function(){
// 	console.log('首页1000行');
// })();


// 配置
require.config({

	// 配置短路径（别名）
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'lxzoom':'../lib/jquery-lxzoom/jquery.lxzoom'
	},

	shim:{
		// 配置模块间依赖关系
		// 讲明：lxzoom依赖jquery（加载过程中自动处理先后顺序）
		'lxzoom':['jquery']
	}
});


// 首页依赖
// 	* common.js    利用js加载js
// 	* 安全使用$
// 	* 引入模块规范
// 		* 引入的模块如果没有遵循相应的规范，则在回调函数中得到不到值

require(['jquery','common','lxzoom'],function($,com,lxz){
	// 这里的代码在模块引入完成后执行
	// 但不保证jquery,common,lxzoom的加载顺序（lxzoom依赖jquery）
	console.log($);
	console.log(com);
	console.log(lxz);

	$('h1').css('color','#f00')
});