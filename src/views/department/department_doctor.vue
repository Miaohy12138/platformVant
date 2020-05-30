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
      <div class="dep-doctor--item" @click="goDoctorHome(item.id)" v-for="item in doctors">
        <a >
          <div class="img">
            <img
                 :src="item.imageUrl">
          </div>
          <dl>
            <dt>
              <strong>{{item.name}}</strong>
              <span>主任医师</span>
              <i class="h">号</i>
            </dt>
            <dd>
            <span class="score">
              <em>9.</em>
              3
            </span>
              接诊量：401
            </dd>
            <dd>擅长：{{item.goodDisease}}</dd>
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
        doctors:[],
        pageIdx:0,
        pageSize:10,
        hospitalId:0,
        departmentId:0,
        totalCount:0
      }
    },
    components:{

    },
    mounted(){
      let hospitalId = this.$route.params.hospitalId;
      this.hospitalId = hospitalId;
      let departmentId = this.$route.params.departmentId;
      this.departmentId = departmentId
      let pdata = {
        hospitalId:hospitalId,
        departmentId:departmentId,
        pageIdx:this.pageIdx,
        pageSize:this.pageSize
      };
      API.getDoctorList(pdata).then(res=>{
        console.log(res.data.data);
        this.doctors = res.data.data.doctors;
        this.totalCount = res.data.data.totalCount;
      })
    },
    methods:{
      goDoctorHome(id){
        this.$router.push("/doctor_home/"+id)
      },
      onClickLeft(){
        this.$router.back(-1);
      }
    }
  }
</script>

<style scoped>
  .doctor-list{
  padding-top: 1.45rem;
  }
</style>
