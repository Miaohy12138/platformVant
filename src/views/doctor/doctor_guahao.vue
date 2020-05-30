<template>
  <div>
    <van-nav-bar
          title='挂号'
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
  />
    <div id="app" data-server-rendered="true">
      <section class="p-expert-book">
        <section class="p-expert-book--intro">
          <a  class="p-expert-book--intro-avator" @click="goDoctor(doctor.id)">
          <div class="expertpage--avatar"><img
                  :src="doctor.imageUrl" :alt="doctor.name"
                  :title="doctor.name" class="avatar x-img-fadein"><!----></div>
        </a>
          <dl>
            <dt class="p-expert-book--intro-title">
              {{doctor.name}}
              <span>
                <doctor_level :level="doctor.level"/>
            </span>
            </dt>
            <dt class="p-expert-book--intro-order">
              预约量：<span>10</span>
              评分：<span>4.3</span></dt>
            <dt class="p-expert-book--intro-feature">
              <ul>
                <li>胃胀</li>
                <li>胃胀</li>
                <li>胃炎</li>
                <li>胃炎</li>
              </ul>
            </dt>
          </dl>
<!--          <div class="p-expert-book&#45;&#45;intro-right">-->
<!--            <div class="p-expert-book&#45;&#45;intro-right-rule">-->
<!--              <span class="text">预约规则</span>-->
<!--              <i class="wy-iconfont wy-icon-more"></i>-->
<!--            </div>-->
<!--          </div>-->
        </section>
        <section class="p-expert-book--notice"><!----></section><!---->



        <section class="p-expert-book--schedule">
          <div class="we-collapse-group we-collapse-group--has-border">
            <div class="we-collapse">
              <div class="">
                <div class="we-collapse--title-wrap we-collapse--active">
                  <div data-name="title" class="we-collapse--title" @click="showSchedule" >
                    <i class="we-collapse--title-pre"></i>
                    <h2><b>{{sourcelist[0].hospitalName}}</b> - {{sourcelist[0].departMentName}}</h2>
                    <span class="status highlight">可预约</span>
                    <i class="we-icon-more we-collapse--expanded"></i>
                    <van-icon :name="arricon" size="12" />
                  </div>
                </div>
                <div class="we-collapse--wrapper" style="top: 42.175px; " v-show="scheduleShow"  >
                  <div class="we-collapse--content">
                    <section class="cpt-book-workspace"><!---->
                      <div class="cpt-book-workspace--shift">
                        <ul class="cpt-book-workspace--shift-item">
                          <header>六月</header>
                          <li v-for="item in sourcelist">
<!--                            <b>1天后</b>-->
                            <p class="time">{{item.time}}  {{getDayW(item.time)}}  {{getDayP(item.day)}}</p>
                            <p class="platform">专家-[医院] <b>{{item.price}}.00元</b></p>
                            <button class="we-button we-button-type-primary we-button-size-small we-button-circle" @click="goguahao(item.id,item.doctorId)">预约</button>
                          </li>
                          </ul>
                      </div>

                  <div class="we-popup">
                    <div class="we-popup--mask" style="display: none;">
                    </div>
                    <div class="we-popup--content we-popup--position-bottom" style="height: 76%; display: none;">
                      <button class="we-button cpt-book-workspace--shift-btn we-button-type-default we-button-size-large">选择预约时段</button>
                      <i class="we-icon-close"></i>
                      <p class="cpt-book-workspace--shift-segment"></p>
                    </div>
                  </div>
                </section>
                </div>
                </div>
              </div>
              <div class="we-collapse--mask" style="display: none;"></div>
            </div>
          </div><!----><!---->
        </section>

        <section class="c-book-expert-comment">
          <div class="we-cell">
            <div class="we-cell--content">
              <div class="we-cell--item-left" style="flex-grow:1;">
                <div class="we-cell--text-title">
                  患者评价
                </div>
              </div>
            </div>
          </div>
          <div class="we-cell">
            <div class="we-cell--content">
              <div class="we-cell--item-left" style="flex-grow:unset;">
                <div class="we-cell--text-title">
                  患者对医生的主要印象是：热情亲切，仁心仁德
                </div>
              </div>
              <div class="we-cell--item-right" style="flex-grow:1;">
                <div class="we-cell--text-desc">
                </div><!----></div>
            </div>
          </div>

          <div highlight-color="#3F86FF" class="g-card c-book-expert-comment--card" v-for="item in comments"><!---->
            <div class="content">
              <div class="g-card-row" style="justify-content:space-between;margin-bottom:12px;">
                <div class="g-card-col c-book-expert-comment--card-name text"
                     style="color:#A6A8B6;font-size:14px;margin-right:4px;">
                  {{item.createBy}} <van-rate v-model="item.score" readonly />
                  <i class="wy-iconfont wy-icon-star"></i><i class="wy-iconfont wy-icon-star"></i><i
                        class="wy-iconfont wy-icon-star"></i><i class="wy-iconfont wy-icon-star"></i><i
                        class="wy-iconfont wy-icon-star"></i></div>
                <div class="g-card-col text" style="color:#A6A8B6;font-size:14px;margin-right:0px;">{{item.createTime}}</div>
              </div>
              <div class="g-card-row" style="margin-bottom:9px;">
                <div class="g-card-col text" style="color:#A6A8B6;font-size:12px;margin-right:4px;">确诊疾病：</div>
                <div class="g-card-col text" style="color:#28354C;font-size:12px;margin-right:4px;"><label>尚未确诊</label>
                </div>
              </div><!----><!----><!---->
              <div size="14" class="g-card-row" style="margin-bottom:9px;">
                {{item.content}}
              </div>
            </div>
          </div>
        </section>
        <section class="c-book-expert-recommend">
          <div class="we-cell">
            <div class="we-cell--content">
              <div class="we-cell--item-left" style="flex-grow:1;">
                <div class="we-cell--text-title">
                  你可能还想了解
                </div>
              </div>
              <div class="we-cell--item-right" style="flex-grow:unset;">
                <div class="we-cell--text-desc">

                </div><!----></div>
            </div>
          </div>
          <div class="c-book-expert-recommend--card">
            <div class="g-card" v-for="item in list">
              <div class="g-card--avatar" style="width:2.048rem;height:2.048rem;">
                <span class="g-card--avatar-img"
                                                                                        style="border-radius:50%;"><img
                      :src="item.doctor.imageUrl"
                      class="x-img-fadein"></span></div>
              <div class="content">
                <div has-ellipsis="true" class="g-card-row doctor-info"
                     style="justify-content:start;margin-bottom:6px;">
                  <div class="g-card-col text" style="color:#28354c;font-size:16px;margin-right:8px;">{{item.doctor.name}}</div>
                  <div class="g-card-col text" style="color:#28354c;font-size:14px;margin-right:12px;">
                    <doctor_level :level="item.doctor.level"/>
                  </div>
                  <div class="g-card-col sign"
                       style="color:#fff;font-size:10px;margin-right:8px;line-height:inherit;background-color:#6dbe41;">
                    <label>号</label></div>
                </div>
                <div has-ellipsis="true" class="g-card-row" style="margin-bottom:2px;">
                  {{item.doctor.hospitalName}}
                  <div class="g-card-col text ellipsis" style="color:#A6A8B6;font-size:12px;margin-right:4px;">
                    高级专家特需
                  </div>
                </div>
                <div class="g-card-row" style="margin-bottom:2px;">
                  <div class="g-card-col text" style="color:#ffa900;font-size:12px;margin-right:0px;"><i
                          class="wy-iconfont wy-icon-star"></i>
                  </div>
                  <div class="g-card-col text" style="color:#ffa900;font-size:12px;margin-right:12px;">
                    {{score(item.doctor.id)}}
                  </div>
                  <div class="g-card-col text" style="color:#A6A8B6;font-size:12px;margin-right:4px;">接诊量 {{count(item.doctor.id)}}</div>
                </div>
                <div class="g-card-row" style="margin-bottom:0px;">
                  <div class="g-card-col text ellipsis" style="color:#28354C;font-size:14px;margin-right:4px;">擅长:
                    <label>{{item.doctor.goodDisease}}</label></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  import doctor_level from "../common/doctor_level";
  export default {
    name: "doctor_guahao",
    components:{
      doctor_level
    },
    data() {
      return {
        id: 0,
        scheduleShow: false,
        arricon:'arrow-down',
        sourcelist:[],
        doctor:{},
        comments:[],
        list:[]
      }
    },
    created() {
      let did = this.$route.params.id;
      this.id = did;
      let pdata = {
        doctorId:did
      };
      API.getSourceList(pdata).then(res =>{
        let sourceList  = res.data.data;
        console.log(sourceList);
        this.sourcelist = sourceList;
      });
      let pdata2 = {
        id:did
      };
      API.getDoctorDetail(pdata2).then(res=>{
        let detail = res.data.data.doctor;
        console.log(res);
        this.doctor = detail;
      });
      let pdata3 = {
        id:did,
        type:1,
        pageIdx:0,
        pageSize:2
      };
      API.listComment(pdata3).then(res=>{
        this.comments = res.data.data;
      })
      let pdata4 = {};
      API.recommend(pdata4).then(res=>{
        this.list = res.data.data;
      })
    },
    computed:{
    },
    methods:{
      goDoctor(id){
        this.$router.push("/doctor_home/"+id);
      },
      score(id){
        return Math.ceil(Math.random(id)*5);
      },
      count(id){
        return Math.ceil(Math.random(id)*20);
      },
      onClickLeft(){
        this.$router.back(-1);
      },
      showSchedule(){
        this.scheduleShow = !this.scheduleShow;
        if(this.arricon =='arrow-down'){
          this.arricon = 'arrow-up'
        }else if(this.arricon =='arrow-up'){
          this.arricon = 'arrow-down'
        }
      },
      convertDateFromString(dateString) {
      if (dateString) {
        var date = new Date(dateString.replace(/-/,"/"));
        return date;
      }
      },
      getDayW(v){
        let day = this.convertDateFromString(v).getDay();
        switch (day) {
          case 1:
            return "周一";
          case 2:
            return "周二";
          case 3:
            return "周三";
          case 4:
            return "周四";
          case 5:
            return "周五";
          case 6:
            return "周六";
          case 7:
            return "周日";
        }
      },
      getDayP(v){
        if(v==1){
          return "上午"
        }else if(v==2){
          return "下午"
        }else if(v==0){
          return "全天"
        }
      },
      goguahao(id,doctorId){
        this.$router.push("/guahao_page/"+id+"/"+doctorId);
      }
    }
  }
</script>

<style scoped>

</style>
