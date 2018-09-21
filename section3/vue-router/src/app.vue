<template>
	<div class="container">
		<router-view></router-view>
		<ul>
			<router-link :to="tab.to" tag="li" v-for="tab in tabs" active-class="active" event="mouseover">{{tab.text}}</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				title:'app.vue',
				tabs:[{

					text:'首页',
					to:'/home'
				},
				{

					text:'列表',
					to:'/list'
				},
				{

					text:'详情',
					to:'/goods'
				},
				{

					text:'购物车',
					to:'/cart'
				}]
			}
		}
	}
</script>
<style scoped>
	.active{color:#f00;font-weight:bold;}
</style>