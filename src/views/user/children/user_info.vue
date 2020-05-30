<template>

  <div >
    <Userheader title="个人信息修改"></Userheader>
    <div class="main-xs">
      <div class="info-form">
        <van-form @submit="onSubmit">
          <van-field
                  v-model="username"
                  name="用户名"
                  label="用户名"
                  placeholder="请输入用户名"
                  :rules="[{ validator: asyncValidator,message: '用户名已存在' }]"
          />
          <van-field
                  v-model="mobile"
                  type="text"
                  name="手机号"
                  label="手机号"
                  placeholder="请输入手机号"
                  :rules="[{ require:true, message: '请输入手机号' }]"
          />
          <van-field name="radio" label="性别">
            <template #input>
              <van-radio-group v-model="sex" direction="horizontal">
                <van-radio name="1" >男</van-radio>
                <van-radio name="0">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>
<!--          <van-field name="uploader" label="头像上传" >-->
<!--            <template #input>-->
<!--              <van-uploader v-model="uploader"  multiple :max-count="1"/>-->
<!--            </template>-->
<!--          </van-field>-->

          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
          </div>

        </van-form>
      </div>
    </div>
<!--    <van-nav-bar-->
<!--            title="个人信息修改"-->
<!--            left-text="返回"-->
<!--            left-arrow-->
<!--            @click-left="onClickLeft"-->
<!--    />-->

  </div>

</template>

<script>
  import {setCookie, getCookie, delCookie} from "../../../assets/js/cookie.js";
  import API from '../../../assets/js/api'
  import {Toast} from "vant";
  import Userheader from "../../common/header";
  export default {
    name:'userinfo',
    data() {
      return {
        username: '',
        address:'',
        mobile:'',
        sex:'',
        avatar_url:'',
        uploader: [],
      };
    },
    mounted() {
      let cookier_name = getCookie("name");
      let cookier_token = getCookie("token");
      let cookier_moneny = getCookie("moneny");
      let _this = this;
      API.getUserInfo()
        .then(res=>{
          console.log(res);
          let user = res.data.data.userBasic;
          _this.username = user.nickName;
          _this.sex = ""+user.sex;
          _this.mobile = user.mobile;
        })
        .catch(err=>{
          console.log(err)
        })
    },
    created() {
    },
    components: {
      Userheader
    },
    methods: {
      onClickLeft() {
        this.$router.back(-1)
      },
      goMain(){
        this.$router.push("/main")
      },
      onSubmit(values) {
        let pdata = {
          actionType:1,
          userBasic:{
            username:this.username,
            address:this.address,
            mobile:this.mobile,
            sex:this.sex
          }};
        API.editUserInfo(pdata).then(res=>{
          Toast.success({message:'修改成功',duration :250,onClose:this.goMain} );
        })
        .catch(err=>{
          console.log(err);
        })
        console.log('submit', values);
      },
      asyncValidator(){
        API

      }
    },
  };

</script>

<style lang="stylus" scoped>
  .active {
  }
  .main-xs {
    padding-top 1.45rem
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background: #f4f4f4;
  }

</style>
