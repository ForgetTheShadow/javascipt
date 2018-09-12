/*
	定义模块
		* define(modules,callback)
 */

// 定义一个无依赖其他模块的模块
// 随机范围整数
// define(function(){
// 	// 返回一个函数
// 	// 这个函数就是在引入模块的回调函数中的参数
// 	return {
// 		randomNumber:function(min,max){
// 			return parseInt(Math.random()*(max-min+1))+min;
// 		},
// 		randomColor:function(num){
// 				if(num === 16){
// 				var str = '0123456789abcdef';
// 				var res = '#';

// 				for(var i=0;i<6;i++){
// 					// 获取随机索引值
// 					var idx = parseInt(Math.random()*str.length);
// 					res += str.charAt(idx);
// 				}

// 				return res;
// 			}

// 			var r = parseInt(Math.random()*256);
// 			var g = parseInt(Math.random()*256);
// 			var b = parseInt(Math.random()*256);

// 			return 'rgb('+r+','+g+','+b+')';//rgb(244,12,23)
// 		}
// 	}
// });


// 定义一个有依赖关系的模块

define(['jquery'],function($){
	return {
		a(){

		},
		b(){
			
		}
	}
})



