<template>
  <div>
    <p v-html="payFormStr">{{payFormStr}}</p>
  </div>
</template>

<script>
  export default {
    name: "pay_home",
    data(){
      return {
        payFormStr:""
      }
    },
    created() {
      let str = sessionStorage.getItem("payFormStr");
      this.payFormStr = str;
    },
    watch:{
      payFormStr(n,o){
        document.forms[0].submit();
      }
    }
  }

</script>

<style scoped>

</style>
