<template>
  <div>
    <el-main>
      <div align="right">
        <el-row>
          <el-button @click="sub" type="primary" round>刷新</el-button>
        </el-row>
      </div>
      <div style="margin: 40px 0;"></div>
      <a>分析结果 :</a>
      <p>{{translatedtext}}</p>
      <svg width="850" height="332">
        <g transform="translate(400 166)">
          <text style="font-family: Gabriola;font-size: 59px;fill:#1f77b4;"
                text-anchor="middle" transform="translate(-<script language=javascript>
var number = Math.random();
number = Math.ceil(number * 100);
document.write(number);
</script> -<script language=javascript>
var number = Math.random();
number = Math.ceil(number * 100);
document.write(number);
</script>) rotate(90)">曾辉祥</text>
          <text style="font-family: Gabriola;font-size: 59px;fill:#1f77b4;"
                text-anchor="middle" transform="translate(-<script language=javascript>
var number = Math.random();
number = Math.ceil(number * 100);
document.write(number);
</script> -<script language=javascript>
var number = Math.random();
number = Math.ceil(number * 100);
document.write(number);
</script>) rotate(90)">赵向阳</text>
        </g>
      </svg>
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
        str2:[],
        translatedtext:""
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
          "initial": content.value,
        };
        this.$axios({
          method: 'post',
          url:'http://localhost:8888/keyrecogn/save',
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
        // this.str1=myobj[0].words.split(",");
        //this.str2=myobj[0].parts.split(",");
        for(let i=0;i<this.str1.length-1;i++){
          this.arrys.push({"word":this.str1[i],"part":this.str2[i]});
        }
      },
      getdata:function(){
        //发送get请求
        this.$http.get('http://localhost:8888/keyrecogn/getone').then(function(res){
          console.log(res.data[0].initialtext);
          this.translatedtext=res.data[0].processedtext;
        },function(){
          console.log('请求失败处理');
        });
      }
    }
  }
</script>

<style scoped>




</style>
