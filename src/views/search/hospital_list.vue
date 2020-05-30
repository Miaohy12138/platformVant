<template>
  <div class="list">
    <div class="filter">
      <van-dropdown-menu>
        <van-dropdown-item v-model="hlevel" :options="hlevels"  @change="search"/>
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="list-main">
      <div data-v-f9730fec="" class="component-hospital-card" v-for="item in list" @click="goDetail(item.id)">
        <div class="g-card">
          <div class="g-card--avatar" style="width: 3.072rem; height: 2.304rem;"><span
                  class="g-card--avatar-img"><img :src="item.coverUrl"
                                                  class="x-img-fadein" normal="loaded"></span></div>
          <div class="content">
            <div class="g-card-row" style="margin-bottom: 8px;">
              <div class="g-card-col text ellipsis"
                   style="color: rgb(40, 53, 76); font-size: 14px; margin-right: 4px; -webkit-line-clamp: 2; font-weight: bold;">
                {{item.name}}
              </div>
            </div>
            <div class="g-card-row" style="justify-content: space-between; margin-bottom: 7px;">
              <div class="g-card-row--merge-col">
                <div class="g-card-col text"
                     style="color: rgb(43, 49, 61); font-size: 12px; margin-right: 12px;"><hospital_level :level="item.level"/>
                </div>
              </div>
            </div>
            <div class="g-card-row component-accurate-hospital-card--count"
                 style="justify-content: space-between; margin-bottom: 7px;">
              <div class="g-card-row--merge-col">
                <div class="g-card-col text ellipsis"
                     style="color: rgb(157, 158, 167); font-size: 12px; margin-right: 4px;">
                  {{item.address}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <div class="page">
     <van-pagination v-model="pageIdx" :total-items="totalCount" :items-per-page="pageSize" mode="simple" @change="change" />
   </div>
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  import hospital_level from "../common/hospital_level";
  export default {
    name: "hospitalList",
    components:{
      hospital_level
    },
    data(){
      return {
        searchValue:"",
        pageIdx:0,
        pageSize:5,
        totalCount:0,
        hlevel: 0,
        value2: 0,
        hlevels: [
          { text: '全部医院', value: 0},
          { text: '三级医院', value: 1},
          { text: '二级医院', value: 2 },
          { text: '一级医院', value: 3 },
        ],
        option2: [
          { text: '默认排序', value: 0 },
          { text: '好评排序', value: 1 },
          { text: '预约数量', value: 2 },
        ],
        list:[],
      }
    },
    props:['name'],
    computed:{
      data(){
        this.list.forEach(ele => {
          ele.coverUrl = require('P:\\server\\upFiles\\' + ele.name);
        });
        return this.list;
      }
    },
    mounted() {
      this.onloadlist();
    },
    methods:{
      onloadlist(){
        let name = this.$route.params.name;
        this.searchValue = name;
        let pdata = {
          pageIdx:this.pageIdx-1,
          pageSize:this.pageSize,
          name:name,
          level:this.hlevel
        };
        this.getList(pdata)
      },
      getList(pdata){
        API.getHospitalList(pdata).then(res=>{
          let hospitals = res.data.data.hospitals;
          let totalCount = res.data.data.totalCount;
          this.totalCount = totalCount;
          this.list = hospitals;
        })
      },
      change(){
        let pdata = {
          pageIdx:this.pageIdx-1,
          pageSize:this.pageSize,
          name:this.searchValue,
          level:this.hlevel
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
          name:this.searchValue,
          level:this.hlevel
        };
        this.getList(pdata);
      },
      goDetail(id){
        this.$router.push('/hospital_home/'+id).catch(err=>{

        });
      }
    }
  }
</script>

<style scoped>
  .list{
    background-color: white;
  }
  .header{

  }
  .filter{
  }
  .list-main{

  }
</style>
