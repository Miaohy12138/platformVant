import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import Home from '../views/home/Home'
import xz_address from "../views/user/children/xz_address"

import view from '../views/view/view'
import goodDetail from '../views/detail/goodDetail'
import order from '../views/order/order'
import orderView from '../views/order/orderView'
import OrderDetails from '../views/OrderDetails'
import choose from '../views/choose'
import news from '../views/news/news'
import newsView from '../views/news/newsView'
import parts from '../views/parts'
import change from '../views/detail/Change'
import success from '../views/common/success'
import classify from "../views/classify/classify"
import pay from "../views/pay/pay"

import ceshi from "../views/ceshi/ceshi"


import shopDetail from "../views/shop/shopDetail"
import login from "../views/user/login"
import register from "../views/user/register"
import upaddress from "../views/user/children/upaddress"
import cart from '../views/user/children/cart'
import main from "../views/user/main"
import collection from "../views/user/children/collection"
/**
 * 重构
 */
import userinfo from "../views/user/children/user_info"
import visitperson from "../views/user/children/visitperson"
import add_visitperson from "../views/user/children/add_visitperson"

//test
import contact from "../views/user/children/contact";
import main2 from "../views/user/main2";
const routes = [
  {path: '/login', name: 'login', component: login},
  {path: '/ceshi', name: 'ceshi', component: ceshi},
  {path: '/view', name: 'view', component: view},
  {path: '/xz_address', name: 'xz_address', component: xz_address},
  {path: '/register', name: 'register', component: register},
  {path: '/contact', name: 'contact', component: contact},
  {path:'/main2',name:'main2',component:main2},
  {
    path: '/main',
    name: 'main',
    component: main,
    children: [
      {
        path: 'visitperson',
        name: 'visitperson',
        component: visitperson
      },
      {
        path: 'add_visitperson',
        component: add_visitperson
      },
      {
        path: 'upaddress',
        name: '/main/upaddress',
        component: upaddress
      },
      {
        path: 'cart',
        name: 'cart',
        component: cart
      },
      {
        path:'userinfo',
        name:'/main/userinfo',
        component: userinfo
      }
    ]
  },
  {path: '/collection', name: 'collection', component: collection},
  {path: '/', name: 'Home', component: Home},
  {path: '/Home', name: 'Home', component: Home},
  {path: '/goodDetail', name: 'goodDetail', component: goodDetail},
  {path: '/order', name: 'order', component: order,},
  {path: '/orderView', name: 'orderView', component: orderView},
  {path: '/choose', name: 'choose', component: choose},
  {path: '/newsView', name: 'newsView', component: newsView},
  {path: '/news', name: 'news', component: news},
  {path: '/parts', name: 'parts', component: parts},
  {path: '/change', name: 'change', component: change},
  {path: '/success', name: 'success', component: success},
  {path: '/classify', name: 'classify', component: classify},
  {path: '/pay', name: 'pay', component: pay},
  {path: '/shopDetail', name: 'shopDetail', component: shopDetail}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
