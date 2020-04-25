<template>
  <div class="main">
    <van-tree-select
            :items="items"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
            height="20rem"
    />
  </div>
</template>

<script>
  import API from "../../assets/js/api"
  export default {
    name: "department_list",
    data(){
      return {
        items:[
          {
            // 导航名称
            text: '推荐科室',
            // 导航名称右上角徽标，2.5.6 版本开始支持
            badge: 3,
            // 是否在导航名称右上角显示小红点
            dot: true,
            // 导航节点额外类名
            className: 'pop-deparment',
            // 该导航下所有的可选项
            children: [
              {
                // 名称
                text: '温州',
                // id，作为匹配选中状态的标识符
                id: 1,
                // 禁用选项
                //disabled: true,
              },
              {
                text: '杭州',
                id: 2,
              },
            ],
          },
          {
            // 导航名称
            text: '内科',
            // 导航名称右上角徽标，2.5.6 版本开始支持
            //badge: 3,
            // 是否在导航名称右上角显示小红点
            //dot: true,
            // 导航节点额外类名
            className: 'neike',
            // 该导航下所有的可选项
            children: [
              {
                // 名称
                text: '温州',
                // id，作为匹配选中状态的标识符
                id: 1,
                // 禁用选项
                //disabled: true,
              },
              {
                text: '杭州',
                id: 2,
              },
              {
                text: '杭州',
                id: 3,
              },
              {
                text: '杭州',
                id: 4,
              },
              {
                text: '杭州',
                id: 5,
              },
              {
                text: '杭州',
                id: 6,
              },
              {
                text: '杭州',
                id: 7,
              },
              {
                text: '杭州',
                id: 8,
              },
            ],
          },
        ],
        activeId: 1,
        activeIndex: 0,
        departmentIds:""
      }
    },
    components:{

    },
    mounted(){
      let departmentIds = this.$route.params.departmentIds;
      this.departmentIds = departmentIds;
      this.getDepartments(departmentIds);
    },
    methods:{
      getDepartments(departmentIds){
        let pdata = {
          ids:departmentIds
        };
        API.getDepartmentByIds(pdata).then(res=>{
          let departments = res.data.data.departments;
          // this.items.push( {
          //
          //   text:   ,
          //   // 导航名称右上角徽标，2.5.6 版本开始支持
          //   badge: 3,
          //   // 是否在导航名称右上角显示小红点
          //   dot: true,
          //   // 导航节点额外类名
          //   className: 'pop-deparment',
          //   // 该导航下所有的可选项
          //   children: [
          //     {
          //       // 名称
          //       text: '温州',
          //       // id，作为匹配选中状态的标识符
          //       id: 1,
          //       // 禁用选项
          //       //disabled: true,
          //     },
          //     {
          //       text: '杭州',
          //       id: 2,
          //     },
          //   ],
          // })
          //let json2map= JSON.parse(departments);
          console.log(departments);
          for(let item in departments){
            let ds = json2map.get(item);
            console.log(ds);
          }
        })
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
</style>
