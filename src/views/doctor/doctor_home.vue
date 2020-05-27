<template>
  <div class="main">
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

            <a href="https://wy.guahao.com/hospital/137228411109186000" class="line3">
              <span class="hos-name">苏州市广济医院  </span>
              <div class="float-together">
                <div class="hos-level">三甲</div>
                <i class="wy-iconfont wy-icon-more"></i>
              </div>
            </a>
          </div>
          <div class="expertpage--avatar expert-intro--avatar">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="曲一凡"
                 title="曲一凡" class="avatar x-img-fadein">
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

        <a href="https://wy.guahao.com/expert/personal/b5e60200-e598-4be8-b55d-5669945cda41000?fromWysApp=0"
           class="get-together" onclick="monitorEvents[124]()"><span class="expert-intro--feature-link">医生信息</span>
          <img src="https://kano.guahao.cn/P2c161998685?webp=80" class="link-more x-img-fadein" normal="loaded"></a>
      </div>
      <div class="we-dialog expert-intro--note">
        <div class="we-dialog--mask" style="display:none;"></div>
        <div class="we-dialog--container" style="display:none;">
          <ul class="note-list">
            <i class="note-cancel wy-icon-close"></i>
            <li class="note-item">
              <p class="item-title">业内专家</p>
              <p class="item-content">综合微医平台数据、《复旦版医院排行榜》等权威机构公开信息，评选出专业资质强的优质医生</p>
            </li>
            <li class="note-item">
              <p class="item-title">患者喜爱</p>
              <p class="item-content">基于微医平台沉淀的海量用户评价数据，直接反映患者的认可与满意程度</p>
            </li>
            <li class="note-item">
              <p class="item-title">微医精选</p>
              <p class="item-content">由微医专家团队采用统一评判标准，对医生在平台的各项服务质量进行综合考核</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="wand-dialog">
        <!---->
        <div img-url="" url="javascript:;" width="inherit" height="inherit" class="wand-dialog-text wand-dialog__wrap"
             style="display:none;">
          <div class="wand-dialog-text__container">
            <div class="wand-dialog-text__close"></div>
            <p class="wand-dialog-text__title">抗疫英雄</p>
            <div class="wand-dialog-text__content wand-dialog-text__content--long">
              在疫情期间，医生远程驰援抗击疫情，在线为患者爱心义诊，特授予医生“抗疫英雄”称号，感谢医生的帮助与付出！
            </div>
            <div class="wand-dialog-text__btns">
              <!---->
              <!---->
            </div>
          </div>
        </div>
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

                 style="-webkit-box-flex:0 0 33.333333333333336%;-webkit-flex:0 0 33.333333333333336%;-ms-flex:0 0 33.333333333333336%;flex:0 0 33.333333333333336%;border-bottom:0;-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-right:0;">
              <div class="we-grid-item--image"  @click="guahao">
                  <span class="module-icon">
                    <img src="https://kano.guahao.cn/ZtH163033186?webp=80" class="x-img-fadein" alt="预约挂号" normal="loaded">
                  </span>
              </div>
              <p>
              <span class="module-label">预约挂号
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
      }
    },
    methods:{
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
          console.log(res);
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
      })
    }
  }
</script>

<style scoped>
.main{
  background-color: white;
}
</style>
