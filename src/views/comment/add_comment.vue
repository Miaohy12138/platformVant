<template>
  <div>
    <van-nav-bar
            title="订单评价"
            left-text="返回"
            left-arrow
            @click-left="back"
            @click-right="gohome"/>
    <van-cell :title="order.sourceItem.hospitalName" :value="order.sourceItem.price +'元'" :label="order.doctor.name" />
    <van-field name="rate" label="医院评分" >
      <template #input>
        <van-rate v-model="doctorRate" allow-half touchable/>
      </template>
    </van-field>
    <van-field
            v-model="hospitalMessage"
            rows="2"
            autosize
            label="医院评价"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
    />
    <van-field name="rate" label="医生评分" >
      <template #input>
        <van-rate v-model="hospitalRate" allow-half touchable />
      </template>
    </van-field>
    <van-field
            v-model="doctorMessage"
            rows="2"
            autosize
            label="医生评价"
            type="textarea"
            maxlength="50"
            placeholder="请输入留言"
            show-word-limit
    />
    <button class="we-button booking-reservation--submit-btn we-button-type-primary we-button-size-large" @click="comment">提交</button>

  </div>
</template>

<script>
  import API from "../../assets/js/api";
  import {Toast} from "vant";
  export default {
    name: "add_comment",
    data(){
      return{
        doctorRate:0,
        hospitalRate:0,
        doctorMessage:'',
        hospitalMessage:'',
        orderId:0,
        order:{},
      }
    },
    created() {
      let orderId = this.$route.params.id;
      this.orderId = orderId;
      let pdata = {
        id:this.orderId
      };
      API.orderDetail(pdata).then(res=>{
        this.order = res.data.data;
      })
    },
    methods:{
      back(){
        this.$router.back(-1);
      },
      gohome(){
        this.$router.push("/main")
      },
      comment(){
        //医院
        let pdata1 = {
          comment:{
            orderId:this.order.order.id,
            targetId:this.order.sourceItem.hospitalId,
            targetType:0,
            targetName:this.order.sourceItem.hospitalName,
            score:this.hospitalRate,
            content:this.hospitalMessage
          },
          actionType:1
        };
        let pdata2 = {
          comment:{
            orderId:this.order.order.id,
            targetId:this.order.sourceItem.doctorId,
            targetType:1,
            targetName:this.order.sourceItem.doctorName,
            score:this.doctorRate,
            content:this.doctorMessage
          },
          actionType:1
        };
        API.editComment(pdata1).then(res=>{
          let code = res.data.code;
          if(code==0){
            //医生
            API.editComment(pdata2).then(res=>{
              if(res.data.code==0){
                Toast.success({message: '评价成功', duration: 500,onClose:this.goMain});
              }
            });
          }
        });
      },
      goMain(){
        this.$router.push("/main")
      }
    }
  }
</script>

<style scoped>
  .infos{
    padding-top: 1.35rem;
    z-index: 11111;
  }
</style>
