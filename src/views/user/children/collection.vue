<template>
  <div>
    <Address-Header title="我的收藏"></Address-Header>
    <div class="main-xs">
      <van-tabs v-model="active" @click="getList">
        <van-tab title="医院" >
          <div class="doctor-list">
            <div class="we-list dep-doctor--list">
                <van-list v-for=" (item,index) in list">
                  <van-swipe-cell>
                    <div class="dep-doctor--item">
                      <a >
                        <div class="img">
                          <img onerror="this.src='https://static.guahao.cn/img/character/doc-unknow.png'"
                               src="https://kano.guahao.cn/pYf27810846_image140">
                        </div>
                        <dl>
                          <dt>
                            <strong>{{item.name}}</strong>
                            <span><hospital_level :level="item.level"></hospital_level></span>
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
                    <template #right>
                      <van-button square text="删除" type="danger" class="delete-button" @click="delLike(item.id,index)"/>
                    </template>
                  </van-swipe-cell>
                </van-list>
            </div>
          </div>
        </van-tab>
        <van-tab title="医生" >
          <div class="doctor-list">
            <div class="we-list dep-doctor--list">
              <van-list v-for=" (item,index) in list">
                <van-swipe-cell>
                  <div class="dep-doctor--item">
                    <a >
                      <div class="img">
                        <img onerror="this.src='https://static.guahao.cn/img/character/doc-unknow.png'"
                             src="https://kano.guahao.cn/pYf27810846_image140">
                      </div>
                      <dl>
                        <dt>
                          <strong>{{item.name}}</strong>
                          <span><doctor_level :level="item.level"></doctor_level></span>
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
                  <template #right>
                    <van-button square text="删除" type="danger" class="delete-button" @click="delLike(item.id,index)"/>
                  </template>
                </van-swipe-cell>
              </van-list>
            </div>
          </div>
        </van-tab>
      </van-tabs>

    </div>
  </div>

</template>


<script>

  import AddressHeader from "../../common/header";
  import API from "../../../assets/js/api"
  import doctor_level from "../../common/doctor_level";
  import hospital_level from "../../common/hospital_level";
  export default {
    data() {
      return {
        list:[],
        pageIdx:0,
        pageSize:10,
        totalCount:0,
        active:0
      };
    },
    components: {
      AddressHeader,
      doctor_level,
      hospital_level
    },
    mounted(){
      this.getList();
    },
    methods: {
      getList(){
        let pdata = {
          targetType:this.active+1,
          pageIdx:this.pageIdx,
          pageSize:this.pageSize
        };
        API.getLikeList(pdata).then(res=>{
          console.log(res.data.data);
          this.list = res.data.data.likeList;
          this.totalCount = res.data.data.totalCount;
        })
      },
      delLike(id,index){
        let pdata = {
          actionType :2,
          id:id
        };
        API.editLike(pdata).then(res=>{
          this.getList()
        })
      }
    },
  };
</script>


<style lang="stylus" scoped>
  .active {
  }
  .main-xs {
    padding-top 1.45rem
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    background: #f4f4f4;
    background-color white
  }
  .Address-box{
    z-index 1
    background-color white
  }
  .visit-item{
    height 2rem
    font-size 0.38rem
  }
  .defaulttag{
    margin-left 0.2rem
  }
  .van-button::before{
    height: 100%;
  }
  .van-tabs__line{
    background-color:blue;
  }
  .delete-button {
    height: 100%;
  }
</style>
