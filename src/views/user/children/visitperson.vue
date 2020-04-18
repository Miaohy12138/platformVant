<template>
  <div>
    <Address-Header title="就诊人信息管理"></Address-Header>
    <div class="main-xs">
      <div class="Address-box">
        <van-cell title="就诊人" value="+添加新就诊人"  @click="goAdd_address"/>
<!--        <div class="address-one">-->
<!--          <p class="left">就诊人</p>-->
<!--          <p class="right" @click="goAdd_address">+添加新就诊人</p>-->
<!--        </div>-->

        <van-list
                v-model="loading"
                :finished="upFinished"
                finished-text="没有更多了"
                @load="onLoadList"
                :offset="offset"
        >
          <van-panel :desc="'手机号:'+item.mobile"  v-for="item in list" :key="item.id" :title="item.name">

          </van-panel>
        </van-list>


        </div>
      </div>
    </div>

</template>


<script>

import AddressHeader from "../../common/header";
import { setCookie, getCookie } from "../../../assets/js/cookie.js";
import API from "../../../assets/js/api"
import success from "../../common/success";
export default {
  data() {
    return {
      list: [],
      offset:20,
      loading: false,
      finished: false,
      upFinished:false,
      totalCount:0,
      pageIdx:0,
      pageSize:10,
      timeout:300
    };
  },
  components: {
    AddressHeader
  },
  created() {
  },
  methods: {
    goAdd_address() {
      this.$router.push({
        path: "add_visitperson"
      });
    },
    getList(){
      let params = {
        pageIdx:this.pageIdx,
        pageSize:this.pageSize
      };
      this.successList(params);
    },
    onLoadList() {
      this.pageIdx++;
      this.getList();
    },
    successList(params){
      setTimeout(() => {
        // 异步更新数据
        API.visitPersonList(params).then(res=>{
          let visitPersons = res.data.data.visitPersons;
          this.totalCount = res.data.data.totalCount;
          if(this.list.length>=this.totalCount){
            this.upFinished = true;
          }else{
            this.list = this.list.concat(visitPersons);
            console.log(this.list);
          }
          if(visitPersons.length <this.pageSize){
            this.upFinished = true;
          }
        })
          .catch(err=>{

          }).finally(()=>{
          this.loading = false;
        });
      }, this.timeout);
    },
    onLoad() {
    },
  }
};
</script>


<style lang="stylus" scoped>
.active {
}
.main-xs {
  padding-top 1.45rem
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background: #f4f4f4;
}
.Address-box{
  z-index 1
  background-color white
}
</style>
