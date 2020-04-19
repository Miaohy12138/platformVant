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
          <van-cell v-for="(item,index) in list" class="visit-item">
            <van-swipe-cell  >
              <van-row>
                <van-col span="16" style="margin-top: 0.1rem">
                  <van-icon name="friends-o" />
                  <span>  姓名：{{item.name}}</span>
                  <van-tag class ="defaulttag" round type="primary" v-show="item.isDefault==1">默认就诊人</van-tag>
                  <br>
                  <van-icon name="phone-o" />
                  <span>手机号：{{item.mobile}}</span>
                </van-col>
                <van-col span="8">
                </van-col>
              </van-row>
              <template #right>
                <van-button square type="danger" text="删除" @click="deleteItem(item.id,index)"  />
              </template>
            </van-swipe-cell>

          </van-cell>
<!--          <van-panel :desc="'手机号:'+item.mobile"  v-for="item in list" :key="item.id" :title="item.name">-->
<!--          </van-panel>-->
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
import { Dialog } from 'vant';
export default {
  data() {
    return {
      list: [],
      offset:200,
      loading: false,
      finished: false,
      upFinished:false,
      totalCount:0,
      pageIdx:0,
      pageSize:10,
      timeout:300,
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
      if(this.list.length==0){

      }else {
        this.pageIdx++;
      }
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
            if(this.pageIdx==0) {
              this.list = [];
            }
            this.list = this.list.concat(visitPersons);
          }
          if(visitPersons.length <this.pageSize){
            this.upFinished = true;
          }
        })
          .catch(err=>{
          })
          .finally(()=>{
          this.loading = false;
        });
      }, this.timeout);
    },
    deleteItem(id,index){
      Dialog.confirm({
        message: '确定删除吗？',
      }).then(() => {
        console.log(id);
        let pdata = {
          actionType:2,
          visitPerson:{
            id:id
          }
        };
        API.editVistPerson(pdata).then(res=>{
          this.list.splice(index,1)
        })
        .catch(err=>{

        })
      });

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
  .visit-item{
    height 2rem
    font-size 0.38rem
  }
  .defaulttag{
    margin-left 0.2rem
  }
  .van-button::before{
    height: 100%;
  }
</style>
