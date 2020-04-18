import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navigation from 'vue-navigation'
Vue.use(Navigation, {router, store})
Vue.config.productionTip = false
import VueLazyLoad from 'vue-lazyload'

//ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

Vue.use(VueLazyLoad,{
  loading:require("../public/img/qqq.png")
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
