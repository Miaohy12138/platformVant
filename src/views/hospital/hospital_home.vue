<template>
  <div class="main">

    <div class="header">
      <van-nav-bar :title="hospital.name" left-text="返回" left-arrow @click-left="clickleft" @click-right="clickRight">
        <template #right>
          <van-icon name="search" size="18"/>
        </template>
      </van-nav-bar>
    </div>

    <section class="hospital-index-introduce">
      <div class="hospital-index-introduce--top">
        <div class="hospital-index-introduce--name">{{hospital.name}}</div>
        <a @click="goPage" class="hospital-index-introduce--target">
          医院概况<b></b>
        </a>
      </div>
      <div class="hospital-index-introduce--middle">
        <img :src="hospital.coverUrl" class="x-img-fadein">
        <div class="hospital-index-introduce--collect" @click="like"></div>
        <div class="hospital-index-introduce--detail">
          <span class="hospital-index-introduce--level"><hospital_level :level="hospital.level"></hospital_level></span>
          <label>综合医院 </label>
          <br>
          <label>预约量 3.6万</label>
          <label>问诊量 141</label>
          <br>
        </div>
      </div>
    </section>


    <section class="hospital-index-entry">
      <div class="hospital-index-entry--item-container">
        <div class="hospital-index-entry--item" @click="goguahao2(hospital.id,hospital.departments)">
          <img src="../../assets/icon/guahao.png" class="x-img-fadein">
          <div class="hospital-index-entry--name">预约挂号</div>
          <label>提前预约  先人一步</label>
        </div>
        <a class="hospital-index-entry--item">
          <img src="../../assets/icon/guahao.png" class="x-img-fadein">
          <div class="hospital-index-entry--name">智能导诊</div>
          <label>症状自测  找对医生</label>
        </a>
      </div>
    </section>
    <section class="hospital-index-comment">
      <div class="hospital-index-comment--top">
        <div class="hospital-index-comment--name">患者评价</div>
        </div>

      <section class="hospital-comment-item" v-for="item in comments">
        <div class="hospital-comment-item--top">
          <div class="hospital-comment-item--rate we-rate">
            <van-rate v-model="item.score" readonly />
          </div>
        </div>
        <div class="hospital-comment-item--content">{{item.content}}</div>
        <div class="hospital-comment-item--footer"><label>{{item.createBy}}&nbsp;挂号</label><span>{{item.createTime}}</span></div>
      </section>
    </section>
  </div>
</template>

<script>

  import hospital_level from "../common/hospital_level";
  import API from "../../assets/js/api"
  import {Toast} from 'vant';

  export default {
    name: "hospital_home",
    data() {
      return {
        hospital: {
          name: '',
          coverUrl: ''

        },
        hospitalId: 0,
        departmentIds: "",
        comments:[]
      }
    },
    created() {

    },
    components: {
      hospital_level
    },
    created() {
      let id = this.$route.params.id;
      this.hospitalId = id;
      let pdata = {
        id: id
      };
      API.getHospitalDetail(pdata).then(res => {
        this.hospital = res.data.data.hospital;
        this.departmentIds = this.hospital.departments
      })
      let pdata2 = {
        id:id,
        type:0,
        pageIdx:0,
        pageSize:2
      };
      API.listComment(pdata2).then(res=>{
        this.comments = res.data.data;
      })
    },
    methods: {
      goguahao2(id,departments){
        this.$router.push("/department_list/"+id+"/"+departments)
      },
      async clickleft() {
        this.$router.back(-1);
      },
      clickRight() {

      },
      goPage() {
        this.$router.push("/hospital_page/" + this.hospitalId + "/" + this.departmentIds)
          .catch(err => {
          })
      },
      getDepartments() {
        let pdata = {
          ids: this.departmentIds
        }
        API.getDepartmentByIds(pdata).then(res => {
          let departments = res.data.data.departments;
          console.log(departments);
        })
      },
      like() {
        let id = this.$route.params.id;
        let pdata = {
          actionType: 1,
          targetId: id,
          targetType: 1
        };
        API.editLike(pdata).then(res => {
          if (res.data.code == 0) {
            Toast.success({message: '收藏成功', duration: 500});
          }
        })

      }
    },

  }
</script>

<style scoped>
  .main {
    position: relative;
  }

  .header {
    height: 1.45rem;
    position: relative;
  }

  .card {
    height: 3rem;
    position: relative;
  }

  .guahao {
    position: relative;
  }


</style>
