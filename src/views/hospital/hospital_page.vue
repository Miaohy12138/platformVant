<template>
  <div class="main">
    <section class="hospital-index">
      <van-nav-bar
              title="医院详情"
              left-text="返回"
              left-arrow
              @click-left="back"
      />
      <section class="hospital-summary-introduce">
        <div class="info">
          <div class="left">
            <img :src="hospital.coverUrl" class="x-img-fadein">
          </div>
          <div class="right">
            <div class="name">{{hospital.name}}</div>
            <div class="labels">
              <label style="display:;">公立医院</label>
              <label style="display:;">综合医院</label>
              <label style="display:;"></label>
            </div>
            <div class="level"><hospital_level :level="hospital.level"></hospital_level></div>
          </div>
        </div>
        <div class="address">
          <div class="detail">
                            <span>
                                <i class="icon"></i>
                            </span>
            {{hospital.address}}

          </div>
          <div class="map">导航</div>
        </div>
        <div class="data-list"></div>
      </section>
      <section class="hospital-summary-info">
        <div class="hospital-summary-info--part">
          <div class="trapezoid"></div>
          <div class="title">
            <div class="name">重点科室</div>
            <a @click="goDepartmentList">
              <div class="left-icon"></div>
            </a>
          </div>
          <div class="content">
            <ul>
              <li>
                <div class="circle green"></div>
                <span>市级重点</span>
              </li>
              <a href="https://wy.guahao.com/hospital/experts?hospitalId=139718209241750000&amp;deptId=139718211032661000">
                <li>心内科</li>
              </a>
            </ul>
          </div>
        </div>
        <div class="hospital-summary-info--part">
          <div class="trapezoid"></div>
          <div class="title">
            <div class="name">医院简介</div>
            <div class="down-icon" style="display:none;"></div>
          </div>
          <div class="content">
            <pre id="intro" class="wrap">
              {{hospital.introduction}}
            </pre>
          </div>
        </div>
        <!---->
        <div id="hospital-summary-info--traffic" class="hospital-summary-info--part">
          <div class="trapezoid"></div>
          <div class="title">
            <div class="name">乘车路线</div>
            <div class="down-icon" style="display:none;"></div>
          </div>
          <div class="content">
            <pre id="traffic" class="wrap">
                <p>171路：旭景园&rarr;盛泽医院。首班车上午6:20，末班车下午5:55 盛泽医院&rarr;旭景园。首班车上午6:20，末班车下午5:55 旭景园&mdash;旭景园西&mdash;红安社区&mdash;镜湖公园西&mdash;盛虹小区&mdash;盛泽派出所&mdash;税务分局&mdash;妇幼保健中心&mdash;大润发（春之声广场）&mdash;第八加油站&mdash;丝绸商城&mdash;南草圩桥&mdash;西环路口&mdash;皇家领誉&mdash;财富中心&mdash;盛泽医院</p>
            </pre>
          </div>
        </div>
      </section>
      <!---->
    </section>
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  import hospital_level from "../common/hospital_level";
  export default {
    name: "hospital_page",
    data(){
      return {
        hospital:"",
        departmentIds:""
      }
    },
    components:{
      hospital_level
    },
    mounted() {
      let id = this.$route.params.id;
      let departmentIds = this.$route.params.departmentIds;
      this.departmentIds = departmentIds;
      let pdata = {
        id:id
      };
      API.getHospitalDetail(pdata).then(res=>{
        this.hospital = res.data.data.hospital;
      })
    },
    methods:{
      back(){
        this.$router.back(-1);
      },
      goDepartmentList(){
        let hospitalId = this.$route.params.id;
        this.$router.push("/department_list/"+hospitalId+"/"+this.departmentIds).catch(err=>{

        })
      }
    }
  }
</script>

<style scoped>

</style>
