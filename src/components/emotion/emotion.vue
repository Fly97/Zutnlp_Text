<template>
  <div>
    <el-main>
    <div align="right">
      <el-row>
        <el-button @click="sub" type="primary" round>刷新</el-button>
      </el-row>
    </div>
      <h1>情感分析</h1>
    </el-main>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

  .unsatis-info{
    font-size: 18px;
    color: #000000;
  }
  .unsatis-body{
    position:relative;
    margin:42px 0 0;
    margin-top:42px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }
  .result-cover{
    overflow: hidden;
    width: 1180px;
    margin-top: 24px;
    padding: 26px 0 0 28px;
    padding-top: 26px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 28px;
  }
  .result-tips{
    position:relative;
    box-sizing:border-box;
    display:inline-block;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 8px 16px;
    padding-top:8px;
    padding-right:16px;
    padding-bottom:8px;
    padding-left: 16px;
    height: 48px;
    border:1px solid #e0e0e0;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-top-color: #e0e0e0;
    border-right-color: #e0e0e0;
    border-bottom-color: #e0e0e0;
    border-left-color: #e0e0e0;
    cursor: pointer;
  }
  .result-tips-mes{
    max-width: 280px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    text-align: center;
    margin-bottom: 2px;
    line-height: 16px;
  }
  .result-tips-des{
    font-size: 13px;
    text-align: center;
    color: #999;
  }
  .result-left{
    float: left;
    padding-right: 41px;
    margin-bottom: 26px;
    width:900px;
    min-height: 328px;
    font-size: 0px;
    border-right: 1px solid #d8d8d8;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #d8d8d8;
  }
</style>
