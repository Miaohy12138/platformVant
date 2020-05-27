<template>
  <div>
    success
    三秒后返回主页
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  export default {
    name: "pay_result",
    data(){
      return {
        id:0
      }
    },
    created() {
      let orderId = this.$route.query.out_trade_no;
      this.id = orderId;
      this.updateOrder();

    },
    methods:{
      goMain(){

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
          setTimeout(function(){
            _this.$router.push("/main")
          }, 3000);

        })
      }
    }
  }
</script>

<style scoped>

</style>
