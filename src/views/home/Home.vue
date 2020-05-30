<template>
  <div class="home">
    <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            input-align="center"
            @focus="focus"
    />

    <div class="page-search-index">
      <div class="we-sticky g-filter-ssr--wrap we-sticky--native" style="display: none; top: 44px;">
        <div class="">
          <section class="g-filter-ssr">
            <ul class="g-filter-ssr--head"></ul>
            <div class="g-filter-ssr--item"><span><div class="g-filter-ssr--radiobox" style="display: none;"><ul></ul></div><div
                    class="g-filter-ssr--content" style="display: none;"><section class="components-screenbox"><ul></ul><div
                    class="components-screenbox--btn-group"><a class="components-screenbox-reset">重置</a><a
                    class="components-screenbox-confirm">确定</a></div></section></div></span></div>
            <div class="we-cascade-picker">
              <header class="we-cascade-picker--header" style="display: none;"><a href="javascript:;"
                                                                                  class="we-cascade-picker--left"><span
                      class="we-icon-close"></span></a>
                <h1>选择科室</h1><a href="javascript:;" class="we-cascade-picker--right"><span></span></a></header>
              <div class="we-cascade-picker--content" style="top: 44px; display: none;">
                <section class="we-cascade-scroll we-cascade-picker--scroll we-cascade-picker--scroll0">
                  <div class="fixTop fix-arrow" style="display: none;">未选择</div>
                  <div class="fixBottom fix-arrow" style="display: none;">未选择</div>
                  <div class="we-cascade-scroll--wrap we-cascade-scroll--hidebar">
                    <ul></ul>
                  </div>
                </section>
              </div>
            </div>
            <div class="we-cascade-picker global-search">
              <header class="we-cascade-picker--header" style="display: none;"><a href="javascript:;"
                                                                                  class="we-cascade-picker--left"><span
                      class="we-icon-close"></span></a>
                <h1>选择地区</h1><a href="javascript:;" class="we-cascade-picker--right"><span></span></a></header>
              <div class="we-cascade-picker--content" style="top: 44px; display: none;">
                <section class="we-cascade-scroll we-cascade-picker--scroll we-cascade-picker--scroll0">
                  <div class="fixTop fix-arrow" style="display: none;">未选择</div>
                  <div class="fixBottom fix-arrow" style="display: none;">未选择</div>
                  <div class="we-cascade-scroll--wrap we-cascade-scroll--hidebar">
                    <ul></ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <div style="width: 0px; height: 0px; display: none;"></div>
      </div>
      <div class="we-sticky g-filter-ssr--wrap we-sticky--native" style="display: none; top: 44px;">
        <div class="">
          <section class="g-filter-ssr">
            <ul class="g-filter-ssr--head"></ul>
            <div class="g-filter-ssr--item"><span><div class="g-filter-ssr--radiobox" style="display: none;"><ul></ul></div><div
                    class="g-filter-ssr--content" style="display: none;"><section class="components-screenbox"><ul></ul><div
                    class="components-screenbox--btn-group"><a class="components-screenbox-reset">重置</a><a
                    class="components-screenbox-confirm">确定</a></div></section></div></span></div>
            <div class="we-cascade-picker">
              <header class="we-cascade-picker--header" style="display: none;"><a href="javascript:;"
                                                                                  class="we-cascade-picker--left"><span
                      class="we-icon-close"></span></a>
                <h1>选择科室</h1><a href="javascript:;" class="we-cascade-picker--right"><span></span></a></header>
              <div class="we-cascade-picker--content" style="top: 44px; display: none;">
                <section class="we-cascade-scroll we-cascade-picker--scroll we-cascade-picker--scroll0">
                  <div class="fixTop fix-arrow" style="display: none;">未选择</div>
                  <div class="fixBottom fix-arrow" style="display: none;">未选择</div>
                  <div class="we-cascade-scroll--wrap we-cascade-scroll--hidebar">
                    <ul></ul>
                  </div>
                </section>
              </div>
            </div>
            <div class="we-cascade-picker global-search">
              <header class="we-cascade-picker--header" style="display: none;"><a href="javascript:;"
                                                                                  class="we-cascade-picker--left"><span
                      class="we-icon-close"></span></a>
                <h1>选择地区</h1><a href="javascript:;" class="we-cascade-picker--right"><span></span></a></header>
              <div class="we-cascade-picker--content" style="top: 44px; display: none;">
                <section class="we-cascade-scroll we-cascade-picker--scroll we-cascade-picker--scroll0">
                  <div class="fixTop fix-arrow" style="display: none;">未选择</div>
                  <div class="fixBottom fix-arrow" style="display: none;">未选择</div>
                  <div class="we-cascade-scroll--wrap we-cascade-scroll--hidebar">
                    <ul></ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <div style="width: 0px; height: 0px; display: none;"></div>
      </div>
      <div class="we-list page-search-index--list" id="we-list"><!----><!----><!---->
        <div data-v-f9730fec="" class="page-search--index-tab" correct-key-list="">
          <div data-v-f9730fec=""><!---->
            <div data-v-f9730fec="" class="component-related-container" query-params="[object Object]">
              <div class="component-related-container--title">医院推荐</div>
              <div data-v-f9730fec="" class="component-hospital-card" v-for="item in list" @click="goHospitalHome(item.hospital.id)">
                <div class="g-card">
                  <div class="g-card--avatar" style="width: 3.072rem; height: 2.304rem;"><span
                          class="g-card--avatar-img"><img :src="item.hospital.coverUrl"
                                                          class="x-img-fadein" normal="loaded"></span></div>
                  <div class="content">
                    <div class="g-card-row" style="margin-bottom: 8px;">
                      <div class="g-card-col text ellipsis"
                           style="color: rgb(40, 53, 76); font-size: 14px; margin-right: 4px; -webkit-line-clamp: 2; font-weight: bold;">
                        {{item.hospital.name}}
                      </div>
                    </div>
                    <div class="g-card-row" style="justify-content: space-between; margin-bottom: 7px;">
                      <div class="g-card-row--merge-col">
                        <div class="g-card-col text"
                             style="color: rgb(43, 49, 61); font-size: 12px; margin-right: 12px;">三级甲等
                        </div>
                      </div>
                    </div>
                    <div class="g-card-row component-accurate-hospital-card--count"
                         style="justify-content: space-between; margin-bottom: 7px;">
                      <div class="g-card-row--merge-col">
                        <div class="g-card-col text ellipsis"
                             style="color: rgb(157, 158, 167); font-size: 12px; margin-right: 4px;">
                          {{item.hospital.address}}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
          </div>
          <div data-v-f9730fec=""><!----><!---->
            <div data-v-f9730fec="" class="component-related-container">
              <div class="component-related-container--title">医生推荐</div>
              <div data-v-f9730fec="" class="component-doctor-card" v-for="item in list" @click="getDetail(item.doctor.id)">
                <div class="g-card">
                  <div class="g-card--avatar" style="width: 2.048rem; height: 2.048rem;"><span
                          class="g-card--avatar-img" style="border-radius: 50%;"><img
                          :src="item.doctor.imageUrl" class="x-img-fadein"
                          style="border-radius: 50%;" normal="loaded"></span>
                    <div class="symbol" style="background-color: rgb(63, 134, 255);"><!----><!----></div>
                  </div>
                  <div class="content">
                    <div class="g-card-row" style="margin-bottom: 4px;">
                      <div class="g-card-col line-feat text"
                           style="color: rgb(43, 49, 61); font-size: 16px; margin-right: 8px;"><label
                              style="font-weight: bold;">{{item.doctor.name}}</label></div>
                      <div class="g-card-col line-feat text ellipsis"
                           style="color: rgb(43, 49, 61); font-size: 16px; margin-right: 6px;"><label
                              style="font-weight: bold;"><doctor_level level="item.level"/></label></div>
                      <div class="g-card-col line-feat text ellipsis"
                           style="color: rgb(43, 49, 61); font-size: 16px; margin-right: 4px;">
                      </div><!---->
                      <div class="g-card-col text"
                           style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;"><i
                              class="booking icon"></i></div>
                      <!----><!----></div>
                    <div class="g-card-row" style="margin-bottom: 6px;">
                      <div class="g-card-col text ellipsis"
                           style="color: rgb(94, 97, 107); font-size: 14px; margin-right: 0px;">
                        <label>{{item.hospital.name}} &nbsp;</label>
                      </div>
                      <div class="g-card-col text"
                           style="color: rgb(94, 97, 107); font-size: 14px; margin-right: 0px; line-height: normal;">
                              <span>
                                &nbsp;<doctor_level :level="item.doctor.level"/>
                              </span>
                      </div>
                      <div class="g-card-col text"
                           style="color: rgb(94, 97, 107); font-size: 14px; margin-right: 0px; line-height: normal;">
                        <i class="wy-icon-more" ></i></div>
                    </div>
                    <div class="g-card-row" style="margin-bottom: 8px;">
                      <div class="g-card-col text"
                           style="color: rgb(157, 158, 167); font-size: 12px; margin-right: 4px;">
                        评分
                        <span class="count">
                           {{score(item.doctor.id)}}
                        </span>
                      </div>
                      <div class="g-card-col text"
                           style="color: rgb(157, 158, 167); font-size: 12px; margin-right: 4px;">
                        预约量
                        <span class="count">
                          {{count(item.doctor.id)}}
                        </span></div>

                    </div>
                  </div>
                </div>
                <div class="good-at not-acc"><p><span>擅长：</span><label>{{item.doctor.goodDisease}}。 </label></p></div>
                <p class="border-bottom"></p></div>
            </div><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----></div>

        </div>
        <div class="we-load-more we-load-more--with-default" style="width: 80%;"><!----></div>
      </div>

    </div>


    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
  import HomeFooter from '../../views/footer'
  import hospital_list from "../search/hospital_list";
  import doctor_list from "../search/doctor_list";
  import API from "../../assets/js/api";
  import doctor_level from "../common/doctor_level";
  import hospital_level from "../common/hospital_level";
  export default {
    data(){
      return{
        value:"",
        hospitalList:[],
        list:[]
      }
    },
    name: "Home",
    components:{
      HomeFooter,
      hospital_list,
      doctor_list,
      doctor_level,
      hospital_level
    },
    created() {
      let pdata = {};
      API.recommend(pdata).then(res=>{
        this.list = res.data.data;
      })
    },
    computed:{

    },
    methods:{
      score(id){
        return Math.ceil(Math.random(id)*5);
      },
      count(id){
        return Math.ceil(Math.random(id)*20);
      },
      getDetail(id){
        this.$router.push("/doctor_home/"+id)
      },
      focus(){
        this.$router.push("/search").catch(err=>{

        })
      },
      goHospitalHome(id){
        this.$router.push("/hospital_home/"+id);
      }

    }
  }
</script>

<style  scoped>

</style>
