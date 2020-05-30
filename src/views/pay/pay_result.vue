<template>
  <div class="main" >
    <van-nav-bar
            title="支付成功"
    />
    <div class="as">
      <span >
      三秒后返回主页
    </span>

    </div>
    <van-count-down :time="time" format=" ss 秒" @finish="goMain()"/>
    <div class="mss">
      <img src="/img/success.png" alt="" >
    </div>




  </div>
</template>

<script>
  import API from "../../assets/js/api"
  export default {
    name: "pay_result",
    data(){
      return {
        id:0,
        time:3* 1000
      }
    },
    created() {
      let orderId = this.$route.query.out_trade_no;
      this.id = orderId;
      this.updateOrder();

    },
    methods:{
      goMain(){
        this.$router.push("/main")
      },
      updateOrder(){
        let pdata = {
          actionType:3,
          order:{
            isPay:1,
            status:1,
            id:this.id,
          }
        };
        let _this = this;
        API.editOrder(pdata).then(res=>{
          // setTimeout(function(){
          //   _this.$router.push("/main")
          // }, 3000);

        })
      }
    }
  }
</script>

<style scoped>
.main{
  background-color: white;
  min-height: auto;
  text-align: center;
}
  .as{
    margin-top: 2rem;
  }
  .mss{
    padding-top: 2rem;
    padding-bottom: 6rem;
  }
</style>
