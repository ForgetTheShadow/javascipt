//在浏览器端运行的文件
//项目入口文件
// 利用ES6的模块化特性引入其他模块
// * import
// * export

// 引入Vue框架
import Vue from 'vue';

// 引入模板文件（.vue单文件模板）
import App from './app.vue';

// 引入样式
import './css/bootstrap.css';

new Vue({
	el:'#app',
	render:createElement=>{
		return createElement(App);
	}
});