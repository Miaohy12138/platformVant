<template>
  <div class="list">
<!--    <div class="header">-->
<!--      <van-search-->
<!--              v-model="searchValue"-->
<!--              placeholder="请输入医院、疾病、科室关键字"-->
<!--              input-align="left"-->
<!--              show-action-->
<!--              @cancel="onCancel"-->
<!--              @search="search"-->
<!--              autofocus-->
<!--      />-->
<!--    </div>-->
    <div class="filter">
      <van-dropdown-menu>
        <van-dropdown-item v-model="hlevel" :options="hlevels" title="医院等级"/>
        <van-dropdown-item v-model="value2" :options="option2" title="条件筛选"/>
      </van-dropdown-menu>
    </div>
    <div class="list-main">
      <van-cell v-for="item in list" :key="item.id" :title="item.name" />
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
  .header{

  }
  .filter{
  }
  .list-main{

  }
</style>
