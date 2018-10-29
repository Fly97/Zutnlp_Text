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
      <p>{{myData.fuhao}}</p>
      <p>{{myData.shengmu}}</p>
      <p>{{myData.yunmu}}</p>
    </el-main>
  </div>
</template>

<script>
  export default {
    name: "PinyinRecognition",
    data: function () {
      return {
        myData: {
          fuhao: "",
          shengmu:"",
          yunmu:""
        },
        textToTranslate: "",
        menthod:""
      }
    },
    created:function(){
      this.sub();
    },
    methods: {
      formSubmit: function (e) {
        //alert(this.textToTranslate);
        // console.log(this.textToTranslate);
        this.$emit("eventSubmit", this.textToTranslate,this.menthod);//传输数据
        e.preventDefault();//取消默认事件
      },
      sub: function (e) {
        let postData = ({
          "text":this.textToTranslate,
        });
        this.$axios({
          method: 'post',
          url:'http://localhost:8888/pinyin/save',
          data:postData,
          dataType: 'json',
        }).then((res)=>{
          this.getdata();
          console.log(res.data)
        }).catch(err=>{
          console.log(err)
        });
        e.preventDefault();
      },
      getdata:function () {
        this.$http.get('http://localhost:8888/pinyin/getone').then(function(res){
          //let x = {[]};
          //let x=res.data;
          // this.$emit("eventSubmit", x);
          this.myData.fuhao =res;
          this.myData.shengmu =res.data[0].t_nlptext2;
          this.myData.yunmu =res.data[0].t_nlptext3;
          // console.log(res.data[0].t_nlptext);
        })
      }
    }

  }

</script>

<style scoped>

</style>
