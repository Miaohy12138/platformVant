<template>
  <div class="list">
    <div class="filter">
      <van-dropdown-menu>
        <van-dropdown-item v-model="hlevel" :options="hlevels" title="医生等级"/>
        <van-dropdown-item v-model="value2" :options="option2" title="条件筛选"/>
      </van-dropdown-menu>
    </div>
    <div class="list-main">
      <div data-v-f9730fec="" class="component-doctor-card" v-for="item in list" @click="getDetail(item.id)">
        <div class="g-card">
          <div class="g-card--avatar" style="width: 2.048rem; height: 2.048rem;"><span
                  class="g-card--avatar-img" style="border-radius: 50%;"><img
                  :src="item.imageUrl" class="x-img-fadein"
                  style="border-radius: 50%;" normal="loaded"></span>
            <div class="symbol" style="background-color: rgb(63, 134, 255);"><!----><!----></div>
          </div>
          <div class="content">
            <div class="g-card-row" style="margin-bottom: 4px;">
              <div class="g-card-col line-feat text"
                   style="color: rgb(43, 49, 61); font-size: 16px; margin-right: 8px;"><label
                      style="font-weight: bold;">{{item.name}}</label></div>
              <div class="g-card-col line-feat text ellipsis"
                   style="color: rgb(43, 49, 61); font-size: 16px; margin-right: 6px;"><label
                      style="font-weight: bold;"><doctor_level level="item.level"/></label></div>
              <div class="g-card-col line-feat text ellipsis"
                   style="color: rgb(43, 49, 61); font-size: 16px; margin-right: 4px;">
              </div><!---->
              <div class="g-card-col text"
                   style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;"><i
                      class="booking icon"></i></div>
              <!----><!----></div>
            <div class="g-card-row" style="margin-bottom: 6px;">
              <div class="g-card-col text ellipsis"
                   style="color: rgb(94, 97, 107); font-size: 14px; margin-right: 0px;">
                <label>苏州市立医院 &nbsp;</label>
              </div>
              <div class="g-card-col text"
                   style="color: rgb(94, 97, 107); font-size: 14px; margin-right: 0px; line-height: normal;">
                              <span>
                                &nbsp;<doctor_level :level="item.level"/>
                              </span>
              </div>
              <div class="g-card-col text"
                   style="color: rgb(94, 97, 107); font-size: 14px; margin-right: 0px; line-height: normal;">
                <i class="wy-icon-more" onclick="monitorEvents[291]()"></i></div>
            </div>
            <div class="g-card-row" style="margin-bottom: 8px;">
              <div class="g-card-col text"
                   style="color: rgb(157, 158, 167); font-size: 12px; margin-right: 4px;">
                评分
                <span class="count">
                          4.5
                        </span>
              </div>
              <div class="g-card-col text"
                   style="color: rgb(157, 158, 167); font-size: 12px; margin-right: 4px;">
                预约量
                <span class="count">
                          124
                        </span></div>

            </div>
          </div>
        </div>
        <div class="good-at not-acc"><p><span>擅长：</span><label>{{item.goodDisease}}。 </label></p></div>
        <p class="border-bottom"></p></div>
    </div>
    <div class="page">
      <van-pagination v-model="pageIdx" :total-items="totalCount" :items-per-page="pageSize" mode="simple" @change="change" />
    </div>
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  export default {
    name: "doctorList",
    data(){
      return {
        searchValue:"",
        pageIdx:0,
        pageSize:5,
        totalCount:0,
        hlevel: 0,
        value2: 'a',
        hlevels: [
          { text: '三级医院', value: 1},
          { text: '二级医院', value: 2 },
          { text: '一级医院', value: 3 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
        list:[],
      }
    },
    props:['name'],
    mounted() {
      this.onloadlist();
    },
    methods:{
      getDetail(id){
        this.$router.push("/doctor_home/"+id)
      },
      onloadlist(){
        let name = this.$route.params.name;
        this.searchValue = name;
        let pdata = {
          pageIdx:this.pageIdx-1,
          pageSize:this.pageSize,
          name:name
        };
        this.getList(pdata)
      },
      getList(pdata){
        API.doctorListByName(pdata).then(res=>{
          let doctors = res.data.data.list;
          let totalCount = res.data.data.totalCount;
          this.totalCount = totalCount;
          this.list = doctors;
        })
      },
      change(){
        let pdata = {
          pageIdx:this.pageIdx-1,
          pageSize:this.pageSize,
          name:this.searchValue
        };
        this.getList(pdata);
      },
      onCancel(){
        this.$router.back(-1);
      },
      search(){
        this.pageIdx = 0;
        let pdata = {
          pageIdx:this.pageIdx,
          pageSize:this.pageSize,
          name:this.searchValue
        };
        this.getList(pdata);
      }
    }
  }
</script>

<style scoped>
  .list{
    background-color: white;
  }
</style>
