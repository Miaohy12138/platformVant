<template>
  <div class="search">
    <div class="searchtab">
      <van-search
              v-model="value"
              placeholder="请输入医院、疾病、科室关键字"
              input-align="left"
              show-action
              @cancel="onCancel"
              @search="search"
              autofocus
      />
    </div>

    <div class="tags-container" v-show="tagShow">
      <div class="tag-title">
        发现
      </div>
      <div class="tags">
        <van-tag color="#F2F2F2" text-color="#6E6E6E" round size="large ">感冒</van-tag> &nbsp;
        <van-tag color="#F2F2F2" text-color="#6E6E6E" round size="large ">腰椎间盘突出</van-tag>&nbsp;
        <van-tag color="#F2F2F2" text-color="#6E6E6E" round size="large ">发热</van-tag>&nbsp;
        <van-tag color="#F2F2F2" text-color="#6E6E6E" round size="large ">上呼吸道感染</van-tag>&nbsp;
        <van-tag color="#F2F2F2" text-color="#6E6E6E" round size="large ">脱发</van-tag>&nbsp;
        <van-tag color="#F2F2F2" text-color="#6E6E6E" round size="large ">龋齿</van-tag>&nbsp;
      </div>
    </div>
    <div class="search-result" v-show="resultShow">

    </div>
  </div>
</template>

<script>
  export default {
    name: "search",
    data(){
      return{
        value:"",
        tagShow:true,
        resultShow:false
      }
    },
    methods:{
      onCancel(){
        this.$router.back(-1)
      },
      search(data){
        this.$router.push("/search_result/"+data)
      }
    }
  }
</script>

<style scoped>
  .search{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background: white;
  }
  .tags-container{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .search-result{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .tag-title{
    font-size: 0.6rem;
  }
  .tags{
  }
</style>
