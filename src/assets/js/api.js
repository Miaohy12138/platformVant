import axios from 'axios'
import {getCookie} from "./cookie";
import { Notify } from 'vant';
import router from "../../router";

const http='http://www.kuangjiahu.top/';
export const login = http+'/user/login/' //登陆
export const add_order=http+'/add_order/' //提交订单
export const user_order = http+'/user_order/' //个人订单
export const address = http+'/address/' //添加地址
export const user_address = http+'/user_address/' //个人地址
export const del_address = http+'/del_address/' //删除个人地址
export const up_address = http+'/up_address/' //修改个人地址
export const sc_biao = http+'/sc_biao/'  //个人收藏的文章
export const del_sc_biao = http+'/del_sc_biao/'  //删除个人文章
export const add_cart = http+'/add_cart/' //加入购物车
export const home_data = http+'/shop_data/' //
export const home_banner = http+'/home_banner/' //banner
export const news_data = http+'/news_data/' //动态

let apiserver = 'http://192.168.0.8:8088/pb';

//无token请求
const notokenapi = axios.create({
  baseURL:apiserver
});
let notokenpost = (url, params) => {
  return notokenapi.post(url, params)
};
//token请求
const appapi = axios.create({
  //headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
  baseURL:apiserver
});

//request拦截
appapi.interceptors.request.use(function (config) {
  let token = getCookie("token");
  config.headers.common['token'] = token;
  return config;
},function (error) {
  return Promise.reject(error)
});

//response 拦截
appapi.interceptors.response.use(response => {
  let res = response.data;
  return response
}, err => {
  let errData = err.response.data;
      switch (errData.code) {
        case 400:
          console.log('错误请求');
          break;
        case 401:
          Notify({
            message: '登录过期，请重新登录',
            duration:1000,
            }
          );
          goLogin();
          break;
        default:
          console.log(err.data.code)
  }
  return Promise.resolve(err.response)
});


function goLogin(){
  router.push("/login")
}

let apppost = (url,params) =>{
  return appapi.post(url,params)
};

export default {
  //用户相关
  /**
   * 注册
   * @param params
   * @returns {Promise<AxiosResponse<T>>}
   */
  register : params =>{
    return notokenpost('/user/register',params);
  },
  login:params =>{
    return notokenpost('/user/login',params);
  },
  getUserInfo:params =>{
    return apppost('/user/userDetail',params);
  },
  editUserInfo:params=>{
    return apppost('/user/editUser',params);
  },
  //就诊人
  editVistPerson:params=>{
    return apppost('/visitPerson/edit',params);
  },
  visitPersonList:params=>{
    return apppost('/visitPerson/list',params);
  },
  getVisitPerson:params=>{
    return apppost('/visitPerson/detail',params);
  },
  //医院相关
  getHospitalList:params=>{
    return apppost ('/hospital/list',params);
  },
  getHospitalDetail:params=>{
    return apppost('/hospital/detail',params);
  },
  //医生相关
  getDoctorList:params=>{
    return apppost('/doctor/list',params);
  },
  getDoctorDetail:params=>{
    return apppost('/doctor/detail',params);
  },
  //科室相关
  getDepartmentByIds:params=>{
    return apppost('/department/getByIds',params);
  }
}



