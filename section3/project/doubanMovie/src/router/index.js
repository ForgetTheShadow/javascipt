import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home';
import search from '@/components/search';
import in_theaters from '@/components/in_theaters';
// import coming_soon from '@/components/coming_soon';
// import new_movies from '@/components/new_movies';
// import weekly from '@/components/weekly';
// import top250 from '@/components/top250';
// import detail from '@/components/detail';
import citylist from '@/components/citylist';

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'Home',
		component: home,
		props:true
    },
    {
		path:'/citylist',
		name:'CityList',
		component:citylist,
		props:true
	},
	{
		path: '/search',
		name: 'Search',
		component: search
	},
	{
		path:'/in_theaters',
		name:'in_theaters',
		component:in_theaters
	}
  ]
})
