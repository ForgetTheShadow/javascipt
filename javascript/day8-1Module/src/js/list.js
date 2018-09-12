/*
	* 团队项目
	* 每个人负责一块功能
 */
/*
	列表页
 */

// (function(){
// 	console.log('列表页800行');
// })();


// tab.js是一个按照规范编写的模块，索引引入时得到返回值
require(['config'],function(){
	require(['jquery','tab','common'],function($,res){
		console.log($,res)
	});
});