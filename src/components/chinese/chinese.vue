<template xmlns:text-anchor="http://www.w3.org/1999/XSL/Transform">
  <div>
    <el-main>
      <div align="right">
        <el-row>
          <el-button @click="sub" type="primary" round>刷新</el-button>
        </el-row>
      </div>
      <div style="margin: 40px 0;"></div>
      <a>分析结果 :</a>
      <div class="result-cover">
        <div class="result-left">
          <div class="result-tips" v-for="arry in arrys" >
            <div class="result-tips-mes">{{arry.word}}</div>
            <div class="result-tips-des">{{arry.part}}</div>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
  export default {
    name: "named",
    data (){
      return {
        sites:[],
        arrys:[],
        str1:[],
        str2:[]
      }
    },
    created:function(){
      this.sub();
    },
    methods:{
      sub:function() {
        this.arrys=[];
        let content = document.getElementById("txt");
        let postData={
          "text": content.value,
        };
        this.$axios({
          method: 'post',
          url:'http://localhost:8888/chinese/save',
          data:postData,
        }).then((res)=>{
          this.getdata();
          console.log(res.data)
        }).catch(err=>{
          console.log(err)
        });
      },
      timar:function() {
        //提取键值
        let sa=JSON.stringify(this.sites);
        console.log(sa);      //sa为json字符串
        let myobj=eval(sa);  //myobj为json对象数组
        this.str1=myobj[0].words.split(",");
        this.str2=myobj[0].parts.split(",");
        for(let i=0;i<this.str1.length-1;i++){
          this.arrys.push({"word":this.str1[i],"part":this.str2[i]});
        }
      },
      getdata:function(){
        //发送get请求
        this.$http.get('http://localhost:8888/chinese/getone').then(function(res){
          this.sites=res.body;
          this.timar();
        },function(){
          console.log('请求失败处理');
        });
      }
    }
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
