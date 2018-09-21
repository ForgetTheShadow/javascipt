<template>
	<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
	  <ul class="movielist">
	    <li v-for="item in list" :key="item.id">
			<img :src="item.images.small">
			<div class="info">
				<h4>{{item.title}}</h4>
				<p>主演：{{getNames(item.casts)}}</p>
			</div>
	    </li>
	  </ul>
	</mt-loadmore>

</template>
<script>
	

	export default {
		data(){
			return {
				allLoaded:false,
				list:[],
				count:10,
				start:0,
				page:1,
				totalPage:0
			}
		},


		methods:{
			loadBottom(){
				this.page++;
				if(this.page > this.totalPage){
					this.allLoaded = true;
					return;
				}
				this.start = (this.page-1)*this.count
				this.getMovies()
			},
			getNames(arr){
				return arr.map(item=>{
					return item.name;
				}).join();
			},
			getMovies(){
				// loading
				this.$loading.open();

				this.$axios.post('/api/in_theaters',{
					city:'广州',
					count:this.count,
					start:this.start,
					apikey:'0b2bdeda43b5688921839c8ecb20399b'
				}).then(res=>{
					let data = res.data;
					console.log(data);

					// 设置总分页数量
					this.totalPage = Math.ceil(data.total/data.count);

					this.list.push(...data.subjects);

					// 去除loading的效果
					this.$loading.close();
				})
			}
		},
		created(){
			this.getMovies();
		}
	}
</script>
<style>
	ul{list-style: none;padding:0;margin:0;}
	.movielist{padding:10px;}
	.movielist li{overflow:hidden;margin-bottom:10px;padding-bottom:10px;border-bottom: 1px dotted #ccc;display:flex;}
	.movielist img{margin-right:20px;height:150px;}
	.movielist .info{text-align:left;}

	.mint-loadmore{overflow-y:auto;}
</style>