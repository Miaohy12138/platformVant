<template>
  <div>
    <Order-Header title="我的订单"></Order-Header>
    <div class="orderMain" id="transitionName">
      <!-- <div class="order-box2"> -->
      <div class="wrapper" ref="wrapper">
        <div class="conntent">
          <div class="content-list" v-for="(list,index) in order" :key="index" @click='go_orderView(list)'>
            <div class="_order">
              <p class="left">订单号：{{list.number}}&nbsp;&nbsp;&nbsp;已完成</p>

              <p class="right">
                <img
                        style="width:0.7rem;height:0.7rem"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAABGdBTUEAALGPC/xhBQAAA1ZJREFUeAHtmz2LE1EUhjcfBoVdFtzGJmzQwkp0Zas0EvAj2CSwGz8Kf4BYbKd2ZtFWEBv/gaJJMGk0oo1NSkHEUsk2wUoQs6gkZn3PkrvcLMedmcydgcA7MDl3zr3znjPPnMtMyM3cHDcSIAESIAESIAESIAESmGUCiaiTb7VaC8Ph8DziHB+NRgt2vEQisbyzs5OzfdKGvwv/lu1PJpM/cfw1nU6/K5VK0o5sixRKvV6/jot7guwXHV7BD0C7ub6+/syh5oRUcuLI4QGAPACQp5B0CUQyXBTdWq1232G6E1KRVEqz2TyFKfMByaclGu7sF5i3sN/s6OjPwbds+8btLuzE9MHYY/BdgD0hY3DeEFPpbLlc/iTHLrfdpF0KitZgMLgDY4C8WVpaKhcKhd9h43Q6nSO9Xu8lwFzCngb429C8EVZ3//mRTB/cxdMmUCqVuusCiOjl8/lfome0Yc9YbWfNSKDgLp40GWaz2c+m7cLaenYcF9pGIxIoED9kAqyurg5M24Xdp7cXx4W20YgKitGfSevr6dNoNO4FvLpz1vj3VttVc2r9tbW1Ta8kfD198CZa9RI6oL9wQJ+LrqD6nlA4fZTb4qtS8L2jqpxLFwmQAAmQgA8CCR9jDhyCr/BVDDDvMZuVSkWOY91c5+Dr6ePqCsfJ78r5gRd0vKs8Y4WCpE1FSf5V+fDYgo73kPPXzZc3hROhEIpCQHGxUghFIaC4WCmEohBQXKwUQlEIKC5WCqEoBBQXK4VQFAKKi5VCKAoBxcVKIRSFgOJipRCKQkBxsVIIRSGguFgphKIQUFysFAVKrD+G4VfBQD/TBh2vXN9UrtCVggU9QxMZ7cOmHae149r5TJtDaCgIvGWCY13rRewuNI2kp5V4EtcauJeP5QvUDH0BmUzmNVZY/5GoSG4Ff1R4GBcYiTOOtyLxJQ/JR9phtkBz/H+BkNgGEnxk+pHcR+xtrKr0ux4/8BJQmTKIWcS+t+QdMTfwl5fHJo9prRMoEhxgniPBK9MmEvY8AHkBIFfD6sj5oaePSQKLdq/h7t3C8bbxxWS3Ja7EdxXPWaWYhNrt9tF+v38Zdy4HX8r4PWzg6QO9v6jM7vz8/KtisfjdQ5/dJEACJEACJEACs0fgH5PV4oD0Zdz+AAAAAElFTkSuQmCC"
                        alt
                >
              </p>
            </div>
            <div class="order">
              <img src="http://www.vivo-admin.com/static/image/5cd6e6221bed6.png">

              <div class="order-div">
                <h3>{{list.shop_name}}</h3>
                <!-- <p class="order-div-color">颜色:不详</p> -->
                <p class="order-div-price">￥{{list.shop_price}}</p>
              </div>
              <div class="order-div-2">× 1</div>
            </div>
            <div class="order-2">
              <div class="order-2-box">
                <p class="order-2-one">
                  应付金额：
                  <span>￥{{list.shop_price}}</span>
                </p>
              </div>
            </div>
          </div>


        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters} from "vuex";
  import OrderHeader from "../common/header";
  import BScroll from "better-scroll";
  import {setCookie, getCookie} from "../../assets/js/cookie.js";
  import {user_order} from "../../assets/js/api.js";
  import axios from "axios";

  export default {
    name: "oerder",
    data() {
      return {
        order: []
      };
    },
    components: {
      OrderHeader
    },
    computed: {
      orders() {
        return this.$store.state.orders;
      }
    },
    methods: {
      ...mapMutations(["odefault"]),
      btn(num) {
        this.nowIndex = num;
      },
      go_orderView(list) {
        this.$router.push({
          path: 'orderView',
          query: {
            number: list.number
          }
        })
      },
      async get_order() {
        let cookier_token = getCookie("token");
        console.log(cookier_token)
        axios({
          url: user_order,
          method: "post",
          params: {
            token: cookier_token
          }
        })
          .then(res => {
            this.order = res.data.order
          })
          .catch(err => {
            //异常操作
          });
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollY: true,
          scrollbar: {
            // fade:false //显示滚动条
            fade: true //不显示滚动条
          }
        });
      });
    },
    created() {
      this.get_order()
    }
  };
</script>


<style lang="stylus" scoped>
  .orderMain {
    height: 17rem;
    // background: #ff0;
    overflow: hidden;
    position: relative;
    top: 1.7rem;
  }

  .conntent {
    // width 100%;
    // height 100%;
  }

  .order-box {
    height: 1rem;
    background: white;
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
  }

  .order-box .active {
    color: #199cfe;
    border-bottom: 2px solid #199cfe;
  }

  .order-box p {
    width: 25%;
    height: 100%;
    line-height: 1rem;
    float: left;
    text-align: center;
  }

  .order-box p {
    width: 50%;
    height: 100%;
    font-size: 0.36rem;
    display: block;
    margin: auto;
  }

  .order-box p a {
    width: 50%;
    height: 100%;
    font-size: 0.36rem;
    display: block;
    margin: auto;
  }

  .order-box2 {
    width: 100%;
    height 12rem;
    //   margin-top: 1rem;
    //   background yellow
  }

  .orders {
    margin-top: 10px;
  }

  ._order {
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem;
    background: #ffffff;
  }

  .left {
    float: left;
    color: #666;
    margin-left: 0.5rem;
    font-size: 0.35rem;
  }

  .orders i {
    font-size: 0.4rem;
    color: #666;
  }

  .right {
    float: right;
    color: rgb(0, 172, 255);
    margin-right: 0.3rem;
    font-size: 0.35rem;
  }

  .order {
    width: 100%;
    height: 3rem;
    background: white;
    border-bottom: 1px solid #f0f0f0;
    border-top: 1px solid #f0f0f0;
  }

  .order img {
    float: left;
    margin: 0.3rem;
    height: 2.5rem;
  }

  .order-div {
    width: 4rem;
    margin: 0.3rem;
    line-height: 0.7rem;
    float: left;
  }

  .order h3 {
    font-size: 0.5rem;
  }

  .order-div-price {
    color: red;
    font-size: 0.4rem;
  }

  .order-div-2 {
    display: inline-block;
    float: right;
    margin: 0.3rem 0.6rem;
    font-size: 0.4rem;
  }

  .order-2 {
    width: 100%;
    height: 1.4rem;
    background: white;
  }

  .order-2-box {
    width: 50%;
    float: right;
    text-align: right;
    margin: 0.2rem 0.4rem;
  }

  .order-2-zero {
    float: left;
    font-size: 0.35rem;
    margin-left: 0.5rem;
  }

  .order-2-zero span {
    color: red;
  }

  .order-2-one {
    font-size: 0.35rem;
    height: 100%;
  }

  .order-2-one span {
    color: red;
  }

  .order-2-two {
    color: #666;
    padding-top: 0.2rem;
    font-size: 0.35rem;
  }

  .order-3 {
    width: 100%;
    height: 1.1rem;
    background: white;
  }

  .order-3 a {
    width: 2.8rem;
    height: 0.7rem;
    line-height: 0.7rem;
    border: 1px solid red;
    border-radius: 3px;
    text-align: center;
    display: block;
    float: right;
    margin-right: 0.3rem;
    margin-top: 0.1rem;
    border: 1px solid #dcdcdc;
    font-size: 0.3rem;
  }

  .wrapper-father {
    width: 100%;
    height: 100%;
    //   background: yellow;
  }

  .wrapper {
    height: 100%;
    //   overflow: hidden;
    //   padding-bottom: 50px;
  }

  .content-list {
    width 100%;
    height auto;
    background red;
    margin-bottom 0.3rem
  }
</style>

