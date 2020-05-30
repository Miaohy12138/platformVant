<template>
  <div class="order-detail">
    <van-nav-bar
            title="订单详情"
            left-text="返回"
            left-arrow
            @click-left="back"
            @click-right="gohome"/>
    <section class="cpt-order-detail">
      <div class="cpt-order-detail--panel">
        <div class="cpt-order-detail--panel-action">
          <div class="cpt-order-detail--panel-action-left">
            <div class="code primary">
              <div><p class="normal">凭证</p>
                <p>******</p></div>
            </div>
            <p class="time">{{order.sourceItem.time}}&nbsp;&nbsp;{{getDayP(order.sourceItem.day)}}</p>
            <p class="subtitle">具体取号或就诊时间以短信为准</p></div>
          <div class="cpt-order-detail--panel-action-right">
            <p class="state">


              <span v-show="order.order.status==4">已取消</span>
              <span v-show="order.order.status==3">￥ {{order.sourceItem.price}}</span>
              <span v-show="order.order.status==2">￥ {{order.sourceItem.price}}</span>
              <span v-show="order.order.status==1">￥ {{order.sourceItem.price}}</span>
              <span v-show="order.order.status==0">￥ {{order.sourceItem.price}}</span>
            </p>
            <p class="fee">价格以医院实际为准<!----></p></div>
        </div>
      </div>
      <div class="we-dialog cpt-order-detail--fee-detail">
        <div class="we-dialog--mask" style="display: none;"></div>
        <div class="we-dialog--container" style="display: none;"><i class="wy-icon-close"></i>
          <header>价格明细</header>
          <article>
            <menu></menu>
            <div class="total">
              费用合计
              <span>价格以医院实际为准</span></div>
          </article>
          <footer>
            <ul>
              <li>支付方式：医院支付</li><!----></ul>
          </footer>
        </div>
      </div>
      <div class="we-dialog cpt-order-detail--receipt">
        <div class="we-dialog--mask" style="display: none;"></div>
        <div class="we-dialog--container" style="display: none;"><i class="wy-icon-close"></i>
          <header>取号凭证</header>
          <p class="code-num"></p><img class="barcode x-img-fadein" id="barcode"><img class="qrcode x-img-fadein"></div>
      </div>
      <div class="we-dialog cpt-order-detail--pwd">
        <div class="we-dialog--mask" style="display: none;"></div>
        <div class="we-dialog--container" style="display: none;"><i class="wy-icon-close"></i>
          <div class="wrapper"><p class="definite align">取号凭证</p>
            <p>******</p></div>
        </div>
      </div>
    </section>
    <section class="cpt-order-metadata">
      <dl>
        <dd><label>就诊专家</label>
          <p class="cpt-order-metadata--doctor">
            <a href="/expert/consult/137237108193885000"></a>
            <span>{{order.doctor.name}}</span>
            <doctor_level :level="order.doctor.level"/>
          </p>
        </dd>
        <dd><label>就诊医院</label>
          <p>{{order.sourceItem.hospitalName}}</p></dd>
        <dd><label>就诊人</label>
          {{order.visit.name}}({{order.visit.idCard}})
        </dd>
        <dd><label>手机号码</label>{{order.visit.mobile}}
        </dd><!---->
      </dl>
      <dl>
        <dd><label>领号地点</label>门诊大厅
        </dd>
        <dd><label>就诊时间</label>08:00-12:00
        </dd>
        <dd><label>门诊类型</label>专家门诊
        </dd>
        <dd><label>就诊类型</label>初诊
        </dd>
      </dl>
      <p class="cpt-order-metadata--order-no">
        订单号：<span class="J_orderNo">{{order.order.id}}</span><br>
        下单时间：{{order.order.createTime}}<br>
      </p>

    </section>
    <section class="cpt-recommend-offline">
      <a
              href="https://wy.guahao.com/consult/more?sort=general_consult_operate&amp;deptId=99726587-9a79-46e8-9207-6fca53055b95000&amp;deptStr=口腔科综合&amp;control=0"
              class="cpt-recommend-offline--title" onclick="monitorEvents[377]()">
        医生推荐
      </a>
      <div class="cpt-recommend-offline--card cpt-recommend-offline--depart-expert">
        <div class="page-consult--item" v-for="item in list" @click="goPage(item.doctor.id)">
          <div class="g-card">
            <div class="g-card--avatar" style="width: 2.048rem; height: 2.048rem;">
              <span class="g-card--avatar-img"
                    style="border-radius: 50%;">
                <div style="border-radius: 50%;">
                  <img
                    :src="item.doctor.imageUrl"
                    class="x-img-fadein" normal="loaded"></div></span></div>
            <div class="content"><!---->
              <div class="g-card-row" style="margin-bottom: 8px;">
                <div class="g-card-col text ellipsis"
                     style="color: rgb(40, 53, 76); font-size: 14px; margin-right: 4px;">{{item.doctor.name}}
                </div>
                <div class="g-card-col text" style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;"><doctor_level :level="item.doctor.level"/>
                </div>
              </div>
              <div class="g-card-row" style="margin-bottom: 8px;">
                <div class="g-card-col text ellipsis"
                     style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;">{{item.doctor.hospitalName}}
                </div>
                <div class="g-card-col text" style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;">
                </div>
              </div>
              <div class="g-card-row" style="margin-bottom: 8px;">
                <div class="g-card-col text" style="color: rgb(166, 168, 182); font-size: 12px; margin-right: 4px;">好评率
                  98%
                </div>
                <div class="g-card-col text" style="color: rgb(166, 168, 182); font-size: 12px; margin-right: 4px;">问诊量
                  14
                </div>
              </div>
              <div class="g-card-row" style="margin-bottom: 0px;">
                <div class="g-card-col text" style="color: rgb(131, 136, 154); font-size: 12px; margin-right: 4px;"><i
                        class="wy-iconfont wy-icon-praise"></i></div>
                <div class="g-card-col text" style="color: rgb(131, 136, 154); font-size: 12px; margin-right: 10px;">
                  专治
                </div>
                <div class="g-card-row--over-hide">
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>龋齿</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>儿童牙病</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>小儿龋病</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>口腔疾病</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>多生牙</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>牙髓炎</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>智齿冠周炎</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>慢性根尖周炎</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>口腔牙体病</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>牙周病</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>急性根尖周炎</label></div>
                  <div class="g-card-col tag"
                       style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                    <label>口腔溃疡</label></div>
                </div>
              </div><!----></div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  import API from "../../assets/js/api";
  import doctor_level from "../common/doctor_level";
  import order from "./order";


  export default {
    name: "order_page",
    data() {
      return {
        orderId: 0,
        order: {},
        list:[]
      }
    },
    components: {
      doctor_level
    },
    created() {
      let orderId = this.$route.params.id;
      this.orderId = orderId;
      let pdata = {
        id: orderId
      };
      API.orderDetail(pdata).then(res => {
        this.order = res.data.data;
        console.log(this.order);
      })

      let pdata2 = {};
      API.recommend(pdata2).then(res=>{
        this.list = res.data.data;
      })
    },
    methods: {
      goPage(id){
        this.$router.push("/doctor_home/"+id);
      },
      back() {
        this.$router.back(-1);
      },
      gohome() {
        this.$router.push("/main")
      },
      convertDateFromString(dateString) {
        if (dateString) {
          var date = new Date(dateString.replace(/-/, "/"));
          return date;
        }
      },
      getDayW(v) {
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
      getDayP(v) {
        if (v == 1) {
          return "上午"
        } else if (v == 2) {
          return "下午"
        } else if (v == 0) {
          return "全天"
        }
      },
    }
  }
</script>

<style scoped>

</style>
