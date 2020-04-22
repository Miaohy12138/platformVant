<template>
  <div class="list">
    <div class="filter">
      <van-dropdown-menu>
        <van-dropdown-item v-model="hlevel" :options="hlevels"  @change="search"/>
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="list-main">
      <van-cell v-for="item in list" :key="item.id" @click="goDetail(item.id)">
        <van-row>
          <van-col span="6"><van-image  width="100" height="65" :src="item.coverUrl"></van-image></van-col>
          <van-col span="10" offset="4">
            <div class="item-right">
              <div class="item-right-up">
                {{item.name}}
              </div>
              <div class="item-right-down">
                {{item.introduction}}
              </div>
            </div>
          </van-col>
        </van-row>
      </van-cell>
    </div>
   <div class="page">
     <van-pagination v-model="pageIdx" :total-items="totalCount" :items-per-page="pageSize" mode="simple" @change="change" />
   </div>
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  export default {
    name: "hospitalList",
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
          { text: '销量排序', value: 2 },
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
