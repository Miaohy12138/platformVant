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
<!--      animated 会使下拉菜单失效-->
      <van-tabs v-model="active" v-if="update">
        <van-tab title="综合"></van-tab>
        <van-tab title="医院"><hospital_list :name="searchValue"></hospital_list></van-tab>
        <van-tab title="医生"><doctor_list :name="searchValue"></doctor_list></van-tab>
        <van-tab title="疾病">疾病</van-tab>
        <van-tab title="科室">科室</van-tab>
      </van-tabs>
    </div>
  </div>
</template>·

<script>
  import hospital_list from "../search/hospital_list";
  import doctor_list from "../search/doctor_list";
  export default {
    name: "search-result",

    components:{
      hospital_list,
      doctor_list
    },
    mounted() {
      let name = this.$route.params.name;
      this.searchValue = name;
    },
    data(){
      return {
        searchValue:"",
        active:1,
        update:true
      }
    },
    methods:{
      reload() {
        // 移除组件
        this.update = false
        // 在组件移除后，重新渲染组件
        // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
        this.$nextTick(() => {
          this.update = true
        })
      },
      onCancel(){
        this.$router.back(-1);
      },
      search(){
        this.$router.push('/search_result/'+this.searchValue).catch(err=>{

        })
        this.reload()
      }

    },
  }
</script>

<style scoped>

</style>
