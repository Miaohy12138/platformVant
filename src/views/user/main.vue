<template>
  <div>
    <div class="header">
      <div class="header-left">
        <i class="iconfont icon-zuojiantou"></i>
      </div>
      <div class="header-in">个人中心</div>
      <div class="header-rigth" @click="zx">
        <i class="iconfont icon-shezhi-xianxing"></i>
      </div>
    </div>


    <div class="container">
      <div class="container-bj" @click="editUserInfo">
        <div class="bj-left">
          <van-image
                  round
                  width="2rem"
                  height="2rem"
                  :src="avatar_url"
          />
        </div>
        <div class="bj-right">
          <span>{{name}}</span>
          <p>闲话终日有，不听自然无</p>
        </div>
      </div>
      <van-grid :column-num="3">
        <van-grid-item icon="photo-o" text="余额" />
        <van-grid-item icon="photo-o" text="换鼓励金" />
        <van-grid-item icon="photo-o" text="积分" />
      </van-grid>
      <div class="container-con">
        <router-link class="container-order" to="/order_list" tag="div">
          <van-cell title="我的挂号单" icon="like-o" is-link size="large"/>
          <div class="container-order-2">
            <p class v-for="list in container">
              <img :src="list.img">
              <span>{{list.name}}</span>
            </p>
          </div>
        </router-link>

        <router-link to="/collection" class="con">
          <van-cell title="我的收藏" icon="like-o" is-link  size="large"/>
        </router-link>

        <router-link :to="{name:'visitperson'}" class="con">
          <van-cell title="就诊人管理" icon="friends-o" is-link size="large"/>
        </router-link>

        <router-link :to="{name:'cart'}" class="con">
          <van-cell title="我的购物车" icon="shopping-cart-o" is-link size="large"/>
        </router-link>
      </div>

    </div>


    <div>
      <router-view></router-view>
    </div>
    <Home-Footer></Home-Footer>
  </div>
</template>
<script>
  import {setCookie, getCookie, delCookie} from "../../assets/js/cookie.js";
  import HomeFooter from '../../views/footer';
  import axios from "axios";

  export default {
    data() {
      return {
        name: "",
        jifeng: "123",
        container: [
          {
            img: "/img/111.png",
            name: "待付款"
          },
          {
            img: "/img/222.png",
            name: "待确认"
          },
          {
            img: "/img/333.png",
            name: "待评价"
          },
          {
            img: "/img/444.png",
            name: "退货/退款"
          }
        ],
        user_img: '',
        moneny: '',
        avatar_url:'https://img.yzcdn.cn/vant/cat.jpeg'

      };
    },
    components: {
      HomeFooter
    },
    mounted() {
      /*页面挂载获取保存的cookie值，渲染到页面上*/
      let cookier_name = getCookie("username");
      let cookier_token = getCookie("token");
      let cookier_moneny = getCookie("moneny");
      this.name = cookier_name;
      /*如果cookie不存在，则跳转到登录页*/
      if (cookier_token == "") {
        this.$router.push("login");
      }
    },
    methods: {
      zx() {
        let cookier_name = delCookie("username");
        let cookier_token = delCookie("token");
        // };
      },
      up_user_tx(event) {
        // console.log(event)
        // console.log(this.$refs.ceshi.files[0].name);
        let self = this;
        let cookier_token = getCookie("token");
        // reader.readAsDataURL( event.target.files[ 0 ] );

        axios({
          url: "http://www.vivo-admin.com/upload/",
          method: "post",
          params: {
            user_img: this.$refs.sp_image.files[0].name
          },
        })
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            //异常操作
          });
      },
      editUserInfo(){
        //this.$router.push({ name: 'demo2', params: { userId: 123 }})
        this.$router.push({name:'/main/userinfo'})
      }
    }
  };
</script>


<style lang="stylus" scoped>

  .header {
    width: 100%;
    height: 1.71rem;
    background: #ffffff;

    .header-left {
      width: 10%;
      float: left;

      i {
        font-size: 0.6rem;
        line-height: 1.45rem;
        text-align: center;
        display: block;
      }
    }

    .header-in {
      width: 80%;
      float: left;
      text-align: center;
      font-size: 0.45rem;
      line-height: 1.45rem;
    }

    .header-rigth {
      width: 10%;
      float: left;

      i {
        font-size: 0.6rem;
        line-height: 1.45rem;
        text-align: center;
        display: block;
      }
    }
  }

  .container-order {
    width: 100%;
    height: 3.5rem;
    background: white;
    display: block;
    margin-bottom: 0.15rem;
    margin-top: 0.15rem;
    font-size: 0.35rem;

    .container-order-1 {
      width: 100%;
      height: 1.5rem;

      .left {
        float: left;
        display: block;
        line-height: 1.5rem;
        margin-left: 0.5rem;
        font-size: 0.4rem;
      }

      .right {
        float: right;
        line-height: 1.5rem;
        margin-right: 0.6rem;
        font-size: 0.4rem;
      }
    }

    .container-order-2 {
      padding-top: 0.4rem;
      width: 100%;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        width: 25%;
        display: flex;
        flex-direction: column;
        margin-top: 0.3rem;

        img {
          width: 0.8rem;
          height: 0.8rem;
          margin: auto;
        }

        span {
          text-align: center;
          padding-top: 0.3rem;
        }
      }
    }
  }

  .t {
    background-image: url('/img/t.png');
  }

  .container {
    width: 100%;
    height: 3.2rem;
    position: absolute;
    top: 1.45rem;

    .container-bj {
      width: 100%;
      height: 100%;
      background: url('/img/bj.png') no-repeat;
      background-size: 100% 100%;
      // display: flex;
      // justify-content: center;
      // align-items: center;
      // flex-direction: column;

      .bj-left {
        width 26%
        height 100%
        float left
        display flex
        justify-content center
        align-items center
      }
      .bj-right {
        width 60%
        height 100%
        float left
        display flex
        justify-content center
        // align-items center
        flex-direction column

        span {
          font-weight bold
        }
      }

      span {
        color: #ffffff;
        font-size: 0.5rem;
      }

      p {
        font-size: 0.35rem;
        color: #ffffff;
      }
    }

    .container-integral {
      width: 100%;
      height: 2rem;
      background: #ffffff;
      display: flex;
      justify-content: center;

      p {
        width: 33%;
        height: 100%;
        font-size: 0.36rem;
        line-height: 0.6rem;
        font-weight: 500;
        float: left;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
      }
    }

    .container-con {
      margin-bottom: 1.45rem;

      .con {
        width: 100%;
        height: 1.41rem;
        background: #ffffff;
        border-bottom: 1px solid #f0f0f0;
        display: block;

        .con-left {
          float: left;
          line-height: 1.3rem;
          padding-left: 0.47rem;

          i {
            font-size: 0.5rem;
          }

          span {
            font-size: 0.37rem;
            padding-left: 0.1rem;
          }
        }

        .con-rigth {
          float: right;
          line-height: 1.3rem;
          padding-right: 0.4rem;
        }
      }
    }
  }
</style>
