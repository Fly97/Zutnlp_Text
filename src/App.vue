<template>
  <div id="app">
    <div align="center" class="tech-catalog-title">
      语言处理基础技术
    </div>
    <div align="center">
      <h5>提供国际领先的自然语言处理技术，帮助你的产品更好的理解这个世界</h5>
    </div>
    <template>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 1" :key="item">
          <h3>自然语言处理<sub>-中文分词</sub></h3>
          <marquee>Hanlp中文自然语言处理中的分词方法有标准分词、NLP分词、索引分词、N-最短路径分词、CRF分词以及极速词典分词等。</marquee><br><br>
          <marquee>中文分词：<sub>曾辉祥</sub></marquee>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item">
          <h3>自然语言处理<sub>-命名实体识别</sub></h3>
          <marquee>命名实体识别：主要包含中国人名识别、音译人名识别、日本人名识别、地名识别以及机构名识别五大类别</marquee><br><br>
          <marquee>命名实体识别能够高效、快速、准确的将内容识别   &nbsp&nbsp&nbsp&nbsp <sub>开发人员-支友盟</sub></marquee>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item">
          <h3>自然语言处理<sub>-摘要关键字</sub></h3>
          <marquee>摘要关键字：<sub>-赵向阳</sub></marquee>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item">
          <h3>自然语言处理<sub>-依存句法分析</sub></h3>
          <marquee>依存句法分析：<sub>-卢思童</sub></marquee>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item">
          <h3>自然语言处理<sub>-简繁拼音转化</sub></h3>
          <marquee>简繁拼音转化：<sub>-陈金新</sub></marquee>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item">
          <h3>自然语言处理<sub>-文本分类</sub></h3>
          <marquee>文本分类：<sub>-曾辉祥</sub></marquee>
        </el-carousel-item>
        <el-carousel-item v-for="item in 1" :key="item">
          <h3>自然语言处理<sub>-情感分析</sub></h3>
          <marquee>情感分析：<sub>-无</sub></marquee>
        </el-carousel-item>
      </el-carousel>
    </template>

    <el-input id="txt"
              type="textarea"
              :autosize="{ minRows: 8, maxRows: 15}"
              placeholder="请输入内容"
              v-model="textarea">
    </el-input><br><br>

    <div>
      <select>
        <option value="url">网页URL</option>
      </select>
      <input  type="email" id="rsslink" size="50" placeholder="请输入网页URL" v-model="urlToTranslate">
      <input @click="getur" class="btn btn-default" id="smt" type="button" value="抓取">
    </div>


      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="chinese">中文分词</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="named">命名实体识别</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="keyrecognition">摘要关键字</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="grarecognition">依存句法分析</router-link></el-menu-item>
        <el-menu-item index="5"><router-link to="PinyinRecognition">简繁拼音转化</router-link></el-menu-item>
        <el-menu-item index="6"><router-link to="Classify">文本分类</router-link></el-menu-item>
        <el-menu-item index="7"><router-link to="emotion">情感分析</router-link></el-menu-item>
      </el-menu>
    <router-view/>
    
  </div>
</template>

<script>
  import emotion from './components/emotion/emotion'
  import classify from './components/recognition/classify'
  export default {
    name: 'App',
    components: {
      emotion,
      classify
    },
    data(){
      return{
        visible : false,
        activeIndex: '1',
        activeIndex2: '1',
        urltext:""
      }
    },
    methods:{
      getur: function (e) {
        let content = document.getElementById("rsslink");
        let postData = ({
          "text":content.value,
        });
        this.$axios({
          method: 'post',
          url:'http://localhost:8888/url/delete',
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
      getdata:function(){
        //发送get请求
        this.$http.get('http://localhost:8888/url/getone').then(function(res){
          console.log(res.data[0].initialtext);
          //let cont = document.getElementById("txt");
          document.getElementById("txt").value=res.data[0].t_data;
        },function(){
          console.log('请求失败处理');
        });
      },
    }
  }
</script>

<style>
  <!--模块背景属性-->
  .el-header {
    background-color: rgba(165, 176, 194, 0.67);
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }

  <!--走马灯属性-->
  .el-carousel__item h3 {
    color: #fefefe;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #03eef7;
    text-align: center;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #08ffc8;
    text-align: center;
  }
  .tech-catalog{
    background:-webkit-linear-gradient(
      top, rgba(24, 58, 99, 0.59), rgba(129, 67, 68, 0.49), rgba(59, 132, 64, 0.47)
    );

  }
  .ai-container .ai-platfrom{
    display: block;
    width: 100%;
    height:100%;
    margin: 0 auto;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    position: relative;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .tech-catalog-title{
    padding: 10px 0 10px;
    padding-top: 10px;
    padding-right: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
    color: #060606;
  }
  .tech-catalog-gallery{
    font-size: 0;
    font-family: empty;
    margin: 0 -18px -35px;
    margin-top: 0px;
    margin-left: -18px;
    margin-bottom: -35px;
    margin-right: -18px;
  }
  .tech-prod-container{
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    width:50%;
    height: 440px;
    margin: 0 18px 35px;
    margin-top: 0px;
    margin-right: 25%;
    margin-left: 25%;
    margin-bottom: 35px;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    vertical-align: top;
    background-color: #ffffff;
    font-size: 0;
    font-family:arial,tahoma,Hiragino Sans
    GB,Microsoft YaHei, sans-serif
  }
  [class^=tech-prod-sign]{
    position: relative;
    height: 220px;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .tech-prod-item-img{
    position: relative;
    width: 520px;
    height: 220px;
    overflow: hidden;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .tech-prod-info{
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 20px 30px;
    padding-left: 30px;
    padding-bottom: 20px;
    padding-right: 30px;
    padding-top: 30px;
  }
  .tech-prod-name{
    padding-bottom: 14px;
    font-size: 18px;
    color: #333333;
  }
  .tech-prod-intro{
    font-size: 14px;
    height: 52px;
    line-height: 26px;
    color: #999999;
    text-align: center;
  }
  .tech-prod-panel{
    text-align: center;
    font-size: 14px;
    margin: 20px 0 10px;
    margin-bottom: 10px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 20px;
    color: #000000;
  }
  .tech-prod-poster-1{
    background: url(//aip.bdstatic.com/portal/dist/1533208648815/ai_images/technology/nlp/prod-poster-1.jpg) 50%;
    background-size: 100% 100%;
  }
  [class^=tech-prod-poster],
  [class^=tech-prod-sign]{
    transition: all .3s linear;
    transition-property: all;
    transition-duration: 0.3s;
    transition-timing-function: linear;
    transition-delay: initial;
  }
  [class^=tech-prod-poster]{
    position: relative;
    height: 220px;
    width: 560px;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>
