import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import index from "./components/index.vue";
import Vuex from "vuex";

axios.defaults.baseURL = "http://47.106.148.205:8899";
axios.defaults.withCreadentials = true;
Vue.prototype.axios=axios;
// 使用路由中间件
Vue.use(VueRouter);
Vue.use(VueLazyload,{
    loading: require("./assets/statics/img/loading2.gif")
})
// 注册路由规则
const router = new VueRouter({
    routes:[
        {
            path: "/",
            redirect: "/index"
        },
        {
            path:"/goodsInfo/:id",
            component: goodsInfo
        }
    ]
});
// 实例化一个Vuex的仓库
const store = new Vuex.Store({
    // 数据，类似data(function(){ return {   }})
    state:{
    },
    // 类似于计算属性
    getters:{
        totalCount(state){
            let num = 0;
            for (const key in state.buyList) {
                num += parseInt(state.buyList[key])
            }
            return num
        }
    },
    // 类似于methods
    mutations: {
        rememberFromPath(state,path){
            state.fromPath = path;
        }
    }
});

// 注册路由守卫
router.beforeEach((to,from,next)=>{
    // 保存数据
    store.commit('rememberFromPath',from.path);
    if(to.path=='/payOrder'){
        axios.get("/site/account/islogin").then(response=>{

        }).catch(err =>{

        })
    }else{
        next();
    }
})
// 注册全局过滤器
Vue.filter('cutTime',function(value){
    retirm ,p,emt(value).format("YYYY-MM-DD")
})

// 作用是阻止vue 在启动时生成生产提示
Vue.config.productionTip = false;
new Vue({
    el: "#app",
    router,
    render: h =>h(App),
    store
})
