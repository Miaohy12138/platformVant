<template>
    <div class="main-xs">
        <Address-Header title="新增就诊人"></Address-Header>
        <div class="address">
          <div class="info-form">
            <van-form @submit="btn">
              <van-field
                      v-model="username"
                      name="姓名"
                      label="姓名"
                      placeholder="请输入姓名"
                      :rules="[{ require:true,message: '姓名必填' }]"
              />
              <van-field
                      v-model="mobile"
                      type="text"
                      name="手机号"
                      label="手机号"
                      placeholder="请输入手机号"
                      :rules="[{  require:true,message: '请输入手机号' }]"
              />
              <van-field
                    v-model="age"
                    type="text"
                    name="年龄"
                    label="年龄"
                    placeholder="请输入年龄"
                    :rules="[{  require:true,message: '请输入年龄' }]"
            />
            <van-field
                    v-model="id_card"
                    type="text"
                    name="身份证号"
                    label="身份证号"
                    placeholder="请输入身份证号"
                    :rules="[{  require:true,message: '请输入身份证号' }]"
            />
              <van-field name="radio" label="性别">
                <template #input>
                  <van-radio-group v-model="sex" direction="horizontal">
                    <van-radio name="1" >男</van-radio>
                    <van-radio name="0">女</van-radio>
                  </van-radio-group>
                </template>
              </van-field>
              <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                  提交
                </van-button>
              </div>
            </van-form>
          </div>
        </div>
    </div>
</template>

<script>
import AddressHeader from "../../common/header";
import API from "../../../assets/js/api"
export default {
  name: "add_address",
  data() {
    return {
      username: "",
      mobile: "",
      sex:"",
      age:"",
      id_card:""
    };
  },
  components: {
    AddressHeader
  },
  methods: {
    btn() {
      let pdata = {
        actionType:1,
        visitPerson:{
          name:this.username,
          mobile:this.mobile,
          sex:this.sex,
          age:this.age,
          idCard:this.id_card
        }
      }
      API.editVistPerson(pdata).then(res=>{
        console.log(res);
      })
      .catch(err=>{

      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.main-xs{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99999;
    background: #f4f4f4;
}
.address {
    padding-top: 1.45rem;

    .address-box {
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        background: #fff;

        label {
            width: 30%;
            height: 100%;
            padding-left: 0.58rem;
            font-size: 0.4rem;
            display: block;
            float: left;
        }

        input {
            width: 70%;
            font-size: 0.4rem;
        }
    }
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.3rem;
    border-top: 1px solid #e0e0e0;
    background: #ffffff;

    a {
        float: none;
        display: block;
        margin: 0.18rem auto;
        text-align: center;
        width: 95%;
        height: 0.9rem;
        line-height: 0.9rem;
        border-radius: 20px;
        font-size: 0.28rem;
        color: #fff;
        background-color: #00acff;
    }
}
</style>
