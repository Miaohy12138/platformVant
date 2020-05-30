<template>
  <section data-v-ac6d4d02="" class="page-my-order-list">
    <van-nav-bar
            title="订单详情"
            left-text="返回"
            left-arrow
            @click-left="gohome"
            @click-right="gohome"/>
    <van-tabs v-model="active" @click="getList">
      <van-tab title="未支付" >
        <div data-v-ac6d4d02="" class="we-list page-my-order-list--recent">
          <ul data-v-ac6d4d02="" class="list-cards">
            <li v-for="item in list" data-v-ac6d4d02="" class="page-my-order-list--recent-item">
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">未支付</div>
              </header>
              <article data-v-ac6d4d02=""  @click="goDetail(item.order.id)">
                <div data-v-ac6d4d02="" class="recent-item--doctor">
                  <a data-v-ac6d4d02="" href="javascript:void(0);"
                     class="recent-item--doctor-left"
                     >
                    <img data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">{{item.doctor.name}} <doctor_level :level="item.doctor.level"/></p>
                  <p data-v-ac6d4d02="">{{item.sourceItem.hospitalName}}</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    {{item.visit.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.sourceItem.time}} {{getDayW(item.sourceItem.time)}} {{getDayP(item.sourceItem.day)}}
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">{{item.sourceItem.price}}</em></div>
              </article>
              <footer data-v-ac6d4d02="">
                <span data-v-ac6d4d02="" class="recent-item--btn reward" @click="pay(item.order.id)">支付</span>
              </footer>
            </li>
          </ul>
          <div class="we-load-more we-load-more--with-default" style="width: 80%;">
            <div class="we-load-more--finish-tip">没有更多了~</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="进行中" >
        <div data-v-ac6d4d02="" class="we-list page-my-order-list--recent">
          <ul data-v-ac6d4d02="" class="list-cards">
            <li v-for="item in list" data-v-ac6d4d02="" class="page-my-order-list--recent-item" >
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">进行中</div>
              </header>
              <article data-v-ac6d4d02="" @click="goDetail(item.order.id)">
                <div data-v-ac6d4d02="" class="recent-item--doctor">
                  <a data-v-ac6d4d02="" href="javascript:void(0);"
                     class="recent-item--doctor-left"
                     >
                    <img data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">{{item.doctor.name}} <doctor_level :level="item.doctor.level"/></p>
                  <p data-v-ac6d4d02="">{{item.sourceItem.hospitalName}}</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    {{item.visit.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.sourceItem.time}} {{getDayW(item.sourceItem.time)}} {{getDayP(item.sourceItem.day)}}
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">{{item.sourceItem.price}}</em></div>
              </article>
                <footer data-v-ac6d4d02="" >
                  <span data-v-ac6d4d02="" class="recent-item--btn reward" @click="confirmOrder(item.order.id)">确认就诊</span>
                  <span data-v-ac6d4d02="" class="recent-item--btn reward" @click="cancelOrder(item.order.id)">取消订单</span>
                </footer>
            </li>
          </ul>
          <div class="we-load-more we-load-more--with-default" style="width: 80%;">
            <div class="we-load-more--finish-tip">没有更多了~</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待评价" >
        <div data-v-ac6d4d02="" class="we-list page-my-order-list--recent">
          <ul data-v-ac6d4d02="" class="list-cards">
            <li v-for="item in list" data-v-ac6d4d02="" class="page-my-order-list--recent-item" >
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">待评价</div>
              </header>
              <article data-v-ac6d4d02="" @click="goDetail(item.order.id)">
                <div data-v-ac6d4d02="" class="recent-item--doctor">
                  <a data-v-ac6d4d02="" href="javascript:void(0);"
                     class="recent-item--doctor-left"
                     >
                    <img data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">{{item.doctor.name}} <doctor_level :level="item.doctor.level"/></p>
                  <p data-v-ac6d4d02="">{{item.sourceItem.hospitalName}}</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    {{item.visit.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.sourceItem.time}} {{getDayW(item.sourceItem.time)}} {{getDayP(item.sourceItem.day)}}
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">{{item.sourceItem.price}}</em></div>
              </article>
              <footer data-v-ac6d4d02="">
                <span data-v-ac6d4d02="" class="recent-item--btn reward" @click="comment(item.order.id)">评价订单</span>
              </footer>
            </li>
          </ul>
          <div class="we-load-more we-load-more--with-default" style="width: 80%;">
            <div class="we-load-more--finish-tip">没有更多了~</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已完成" >
        <div data-v-ac6d4d02="" class="we-list page-my-order-list--recent">
          <ul data-v-ac6d4d02="" class="list-cards">
            <li v-for="item in list" data-v-ac6d4d02="" class="page-my-order-list--recent-item" >
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">已完成</div>
              </header>
              <article data-v-ac6d4d02="" @click="goDetail(item.order.id)">
                <div data-v-ac6d4d02="" class="recent-item--doctor">
                  <a data-v-ac6d4d02="" href="javascript:void(0);"
                     class="recent-item--doctor-left"
                    >
                    <img data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">{{item.doctor.name}} <doctor_level :level="item.doctor.level"/></p>
                  <p data-v-ac6d4d02="">{{item.sourceItem.hospitalName}}</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    {{item.visit.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.sourceItem.time}} {{getDayW(item.sourceItem.time)}} {{getDayP(item.sourceItem.day)}}
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">{{item.sourceItem.price}}</em></div>
              </article>
              <footer data-v-ac6d4d02="">
                <span data-v-ac6d4d02="" class="recent-item--btn reward" @click="deleteOrder(item.order.id)">删除订单</span>
              </footer>
            </li>
          </ul>
          <div class="we-load-more we-load-more--with-default" style="width: 80%;">
            <div class="we-load-more--finish-tip">没有更多了~</div>
          </div>
        </div>
      </van-tab>
      <van-tab title="已取消" >
        <div data-v-ac6d4d02="" class="we-list page-my-order-list--recent" >
          <ul data-v-ac6d4d02="" class="list-cards">
            <li v-for="item in list" data-v-ac6d4d02="" class="page-my-order-list--recent-item" >
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">已取消</div>
              </header>
              <article data-v-ac6d4d02="" @click="goDetail(item.order.id)">
                <div data-v-ac6d4d02="" class="recent-item--doctor">
                  <a data-v-ac6d4d02="" href="javascript:void(0);"
                     class="recent-item--doctor-left"
                     >
                    <img data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">{{item.doctor.name}} <doctor_level :level="item.doctor.level"/></p>
                  <p data-v-ac6d4d02="">{{item.sourceItem.hospitalName}}</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    {{item.visit.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.sourceItem.time}} {{getDayW(item.sourceItem.time)}} {{getDayP(item.sourceItem.day)}}
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">{{item.sourceItem.price}}</em></div>
              </article>
              <footer data-v-ac6d4d02="">
                <span data-v-ac6d4d02="" class="recent-item--btn reward" @click="deleteOrder(item.order.id)">删除订单</span>
              </footer>
            </li>
          </ul>
          <div class="we-load-more we-load-more--with-default" style="width: 80%;">
            <div class="we-load-more--finish-tip">没有更多了~</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </section>
</template>

<script>
  import API from "../../assets/js/api";
  import doctor_level from "../common/doctor_level";
  import {Toast} from "vant";
  export default {
    name: "order_list",
    data(){
      return {
        list:[],
        active:1
      }
    },
    components:{
      doctor_level
    },
    created() {
      this.getList();
    },
    methods:{
      confirmOrder(id){
        let pdata = {
          id:id,
          actionType:3,
          order:{
            id:id,
            status:2
          }
        };
        API.editOrder(pdata).then(res=>{
          let code = res.data.code;
          if(code===0){
            this.$router.push("/add_comment/"+id);
          }
        })
      },
      goDetail(id){
        this.$router.push("/order_page/"+id);
      },
      comment(id){
        this.$router.push("/add_comment/"+id);
      },
      pay(id){
        let pdata = {
          id:id
        };
        API.pay(pdata).then(res=>{
          sessionStorage.setItem("payFormStr",res.data.data);
          let code = res.data.code;
          if(code===0){
            this.$router.push("/pay_home")
            //this.$router.back(-1);
          }

        })
      },
      deleteOrder(id){
        let pdata ={
          actionType:2,
            id:id
        };
        API.editOrder(pdata).then(res=>{
          console.log(res);
          this.$router.go(0)
        })
      },
      cancelOrder(id){
        let pdata ={
          actionType :3,
          order:{
            id:id,
            status:4
          }
        };
        API.editOrder(pdata).then(res=>{
          console.log(res);
          this.$router.go(0)
        })
      },
      getList(){
        let pdata = {
          type:this.active
        };
        API.getOrderList(pdata).then(res=>{
          console.log(res);
          this.list = res.data.data;
        })
      },
      back(){
        this.$router.back(-1);
      },
      gohome(){
        this.$router.push("/main")
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
    }
  }
</script>

<style scoped>
.list-cards{
  margin-top: -0.21rem;
}
</style>
