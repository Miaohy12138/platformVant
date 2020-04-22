<template>
  <div>
    {{getlevel}}
  </div>
</template>

<script>
  export default {
    name: "hlevel",
    props:["level"],
    computed:{
      getlevel(){
        let hlevel = "";
        switch (this.level) {
          case 1:
            hlevel = "三级甲等";
            break;
          case 2:
            hlevel = "三级乙等";
            break;
          case 3:
            hlevel = "三级丙等";
            break;
          case 4:
            hlevel = "二级甲等";
            break;
          case 5:
            hlevel = "二级乙等";
            break;
          case 6:
            hlevel = "二级丙等";
            break;
          case 7:
            hlevel = "一级甲等";
            break;
          case 8:
            hlevel = "一级乙等";
            break;
          case 9:
            hlevel = "一级丙等";
            break;
        }
        return hlevel
      }
    }

  }
</script>

<style scoped>

</style>
