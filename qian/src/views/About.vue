<template>
  <div class="about">
    <template>
      节次：
  <el-select v-model="jeici" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>
<template>
      课程：
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in ke"
      :key="item.value"
      :label="item.hehe"
      :value="item.haha">
    </el-option>
  </el-select>
</template>
<el-button type="success" round @click="d">成功按钮</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "第一节"
        },
        {
          value: "选项2",
          label: "第二节"
        },
        {
          value: "选项3",
          label: "第三节"
        },
        {
          value: "选项4",
          label: "第四节"
        },
        {
          value: "选项5",
          label: "第五节"
        },
        {
          value: "选项6",
          label: "第六节"
        },
        {
          value: "选项7",
          label: "第七节"
        },
        {
          value: "选项8",
          label: "第八节"
        }
      ],
      jeici: "",

      ke: [
        {
          haha: "选项1",
          hehe: "语文"
        },
        {
          haha: "选项2",
          hehe: "数学"
        },
        {
          haha: "选项3",
          hehe: "英语"
        }
      ],
      value: "",
    };
  },
  methods:{
    d(){
      
    }
  }

};

</script>