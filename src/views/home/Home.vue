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
        this.$router.push("/search").catch(err=>{

        })
      },

    }
  }
</script>

<style  scoped>

</style>
