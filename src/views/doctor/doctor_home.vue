<template>
  <div class="main">
    <van-nav-bar
            title='医生主页'
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
    />
    <!---->
    <section id="expert-intro" class="expert-intro">
      <div class="expert-intro-wrap">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
             class="expert-intro--wy-logo x-img-fadein">
        <div class="expert-intro--info">
          <div class="expert-intro--intro">
            <p class="line1">{{doctor.name}} <van-icon :name="likeicon" @click="like" /></p>

            <div class="line2">
              <span class="technical-title"><doctor_level :level="doctor.level"></doctor_level></span>
              <span class="hos-dept">高级专家特需</span>
            </div>

            <a  class="line3" @click="gohospital(doctor.hospitalId)">
              <span class="hos-name">{{doctor.hospitalName}}  </span>
              <div class="float-together">
                <div class="hos-level">三甲</div>
                <i class="wy-iconfont wy-icon-more"></i>
              </div>
            </a>
          </div>
          <div class="expertpage--avatar expert-intro--avatar">
            <img :src="doctor.imageUrl" :alt="doctor.name"
                 :title="doctor.name" class="avatar x-img-fadein">
            <!---->
          </div>
        </div>
        <div class="expert-intro--statistics">
          <div class="expert-intro--statistic-wrap">
            <div class="expert-intro--statistic-item">
              <span class="expert-intro--statistic-item-num null">暂无</span>
              <span class="expert-intro--statistic-item-title">综合好评</span>
            </div>
            <div class="expert-intro--statistic-item">
              <span class="expert-intro--statistic-item-num">814</span>
              <span class="expert-intro--statistic-item-title">挂号量</span>
            </div>
            <div class="expert-intro--statistic-item">
              <span class="expert-intro--statistic-item-num null">暂无</span>
              <span class="expert-intro--statistic-item-title">问诊量</span>
            </div>
            <!---->
          </div>
          <!---->
        </div>
      </div>
      <div class="expert-intro--feature">
        <span class="expert-intro--feature-text">介绍：{{doctor.introduction}}</span>

      </div>


    </section>
    <div class="common-expert-skeleton">
      <div id="expert-service" class="expert-service-wrap">
        <div class="header">
          <span class="header-title">医生服务</span>
        </div>
        <div class="content">
          <div class="we-grid grid-entrance-list" style="border-top:1px solid #eee;;">
            <div class="we-grid-item grid-enterance"
                 v-show="showCode==1"
                 style="-webkit-box-flex:0 0 33.333333333333336%;-webkit-flex:0 0 33.333333333333336%;-ms-flex:0 0 33.333333333333336%;flex:0 0 33.333333333333336%;border-bottom:0;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-right:0;">
              <div class="we-grid-item--image"  @click="guahao">
                  <span class="module-icon">
                    <img  src="https://kano.guahao.cn/ZtH163033186?webp=80" class="x-img-fadein" alt="预约挂号" normal="loaded" >
                  </span>
              </div>
              <p>
              <span class="module-label">预约挂号
          </span>
              </p>
            </div>
            <div class="we-grid-item grid-enterance" v-show="showCode==0"

                 style="-webkit-box-flex:0 0 33.333333333333336%;-webkit-flex:0 0 33.333333333333336%;-ms-flex:0 0 33.333333333333336%;flex:0 0 33.333333333333336%;border-bottom:0;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-right:0;">
              <div class="we-grid-item--image"  >
                  <span class="module-icon">
                    <img src="https://kano.guahao.cn/cDA163043335?webp=80" class="x-img-fadein" alt="暂停挂号" normal="loaded" >
                  </span>
              </div>
              <p>
              <span class="module-label">暂停挂号
          </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  import doctor_level from "../common/doctor_level";
  import {Toast} from "vant";
  export default {
    name: "doctor_home",
    components:{
      doctor_level
    },
    data(){
      return {
        id:0,
        doctor:{},
        hospital:{},
        likeicon:'star-o',
        showCode:0,
      }
    },
    methods:{
      gohospital(id){
        this.$router.push("/hospital_home/"+id);
      },
      onClickLeft(){
        this.$router.back(-1);
      },
      guahao(){
        this.$router.push("/doctor_guahao/"+this.id);
      },
      like(){
        if(this.likeicon=='star'){
          this.likeicon = 'star-o'
        }else if(this.likeicon =='star-o'){
          this.likeicon = 'star'
        }
        let pdata = {
          actionType:1,
          targetId:this.id,
          targetType:2
        };
        API.editLike(pdata).then(res=>{
          Toast.success({message: '收藏成功', duration: 500});
        })

      }
    },
    created() {
      let did = this.$route.params.id;
      this.id = did;
      let pdata = {
        id:did
      };
      let hospitalId = 0;
      API.getDoctorDetail(pdata).then(res=>{
        this.doctor = res.data.data.doctor;
        console.log(res.data.data.doctor);
        hospitalId=res.data.data.doctor.hospitalId;
      });
      let hdata = {
        id:hospitalId
      };
      API.getHospitalDetail(hdata).then(res=>{
        console.log(res);
      });
      let pdata2 = {
        id:did
      };
      API.hasSource(pdata2).then(res=>{
        let code = res.data.data;
        this.showCode = code;
      })
    }
  }
</script>

<style scoped>
.main{
  background-color: white;
}
</style>
