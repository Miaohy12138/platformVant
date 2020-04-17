<template>
  <div class="header">
    <van-nav-bar
            :title='title'
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />
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
/**
 * .header
 width 100%
 height 1.45rem
 background white
 position fixed
 z-index 1
 */
</script>

<style lang="stylus" scoped>


</style>
