<template>
  <div class="header">
    <div class="nav">
      <van-nav-bar
              :title='title'
              left-text="返回"
              left-arrow
              @click-left="onClickLeft"
      />
    </div>
  </div>
</template>

<script>
export default {
  name:"header",
  props:[
      "title"
  ],
  methods:{
    onClickLeft(){
      this.$router.back(-1)
    }
  }
}

</script>

<style lang="stylus" scoped>
   .header{
     padding-top 0.2rem
     width 100%
     height 1.45rem
     background white
     position fixed
     z-index 3
   }
  .nav{
    padding-bottom 0.2rem
  }

</style>
