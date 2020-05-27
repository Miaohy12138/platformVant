<template>
  <section data-v-ac6d4d02="" class="page-my-order-list">
    <van-nav-bar
            title="订单详情"
            left-text="返回"
            left-arrow
            @click-left="back"
            @click-right="gohome"/>
    <van-tabs v-model="active" @click="getList">
      <van-tab title="未支付" >
        <div data-v-ac6d4d02="" class="we-list page-my-order-list--recent">
          <ul data-v-ac6d4d02="" class="list-cards">
            <li data-v-ac6d4d02="" class="page-my-order-list--recent-item" onclick="monitorEvents[290]()">
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">已取消</div>
              </header>
              <article data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--doctor"><a data-v-ac6d4d02="" href="javascript:void(0);"
                                                                       class="recent-item--doctor-left"
                                                                       onclick="monitorEvents[291]()"><img
                        data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">王利群 主任医师</p>
                  <p data-v-ac6d4d02="">口腔专家</p>
                  <p data-v-ac6d4d02="">苏州市立医院本部</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    缪恒益&nbsp;&nbsp;&nbsp;&nbsp;2020-06-02 上午
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">22</em></div>
              </article>
              <footer data-v-ac6d4d02="">
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
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
            <li data-v-ac6d4d02="" class="page-my-order-list--recent-item" onclick="monitorEvents[290]()">
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">已取消</div>
              </header>
              <article data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--doctor"><a data-v-ac6d4d02="" href="javascript:void(0);"
                                                                       class="recent-item--doctor-left"
                                                                       onclick="monitorEvents[291]()"><img
                        data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">王利群 主任医师</p>
                  <p data-v-ac6d4d02="">口腔专家</p>
                  <p data-v-ac6d4d02="">苏州市立医院本部</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    缪恒益&nbsp;&nbsp;&nbsp;&nbsp;2020-06-02 上午
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">22</em></div>
              </article>
              <footer data-v-ac6d4d02="">
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
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
            <li data-v-ac6d4d02="" class="page-my-order-list--recent-item" onclick="monitorEvents[290]()">
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">已取消</div>
              </header>
              <article data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--doctor"><a data-v-ac6d4d02="" href="javascript:void(0);"
                                                                       class="recent-item--doctor-left"
                                                                       onclick="monitorEvents[291]()"><img
                        data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">王利群 主任医师</p>
                  <p data-v-ac6d4d02="">口腔专家</p>
                  <p data-v-ac6d4d02="">苏州市立医院本部</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    缪恒益&nbsp;&nbsp;&nbsp;&nbsp;2020-06-02 上午
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">22</em></div>
              </article>
              <footer data-v-ac6d4d02="">
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
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
            <li data-v-ac6d4d02="" class="page-my-order-list--recent-item" onclick="monitorEvents[290]()">
              <header data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--left">预约挂号</div>
                <div data-v-ac6d4d02="" class="recent-item--right">已取消</div>
              </header>
              <article data-v-ac6d4d02="">
                <div data-v-ac6d4d02="" class="recent-item--doctor"><a data-v-ac6d4d02="" href="javascript:void(0);"
                                                                       class="recent-item--doctor-left"
                                                                       onclick="monitorEvents[291]()"><img
                        data-v-ac6d4d02="" src="https://kano.guahao.cn/5PO78375095" class="x-img-fadein"></a>
                  <p data-v-ac6d4d02="" class="first">王利群 主任医师</p>
                  <p data-v-ac6d4d02="">口腔专家</p>
                  <p data-v-ac6d4d02="">苏州市立医院本部</p></div>
                <div data-v-ac6d4d02="" class="recent-item--user">
                  <div data-v-ac6d4d02="" class="recent-item--user-left">就诊人</div>
                  <p data-v-ac6d4d02="">
                    缪恒益&nbsp;&nbsp;&nbsp;&nbsp;2020-06-02 上午
                    <!----></p></div>
                <div data-v-ac6d4d02="" class="recent-item--fee">
                  ￥<em data-v-ac6d4d02="">22</em></div>
              </article>
              <footer data-v-ac6d4d02="">
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
                <span data-v-ac6d4d02="" class="recent-item--btn reward">删除订单</span>
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
  export default {
    name: "order_list",
    data(){
      return {
        list:[],

      }
    },
    created() {

    },
    methods:{
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
