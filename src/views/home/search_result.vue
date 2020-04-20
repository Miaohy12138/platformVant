<template>
  <div class="main">
    <div class="search">
      <van-search
              v-model="searchValue"
              placeholder="请输入医院、疾病、科室关键字"
              input-align="left"
              show-action
              @cancel="onCancel"
              @search="search"
              autofocus
      />
    </div>
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab title="综合"></van-tab>
        <van-tab title="医院"><hospital_list :name="searchValue"></hospital_list></van-tab>
        <van-tab title="医生">医生</van-tab>
        <van-tab title="疾病">疾病</van-tab>
        <van-tab title="科室">科室</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
  import hospital_list from "../hospital/hospital_list";
  export default {
    name: "search-result",

    components:{
      hospital_list,
    },
    data(){
      return {
        searchValue
      }
    },
    mounted() {
      let name = this.$route.params.name;
      console.log(name);
    },
    data(){
      return {
        searchValue:"",
        active:1,
      }
    },
    methods:{
      onCancel(){
        this.$router.back(-1);
      },
      search(){

      }

    },
  }
</script>

<style scoped>

</style>
