<template>
  <div class="main">
    <div class="header">
      <van-nav-bar
              title="标题"
              left-text="返回"
              left-arrow
              @click-left="onClickLeft"
      />
    </div>
    <div class="doctor-list">
    <div class="we-list dep-doctor--list">
      <div class="dep-doctor--item">
        <a href="https://wy.guahao.com/expert/137237106916017000?hospDeptId=137237079363072000&amp;departmentId=137237079363072000&amp;hospitalId=137228411106570000">
          <div class="img">
            <img onerror="this.src='https://static.guahao.cn/img/character/doc-unknow.png'"
                 src="https://kano.guahao.cn/pYf27810846_image140">
          </div>
          <dl>
            <dt>
              <strong>钱志红</strong>
              <span>主任医师</span>
              <i class="h">号</i>
              <!---->
              <!---->
              <!---->
            </dt>
            <dd>
            <span class="score">
              <em>9.</em>
              3
            </span>
              接诊量：401
            </dd>
            <dd>擅长：妇产科肿瘤、子宫内膜异位症的手术、妇科微创手术及妇科内分泌不孕症诊治。</dd>
          </dl>
        </a>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  export default {
    name: "department_doctor",
    data(){
      return {

      }
    },
    components:{

    },
    mounted(){
      let hospitalId = this.$route.params.hospitalId;
      let departmentId = this.$route.params.departmentId;
      console.log(hospitalId);
      console.log(departmentId);
    },
    methods:{

    }
  }
</script>

<style scoped>
  .doctor-list{
  padding-top: 1.45rem;
  }
</style>
