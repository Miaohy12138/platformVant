<template>
  <div>
    <div class="order-detail">
      <header class="x-header" style="padding-top:0px;">
        <div class="x-header--wrapper x-header--border" style="top:0px;">
          <div class="x-header--left" style="flex-basis:60px;"><a href="javascript:;"
                                                                  class="x-header--item x-header--back wy-icon-back"
                                                                  onclick="monitorEvents[0]()"></a><!----><!----></div>
          <h1 style="left:60px;right:60px;">预约单详情</h1>
          <div class="x-header--right" style="flex-basis:60px;"><!----></div>
        </div>
      </header><!---->
      <section class="cpt-order-detail">
        <div class="cpt-order-detail--panel">
          <div class="cpt-order-detail--panel-action">
            <div class="cpt-order-detail--panel-action-left">
              <div class="code primary">
                <div><p class="normal">取号凭证</p>
                  <p>无</p></div>
              </div>
              <p class="time">2020-06-02&nbsp;&nbsp;上午</p>
              <p class="subtitle">具体取号或就诊时间以短信为准</p></div>
            <div class="cpt-order-detail--panel-action-right"><p class="state"><span>待就诊</span><br>（6天后就诊）</p>
              <p class="fee">价格以医院实际为准<!----></p></div>
          </div>
          <div class="cpt-booking-consult" onclick="monitorEvents[12]()"><a href="/ask/entry/specialconsult?pageFrom=9"
                                                                            onclick="monitorEvents[6]()">
            <div class="cpt-booking-consult--info">
              <header>诊前问一问</header>
              <p class="cpt-booking-consult--info-icon">
                3分钟找到三甲专家
              </p>
              <p class="cpt-booking-consult--info-icon">
                提前了解病情
              </p>
              <p class="cpt-booking-consult--info-warn">已帮助 <strong>703.3万挂号患者</strong> 顺利面诊</p></div>
            <div class="cpt-booking-consult--link"><span class="cpt-booking-consult--font-s">￥</span><span
                    class="cpt-booking-consult--font-b">9</span><span class="cpt-booking-consult--font-m">起</span></div>
          </a></div>
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
            <p class="code-num"></p><img class="barcode x-img-fadein" id="barcode"><img class="qrcode x-img-fadein">
          </div>
        </div>
        <div class="we-dialog cpt-order-detail--pwd">
          <div class="we-dialog--mask" style="display: none;"></div>
          <div class="we-dialog--container" style="display: none;"><i class="wy-icon-close"></i>
            <div class="wrapper"><p class="definite align">取号凭证</p>
              <p class="definite"> 无 </p></div>
          </div>
        </div>
      </section>
      <section class="cpt-order-metadata">
        <dl>
          <dd><label>就诊专家</label>
            <p class="cpt-order-metadata--doctor"><a href="/expert/consult/137237108193885000"></a><span>王利群</span>（其他）口腔专家
            </p></dd>
          <dd><label>就诊医院</label>
            <p>苏州市立医院本部</p></dd>
          <dd><label>就诊人</label>
            缪恒益(320***********0496)
          </dd>
          <dd><label>手机号码</label>187*****583
          </dd><!----></dl>
        <dl>
          <dd><label>领号时间</label>2020-06-02 08:00-08:30
          </dd>
          <dd><label>领号地点</label>门诊大厅
          </dd>
          <dd><label>就诊时间</label>08:00-12:00
          </dd>
          <dd><label>就诊序号</label>2
          </dd><!---->
          <dd><label>门诊类型</label>专家门诊
          </dd>
          <dd><label>就诊类型</label>初诊
          </dd>
        </dl>
        <p class="cpt-order-metadata--order-no">
          微医订单号：<span class="J_orderNo">202005276839422368</span><br>
          下单时间：2020-05-27 20:08:33<br>
          <button class="cpt-order-metadata--order-no-copied" data-clipboard-text="202005276839422368">
            复制
          </button>
        </p>
        <button class="cpt-order-metadata--toggle-btn"><p><span>收起</span><i class="wy-iconfont wy-icon-less"></i></p>
        </button>
      </section>
      <section class="cpt-order-action"><p><!----><a href="javascript:void(0);" class="" onclick="monitorEvents[7]()">取消预约</a>
        <!----><a href="javascript:void(0);" onclick="monitorEvents[8]()">重发短信</a><!----><a href="javascript:void(0);"
                                                                                            onclick="monitorEvents[9]()">再次预约</a>
        <!----></p>
        <div class="we-dialog cpt-order-action--dialog-cancel">
          <div class="we-dialog--mask" style="display:none;"></div>
          <div class="we-dialog--container" style="display:none;">
            <div class="content">
              <header>确认取消订单?</header>
              <p>过多的取消可能导致您无法预约挂号，请查看预约规则。</p><span>取消预约</span><span>返回</span><span>查看预约规则</span></div>
          </div>
        </div>
        <div class="we-actionsheet">
          <div class="we-actionsheet--mask we-actionsheet--mask-transparent" style="display:none;"></div>
          <div class="we-actionsheet--wrap">
            <div class="we-actionsheet--menu">
              <div class="we-actionsheet--cell"><h4>就医经验</h4></div>
              <div class="we-actionsheet--cell we-actionsheet-menu-primary">是，我已就诊</div>
              <div class="we-actionsheet--cell we-actionsheet-menu-warn">否，还未就诊</div>
            </div>
            <div class="we-actionsheet--action">
              <div class="we-actionsheet--cell">取消</div>
            </div>
          </div>
        </div>
      </section><!---->
      <section class="order-detail--drainage cpt-we-doctor">
        <header>微医服务</header>
        <ul>
          <li><p>【小奶瓶之家】30天育儿微信群</p>
            <p class="sub-desc">6名儿科专家共同陪伴，宝贝少受罪</p><a href="https://hd.guahao.com/u/26285?chb=wyfu"
                                                       onclick="monitorEvents[105]()">
              立即加入
            </a></li>
          <li><p>微医会员丨号源提醒</p>
            <p class="sub-desc">增加挂号成功率，抢号不再难</p><a href="https://hd.guahao.com/u/26252?cnb=apt"
                                                    onclick="monitorEvents[106]()">
              立即开通
            </a></li>
          <li><p>微医消化（肝病）中心</p>
            <p class="sub-desc">肝弹检查免费送，TAF用药保障计划</p><a href="https://hd.guahao.com/u/25074"
                                                        onclick="monitorEvents[107]()">
              免费咨询
            </a></li>
          <li><p>微医自营医美 甄选美学方案</p>
            <p class="sub-desc">一分钟测肤，找到自己的护肤方案</p><a href="https://hd.guahao.com/u/24757"
                                                      onclick="monitorEvents[108]()">
              免费测肤
            </a></li>
          <li><p>腰背疼痛易跌倒 骨质疏松危害多</p>
            <p class="sub-desc">你会患上骨质疏松症吗？赶快来测试吧！</p><a
                    href="https://industry-consume.guahao.com/activity/cd6f1ff5534142d08d2e5429ea3d2f4f?source_id=40308"
                    onclick="monitorEvents[109]()">
              测一测
            </a></li>
          <li><p>就诊津贴-医诊无忧</p>
            <p class="sub-desc">医诊无忧</p><a href="/member/register-insure/index" onclick="monitorEvents[110]()">
              服务咨询
            </a></li>
        </ul>
      </section>
      <section class="cpt-recommend-offline"><a
              href="https://wy.guahao.com/consult/more?sort=general_consult_operate&amp;deptId=99726587-9a79-46e8-9207-6fca53055b95000&amp;deptStr=口腔科综合&amp;control=0"
              class="cpt-recommend-offline--title" onclick="monitorEvents[111]()">
        口腔科综合专家线上门诊<span class="cpt-recommend-offline--more">更多</span></a>
        <div class="cpt-recommend-offline--card cpt-recommend-offline--depart-expert">
          <div class="c-consult-entrance" onclick="monitorEvents[78]()">
            <div class="g-card">
              <div class="g-card--avatar" style="width:2.048rem;height:2.048rem;"><span class="g-card--avatar-img"
                                                                                        style="border-radius:50%;"><img
                      src="https://static.guahao.cn/front/portal-h5-node/icon_doctor_avatar_default.fde9a2def64a880aaf51fb9dcc3813b4.png?webp=80"
                      class="x-img-fadein" style="border-radius: 50%;" normal="loaded"></span></div>
              <div class="content">
                <div class="g-card-row" style="justify-content:space-between;margin-bottom:8px;">
                  <div class="g-card-col text" style="color:#28354C;font-size:16px;margin-right:4px;">三甲医院专家咨询</div>
                  <div class="g-card-col text" style="color:#28354C;font-size:12px;margin-right:4px;">
                    <div class="g-button"
                         style="width:auto;height:24px;padding:0px 12px;background-color:#3F86FF;color:#FFFFFF;border-radius:12px;font-size:12px;border:none;">
                      <div class="g-button--content"><!---->
                        <div class="g-button--text"><span>￥19.00问诊</span></div><!----><!----></div>
                    </div>
                  </div>
                </div>
                <div class="g-card-row" style="margin-bottom:8px;">
                  <div class="g-card-col text" style="color:#28354C;font-size:12px;margin-right:4px;">24小时内交流不限次数</div>
                </div>
                <div class="g-card-row" style="margin-bottom:8px;">
                  <div class="g-card-col text" style="color:#83889A;font-size:12px;margin-right:0px;">接诊率：</div>
                  <div class="g-card-col text" style="color:#83889A;font-size:12px;margin-right:8px;">99%</div>
                  <div class="g-card-col text" style="color:#83889A;font-size:12px;margin-right:0px;">好评率：</div>
                  <div class="g-card-col text" style="color:#83889A;font-size:12px;margin-right:4px;">99%</div>
                </div>
                <div class="g-card-row" style="margin-bottom:2px;">
                  <div class="g-card-col text" style="color:#83889A;font-size:12px;margin-right:4px;">填写咨询问题 &gt;
                    快速匹配三甲医生 &gt; 3分钟接诊
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-consult--item">
            <div class="g-card">
              <div class="g-card--avatar" style="width: 2.048rem; height: 2.048rem;"><span class="g-card--avatar-img"
                                                                                           style="border-radius: 50%;"><div
                      style="border-radius: 50%;"><img
                      src="https://kano.guahao.cn/AkW31781426_image140.jpg?timestamp=1517304270214&amp;webp=80"
                      class="x-img-fadein" normal="loaded"></div></span></div>
              <div class="content"><!---->
                <div class="g-card-row" style="margin-bottom: 8px;">
                  <div class="g-card-col text ellipsis"
                       style="color: rgb(40, 53, 76); font-size: 14px; margin-right: 4px;">张耀国
                  </div>
                  <div class="g-card-col text" style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;">
                    主任医师
                  </div>
                  <div class="g-card-col sign"
                       style="color: rgb(255, 255, 255); font-size: 10px; margin-right: 4px; line-height: inherit; background-color: rgb(255, 105, 92);">
                    服务包
                  </div>
                </div>
                <div class="g-card-row" style="margin-bottom: 8px;">
                  <div class="g-card-col text ellipsis"
                       style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;">南京医科大学附属口腔医院
                  </div>
                  <div class="g-card-col text" style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;">
                    儿童牙科
                  </div>
                </div>
                <div class="g-card-row" style="margin-bottom: 8px;">
                  <div class="g-card-col text" style="color: rgb(166, 168, 182); font-size: 12px; margin-right: 4px;">
                    好评率 100%
                  </div>
                  <div class="g-card-col text" style="color: rgb(166, 168, 182); font-size: 12px; margin-right: 4px;">
                    问诊量 3332
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
          <div class="page-consult--item">
            <div class="g-card">
              <div class="g-card--avatar" style="width: 2.048rem; height: 2.048rem;"><span class="g-card--avatar-img"
                                                                                           style="border-radius: 50%;"><div
                      style="border-radius: 50%;"><img
                      src="https://kano.guahao.cn/yZo192453602_image140.jpg?timestamp=1582853090212&amp;webp=80"
                      class="x-img-fadein" normal="loaded"></div></span></div>
              <div class="content"><!---->
                <div class="g-card-row" style="margin-bottom: 8px;">
                  <div class="g-card-col text ellipsis"
                       style="color: rgb(40, 53, 76); font-size: 14px; margin-right: 4px;">张士文
                  </div>
                  <div class="g-card-col text" style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;">
                    主治医师
                  </div>
                  <div class="g-card-col sign"
                       style="color: rgb(255, 255, 255); font-size: 10px; margin-right: 4px; line-height: inherit; background-color: rgb(255, 105, 92);">
                    服务包
                  </div>
                </div>
                <div class="g-card-row" style="margin-bottom: 8px;">
                  <div class="g-card-col text ellipsis"
                       style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;">四川大学华西口腔医院
                  </div>
                  <div class="g-card-col text" style="color: rgb(40, 53, 76); font-size: 12px; margin-right: 4px;">
                    口腔种植科
                  </div>
                </div>
                <div class="g-card-row" style="margin-bottom: 8px;">
                  <div class="g-card-col text" style="color: rgb(166, 168, 182); font-size: 12px; margin-right: 4px;">
                    好评率 99%
                  </div>
                  <div class="g-card-col text" style="color: rgb(166, 168, 182); font-size: 12px; margin-right: 4px;">
                    问诊量 509
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
                      <label>牙缺失</label></div>
                    <div class="g-card-col tag"
                         style="color: rgb(131, 136, 154); font-size: 10px; margin-right: 8px; line-height: inherit; background-color: rgb(245, 246, 246); border: none;">
                      <label>口腔疾病</label></div>
                  </div>
                </div><!----></div>
            </div>
          </div>
        </div>
      </section>
      <section class="order-detail--drainage cpt-recommend-posts">
        <header>你可能感兴趣的</header>
        <ul>
          <li><a href="https://hmall.guahao.com/detail/442776737663680512" onclick="monitorEvents[112]()"><img
                  src="https://kano.guahao.cn/iWR181657712?token=MTgxZmExNmJlNDkxYTQzOTAxMDkxZDViMDU3NGJiOThfTUQ1COUSTOM&amp;v=1.0&amp;webp=80"
                  class="x-img-fadein" normal="loaded"><!---->
            <div class="article"><p class="header">信龙 碘甘油 20ml:1%</p>
              <p class="">
                信龙 碘甘油 20ml:1%</p>
              <footer><span>￥11.4<del>￥13.68</del></span><span>立即购买&gt;</span></footer>
            </div>
          </a></li>
          <li><a href="https://hmall.guahao.com/detail/452834895555723264" onclick="monitorEvents[113]()"><img
                  src="https://kano.guahao.cn/BIK281071164?token=ZjZiNjcwYTY1MDBjMTI4MTE1YTVhZTI1YTY4NmFlMTdfTUQ1COUSTOM&amp;v=1.0&amp;webp=80"
                  class="x-img-fadein" normal="loaded"><!---->
            <div class="article"><p class="header">[奇康]西帕依固龈液 100ml</p>
              <p class="">
                [奇康]西帕依固龈液 100ml</p>
              <footer><span>￥30.4<del>￥36.48</del></span><span>立即购买&gt;</span></footer>
            </div>
          </a></li>
          <li><a href="https://hd.guahao.com/u/26285?chb=wyfu" onclick="monitorEvents[114]()"><img
                  src="http://kano.guahao.cn/l6h198117185?webp=80" class="x-img-fadein" normal="loaded"><!---->
            <div class="article"><p class="header">【小奶瓶之家】30天育儿微信群</p>
              <p class="">
                6名儿科专家共同陪伴，宝贝少受罪</p>
              <footer><span>¥49起</span><span>立即购买</span></footer>
            </div>
          </a></li>
        </ul>
      </section>
      <div class="wand-popup">
        <div class="wand-popup__mask" style="display:none;"></div>
        <div class="wand-popup__container wand-popup__container--bottom wand-popup-container__position-bottom"
             style="height:auto;display:none;">
          <div class="order-detail--tzx-popup">
            <div class="order-detail--tzx-popup-title">领取保障 停诊无忧</div>
            <div class="order-detail--tzx-popup-cancel wy-icon-close" onclick="monitorEvents[115]()"></div>
            <div class="order-detail--tzx-popup-content">
              <div class="line1"><p class="text"><strong>0</strong>元</p></div>
              <p class="line2">停诊可享<strong>0元</strong>现金补偿</p>
              <p class="line3">或一对一电话改约服务</p></div>
            <div class="order-detail--tzx-popup-btn" onclick="monitorEvents[116]()">免费领取</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>

</style>
