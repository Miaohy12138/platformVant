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
            <van-swipe-cell v-for="(item,index) in list">
              <template #left>
                <van-button square type="info" text="选择" @click="select(item.id,item.name)"/>
              </template>
                <van-cell>

                  <label class="we-radio--item">
                    <div class="booking-patient-list--patient">
                      <p class="booking-patient-list--patient-meta">
                        <span class="booking-patient-list--patient-name">{{item.name}}</span>
                        <span v-show="item.sex ===1">男</span>
                        <span v-show="item.sex ===0">女</span>
                        <span>{{item.age}}岁</span>
                        <van-tag class ="defaulttag" round type="primary" v-show="item.isDefault==1">默认就诊人</van-tag>
                        <!---->
                      </p>
                      <p>
                        <span>身份证</span>{{item.idCard}}</p>
                      <p>
                      <span>手机号码</span>{{item.mobile}}</p>
                    </div>
                  </label>
                </van-cell>
              <template #right>
                <van-button square type="primary" text="编辑"@click="editItem(item.id,index)"/>
                <van-button square type="danger" text="删除" @click="deleteItem(item.id,index)"  />
              </template>
            </van-swipe-cell>

<!--          <van-panel :desc="'手机号:'+item.mobile"  v-for="item in list" :key="item.id" :title="item.name">-->
<!--          </van-panel>-->
        </van-list>


        </div>
      </div>
    </div>

</template>


<script>

import AddressHeader from "../../common/header";
import API from "../../../assets/js/api"
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
      canClick:false
    };
  },
  components: {
    AddressHeader
  },
  created() {
  },
  methods: {
    select(id,name){
      sessionStorage.setItem('visitpersonId',id);
      sessionStorage.setItem('visitpersonName',name);
      this.$router.back(-1);
    },
    goAdd_address() {
      this.$router.push({
        path: "add_visitperson"
      });
    },
    getList(){
      let params = {
        pageIdx:this.pageIdx,
        pageSize:this.pageSize,
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

    },
    editItem(id,index){
      this.$router.push('edit_visitperson/'+id);
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
  .van-button{
    height: 100%;
  }
</style>
