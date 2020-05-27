<template>
  <div>
    <van-nav-bar
            title="挂号信息"
            left-arrow
            @click-left="goback"
    />
    <section>
      <div class="booking-reservation--doctor">
        <div class="expertpage--avatar"><img
                src="https://kano.guahao.cn/r4o2590723_image140.jpg?resize=140x140&amp;webp=80"
                class="avatar x-img-fadein" alt="朱兰香" title="朱兰香" normal="loaded"><!----></div>
        <span class="booking-reservation--doctor-name">{{sourceItem.doctorName}}</span>医生
      </div>
      <section class="booking-reservation--basic-info">
        <div class="we-cell">
          <div class="we-cell--content" style="border-top: none; border-bottom: none;">
            <div class="we-cell--item-left" style="flex-grow: unset;">
              <div class="we-cell--text-title">
                就诊医院：
              </div>
            </div>
            <div class="we-cell--item-right" style="flex-grow: 1;">
              <div class="we-cell--text-desc">
                {{sourceItem.hospitalName}}
              </div><!----></div>
          </div>
        </div>
        <div class="we-cell">
          <div class="we-cell--content" style="border-top: none; border-bottom: none;">
            <div class="we-cell--item-left" style="flex-grow: unset;">
              <div class="we-cell--text-title">
                科室医生：
              </div>
            </div>
            <div class="we-cell--item-right" style="flex-grow: 1;">
              <div class="we-cell--text-desc">
                {{sourceItem.departMentName}} - {{sourceItem.doctorName}}
              </div><!----></div>
          </div>
        </div>
        <div class="we-cell">
          <div class="we-cell--content" style="border-top: none; border-bottom: none;">
            <div class="we-cell--item-left" style="flex-grow: unset;">
              <div class="we-cell--text-title">
                门诊时间：
              </div>
            </div>
            <div class="we-cell--item-right" style="flex-grow: 1;">
              <div class="we-cell--text-desc tip">
                {{sourceItem.time}}  {{getDayW(sourceItem.time)}}  {{getDayP(sourceItem.day)}}
              </div><!----></div>
          </div>
        </div>
        <div class="we-cell">
          <div class="we-cell--content" style="border-top: none; border-bottom: none;">
            <div class="we-cell--item-left" style="flex-grow: unset;">
              <div class="we-cell--text-title">
                门诊类型：
              </div>
            </div>
            <div class="we-cell--item-right" style="flex-grow: 1;">
              <div class="we-cell--text-desc">
                专家门诊
              </div><!----></div>
          </div>
        </div>
        <div class="we-cell">
          <div class="we-cell--content" style="border-top: none; border-bottom: none;">
            <div class="we-cell--item-left" style="flex-grow: unset;">
              <div class="we-cell--text-title">
                费用：
              </div>
            </div>
            <div class="we-cell--item-right" style="flex-grow: 1;">
              <div class="we-cell--text-desc">
                {{sourceItem.price}}元 （挂号费）
              </div><!----></div>
          </div>
        </div>
      </section>
      <section class="booking-reservation--tips">
        <div class="we-collapse">
          <div class="">
            <div class="we-collapse--title-wrap we-collapse--active">
              <div class="we-collapse--title"><i class="we-collapse--title-pre"></i>
                <p class="we-collapse--title-text"><span>挂号费由医院自行设定，平台不收取任何额外费用。</span><br>我已了解并同意以下规则（点击查看详情）</p><i
                        class="we-icon-more we-collapse--expanded"></i></div>
            </div>
            <div class="we-collapse--wrapper" style="display: none; top: 61.4px; height: 0px;">
              <div class="we-collapse--content">
                <ul>
                  <li>停诊将短信通知，请保持手机畅通</li>
                  <li>实名制预约，就诊人信息不符将无法取号</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="we-collapse--mask" style="display: none;"></div>
        </div>
      </section>
      <section class="booking-reservation--patient-input">
        <van-cell-group>
          <van-cell title="就诊人" :value="visitpersonName" is-link  @click="goVisist"/>

          <van-cell title="初/复诊：" :value="firstName"  is-link @click="showfirst"/>
          <van-action-sheet
                  v-model="showFirst"
                  :actions="actions"
                  description="选择疾病"
                  @select="selFirst"
          />
        </van-cell-group>
        <van-field
                v-model="cardId"
                name="卡号"
                label="卡号"
                placeholder="       请输入卡号（自费患者无需填写）"
        />
<!--        <van-cell title="所选疾病" :value="diseaseName"  is-link @click="showDiesase"/>-->
<!--        <van-action-sheet-->
<!--                v-model="showDisease"-->
<!--                :actions="diseases"-->
<!--                description="选择疾病"-->
<!--                @select="selDisease"-->
<!--        />-->
        <div class="booking-reservation--patient-input-tzx">
          <header>搭配服务，减少风险</header>
          <p><b>9.00元</b>
            停诊保障服务：电话优先通知、停诊一对一改约或200.00元停诊补偿。详情请见<em>《保障说明》</em></p>
        </div>
      </section>
      <button class="we-button booking-reservation--submit-btn we-button-type-primary we-button-size-large" @click="submit">提交</button>
    </section>
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  import { Toast } from 'vant';
  export default {
    name: "guahao_page",
    data(){
      return {
        visitpersonId:0,
        visitpersonName:'',
        sourceItem:{},
        isFirst:0,
        cardId:'',
        diseaseId:0,
        diseaseName:'',
        showDisease:false,
        showFirst:false,
        firstName:'',
        diseases:[
          { name: '选项',id:1},
          { name: '禁用选项', id:2 },
        ],
        isFirst:0,
        actions:[
          { name: '初诊',id:1},
          { name: '复诊', id:2},
        ]
      }
    },
    created() {
      let sid = this.$route.params.id;
      let doctorId = this.$route.params.doctorId;
      let pdata ={
        id:sid
      };
      API.getSourceDetail(pdata).then(res=>{
        console.log(res);
        this.sourceItem = res.data.data;
      });
      this.visitpersonId = sessionStorage.getItem('visitpersonId');
      this.visitpersonName = sessionStorage.getItem('visitpersonName');
    },
    methods:{
      submit(){
        let pdata = {
          order:{
            amount:this.sourceItem.price,
            sourceId:this.sourceItem.id,
            isPay:0,
            isFirst:this.isFirst,
            cardId:this.cardId,
          },
          actionType:1
        };
        API.editOrder(pdata).then(res=>{
          console.log(res);
          sessionStorage.setItem("payFormStr",res.data.data);
          let code = res.data.code;
          if(code===0){
            this.$router.push("/pay_home")
           //this.$router.back(-1);
          }else if(code ===555){
            Toast.fail({message:'请勿重复预约',duration:500});
            this.$router.push("")
          }

        });
      // console.log(pdata);


      },
      goback(){
        this.$router.back(-1);
      },
      showDiesase(){
        this.showDisease = true;
      },
      showfirst(){
        this.showFirst = true;
      },
      selDisease(action){
        console.log(action);
        this.diseaseName = action.name;
        this.diseaseId = action.id;
        this.showDisease = false;
      },
      convertDateFromString(dateString) {
        if (dateString) {
          var date = new Date(dateString.replace(/-/,"/"));
          return date;
        }
      },
      selFirst(action){
        this.isFirst = action.id;
        this.firstName = action.name;
        this.showFirst = false;
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
      goVisist(){
        let userId = sessionStorage.getItem("userId")
        this.$router.push("/visitpersoni/"+userId)
      }
    }
  }
</script>

<style scoped>

</style>
