<template>
  <span>
    {{getlevel}}
  </span>
</template>

<script>
  export default {
    name: "dlevel",
    props:["level"],
    computed:{
      getlevel(){
        let dlevel = "";
        switch (this.level) {
          case 1:
            dlevel = "特聘专家";
            break;
          case 2:
            dlevel = "主任医师";
            break;
          case 3:
            dlevel = "副主任医师";
            break;
          case 4:
            dlevel = "主治医师";
            break;
          case 5:
            dlevel = "医师";
            break;
        }
        return dlevel
      }
    }

  }
</script>

<style scoped>

</style>
