<template>
  <div id="app">

    <router-view/>

    <mt-tabbar>
      <mt-tabbar v-model="currentTab" fixed>
        <mt-tab-item :id="tab.id" v-for="(tab,idx) in tabs" :key="idx" @click.native="goto(tab.id)">
            <img :src="tab.icon" slot="icon">
              {{tab.title}}
            </mt-tab-item>
        </mt-tabbar>
    </mt-tabbar>
  </div>
</template>

<script>
    import Vue from 'vue';
    import Mint from 'mint-ui';
    Vue.use(Mint);

     // 单独引入样式
    import 'mint-ui/lib/style.css';

    import '@/sass/base.scss';


    import axios from 'axios';
    Vue.use(axios);

    // 方便在其他组件中直接使用axios
    Vue.prototype.$axios = axios;

    // loading
    import { Indicator } from 'mint-ui';
    Vue.prototype.$loading = Indicator;

  export default {
    data(){
        return{
            currentTab:this.$route.name,
            currentCity:'广州',
            tabs:[
                    {
                        title:'首页',
                        id:'Home',
                        icon:'home'
                    },
                    {
                        title:'正在热映',
                        id:'in_theaters',
                        icon:'eye'
                    },
                    {
                        title:'即将上映',
                        id:'coming_soon',
                        icon:'watch'
                    },
                    {
                        title:'新片榜',
                        id:'new_movies',
                        icon:'star'
                    },
                    {
                        title:'TOP250',
                        id:'top250',
                        icon:'telescope'
                    }
                ]
        }
    },

    computed:{

    },

    watch:{
       
    },

    methods:{
        search(){
            this.$router.push({
                name:'Search'
            });
        },
        goto(id){
            this.$router.push({name:id});

            this.currentTab = id
        }
    },
    name: 'App',
    created(){
        console.log(this.tabs);
        this.tabs.forEach(item=>{
            item.icon = 'static/assets/octicons/build/svg/'+item.icon + '.svg';
        });
    }
  }
  </script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  body{
    margin:0;
}
  </style>
