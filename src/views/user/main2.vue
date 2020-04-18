<template>
  <div class="main">
    <div class="header">
      <main2header title="个人主页"></main2header>
    </div>

    <div class="container">
      <div class="container-bj">
        <van-row>
          <van-col span="8">
            <div class="touxinag">
              <van-image
                      round
                      width="3rem"
                      height="3rem"
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
              />
            </div>
          </van-col>
          <van-col span="16">span: 16</van-col>
        </van-row>
      </div>
      <van-grid :column-num="3">
        <van-grid-item icon="photo-o" text="余额" />
        <van-grid-item icon="photo-o" text="换鼓励金" />
        <van-grid-item icon="photo-o" text="积分" />
      </van-grid>
      <div class="container-con">
        <router-link class="container-order" to="/order" tag="div">
          <van-cell title="我的挂号单" icon="like-o" is-link size="large"/>
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

    <div class="buttom">
      <van-tabbar route>
        <van-tabbar-item replace to="/home" icon="home-o">
          标签
        </van-tabbar-item>
        <van-tabbar-item replace to="/search" icon="search">
          标签
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>


</template>

<script>
  import main2header from "../../views/common/header"
  export default {
    name: "",
    data(){
      return{
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
      }
    },
    components:{
      main2header
    },

  }
</script>

<style lang="stylus" scoped >
  .container{
    padding-top 1.45rem
  }
  .container-bj{
    font-size 0.5rem
    height 3.5rem
    background: url('/img/bj.png') no-repeat;
    background-size: 100% 100%;
  }
  .touxinag{
    padding-top 0.2rem
    padding-left 0.2rem
  }
</style>
