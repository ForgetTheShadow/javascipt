<template>
	<div class="container">
		<img src="img/g3.jpg"/>
		<h1>Hello {{username}}</h1>
		<button class="btn btn-success">点我有惊喜</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				username:'俄罗斯美女'
			}
		}
	}
</script>

<!-- 设置style标签的作用域 -->
<style scoped>
	h1{color:#58bc58 !important;}
	img{border:2px solid #f00;}
</style>