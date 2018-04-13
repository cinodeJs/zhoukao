<template>
  <div>
      <el-table
    :data="tableData"
    border
    style="width: 70%;margin:0 auto;">
     <el-table-column
      fixed
      prop="date"
      label="星期\节次"
      width="150">
    </el-table-column>
    <el-table-column
      fixed
      prop="haha"
      label="星期一"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="星期二"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="星期三"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="星期四"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="星期五"
      width="120">
    </el-table-column>
    
  </el-table>
<div v-for="i in arr">
    <span class="ji">{{i.shijian}}</span>
    <span class="ji">{{i.kecheng}}</span>
    <span class="ji">{{i.kecheng1}}</span>
    <span class="ji">{{i.kecheng2}}</span>
    <span class="ji">{{i.kecheng3}}</span>
    <span class="ji">{{i.kecheng4}}</span>
    
    </div>
  </div>
  
</template>


<script>
export default {
methods: {
      handleClick(row) {
        console.log(row);
      },
      
    },

    data() {
      return {
        tableData: [],
        arr:[]
      }
    },
    created(){
       this.$http.post("http://localhost:8000",{}, { emulateJSON: true }).then(e=>this.arr=e.body)
    }

};
</script>

<style>

.cell{
    text-align: center;
}
.ji{
    margin: 50px;
    width: 20px;
    height: 30px;
    border: 1px solid #ccc;
}
</style>
