<template>
  <div class="main">
    <div class="header">
      <van-nav-bar
              title="标题"
              left-text="返回"
              left-arrow
              @click-left="onClickLeft"
      />
    </div>
  <div class="container">
    <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
            height="20rem"
            @click-item="goDetail"
    />
  </div>

  </div>
</template>

<script>
  import API from "../../assets/js/api"

  export default {
    name: "department_list",
    data() {
      return {
        items: [
        ],
        activeId: 1,
        activeIndex: 0,
        departmentIds: ""
      }
    },
    components: {},
    mounted() {
      let departmentIds = this.$route.params.departmentIds;
      this.departmentIds = departmentIds;
      this.getDepartments(departmentIds);
    },
    methods: {
      getDepartments(departmentIds) {
        let pdata = {
          ids: departmentIds,
          hospitalId:this.$route.params.id
        };
        API.getDepartmentByIds(pdata).then(res => {
          let departments = res.data.data.departments;
          for (let item in departments) {
            let pdata = {
              id: item
            };
            let department = "";
            let option = {

              text: "",
              // 导航名称右上角徽标，2.5.6 版本开始支持
              // 是否在导航名称右上角显示小红点
              dot: false,
              // 导航节点额外类名
              className: 'pop-deparment',
              // 该导航下所有的可选项
              children: [

              ]
            };
            API.getDepartmentDetail(pdata).then(res => {
              department = res.data.data.department;
              option.text = department.name
            });

            let s = departments[item];
            for (let i = 0;i<s.length;i++) {
              let d= s[i];
              option.children.push( {
                text:  d.name,
                id: d.id
              })
            }
            this.items.push(option);
          }
        })
      },
      goDetail(index){
        let hospitalId = this.$route.params.id;
        let departmentId = index.id;
        this.$router.push("/department_doctor/"+hospitalId+"/"+departmentId).catch(err=>{

        })
      },
      onClickLeft(){
        this.$router.back(-1);
      }
    }
  }
</script>

<style scoped>
  .van-sidebar-item--select {
    color: #323233;
    font-weight: 500;
    border-color: pink;
  }

  .van-tree-select__item--active {
    color: blue;
  }
  .container{
    padding-top: 1.35rem;
  }
</style>
