<template>
  <div class="home">
    <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            input-align="center"

            @focus="focus"

    />
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
  import HomeFooter from '../../views/footer'
  export default {
    data(){
      return{
        value:""
      }
    },
    name: "Home",
    components:{
      HomeFooter
    },
    methods:{
      focus(){
        console.log("aaa");
        this.$router.push("/search")
      },

    }
  }
</script>

<style  scoped>

</style>
