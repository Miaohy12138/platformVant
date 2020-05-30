<template>
  <div id="bottom">
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
<!--      <van-tabbar-item replace to="/news" icon="search">-->
<!--        发现-->
<!--      </van-tabbar-item>-->
      <van-tabbar-item replace to="/main" icon="user-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        active:'home',
      }
    },
    mounted(){
      this.active = this.$route.path.slice(1);
    }
  }
</script>

<style lang="stylus" scoped>
  #bottom
    width: 100%;
    // height: 1.4rem;
    background: yellow;
    position: fixed;
    bottom: 0;
    color: #666
    background white
    .bottom-ul
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.45rem;
      li
        width 33%
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align center
        span
          font-size .3rem
        i
          font-size .55rem
      .router-link:hover,.router-link-active
        color: #25b5fe;
</style>
