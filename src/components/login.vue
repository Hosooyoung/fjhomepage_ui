
<template>

<div id="header" class="body">
  <div class="header-in">
    <h1 id="logo"><a href="/" class=""></a></h1>
    <div id="gnb">
    <ul>
        <li><a href="/info" >공지사항</a></li>
        <li><a href="/board">게시판</a></li>
        <li><a @click="video">동영상 메뉴얼</a></li>
      </ul>
    </div>
  </div>
 
 <div v-if="status==0">
   <div class="util">
     <input type="text" title="아이디" v-on:keyup.enter="login" v-model="user.userid" class="inp_main mr8" style="width:150px;" placeholder="아이디">
     <input type="password" title="비밀번호" v-on:keyup.enter="login" v-model="user.password" class="inp_main mr20" style="width:150px;" placeholder="비밀번호">
     <a href="javascript:;" v-on:click="login" class="login_btn mr8" >로그인</a><span class="d_mem"> | </span> <a style="font-weight:bold" href="javascript:;"  v-on:click="createAccount">회원가입</a> 
     <!--button  v-on:click="login" style="margin-top:5px;font-size:1.3em;">로그인</button>
     <span class="d_mem"> | </span> <button  style="margin-top:5px;font-size:1.3em;" class="mr8"  v-on:click="createAccount">회원가입</button-->
       
  </div>
 </div>
  <div v-if="status==1" ref="status" class="util">
    
  <a style="font-size:12px;margin-right:0.9em;">{{user.userid}}</a>
  <span class="d_mem">|</span>
      <a href="" class="login_btn mr8" v-on:click="data_flatform">데이터 플랫폼</a>
      <span class="d_mem"> | </span>
      <a href="javascript:;" class="login_btn mr8" id="show-modal_farmos" @click="showModal_farmos = true">장비제어</a>
       <modal_farmos v-if="showModal_farmos" @close="showModal_farmos = false">
        <h3 slot="header">장비제어</h3>
        </modal_farmos>
      <span class="d_mem"> | </span>
      <a href="javascript:;" class="login_btn mr8" v-on:click="caculate" >양액계산기</a>
      <span class="d_mem"> | </span>
      <a href="javascript:;" class="login_btn mr8" id="show-modal" @click="showModal = true" >회원정보수정</a>
       <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">회원정보수정</h3>
        </modal>
      <span class="d_mem"> | </span>
      <a href="javascript:;" class="login_btn mr8" v-on:click="logout" >로그아웃</a>
      <span class="d_mem" v-if="check_auth=='admin'"> | </span> 
      <el-badge :value="new_join" class="item" v-if="check_auth=='admin'">
        <div style="width:55px;text-align:left;" >
      <a href="javascript:;" class="login_btn" @click="ShowMembers"  v-if="check_auth=='admin'" ref="check_auth">회원관리</a>
        </div>
      </el-badge>

  </div>
</div>
</template>
<script>
import modal from './modal'
import modal_farmos from './modal_farmos'
//import modal_calculator from './Calculator'
export default {
    data: function () {
  return {
    user: {
      userid: '',
      password: ''
    },
    status:''
    ,check_id:localStorage.getItem("id")
    ,check_auth:localStorage.getItem("auth")
    ,showModal:false
    ,showModal_farmos:false
    ,showModal_Cal:false
    ,modal_message:''
    ,new_join:''
  } 
},
mounted(){
    this.check_login();
    this.get_new_join_count();
},
methods: {
 login: function () {
   if(this.user.userid==''){
     alert("아이디를 입력해주세요.")
     return;
   }
   if(this.user.password==''){
     alert("비밀번호를를 입력해주세요.")
     return;
   }
    this.$http.post('/users/logincheck', {
      user: this.user
    })
    .then((res) => {  //로그인 성공
         if (res.data.success == true) {
          if(res.data.auth==2){
            alert("휴면회원입니다.관리자에게 문의하세요.");
            return;
          }
          else if(res.data.auth==3){
            alert("없는 아이디입니다.");
            return;
          }
          else if(res.data.auth==4){
            alert("가입신청승인 대기중입니다. 관리자에게 문의하세요");
            return;
          }else if(res.data.auth==1){
            this.check_auth="admin";  
          }
          else if(res.data.auth==0){  
            this.check_auth="user";  
          }
          localStorage.setItem("id" ,this.user.userid);
          localStorage.setItem("auth" ,this.check_auth);
          this.user.userid=localStorage.getItem("id");
           this.status=1;
          alert(this.user.userid+"님,환영합니다.");   
        this.$router.go();
        }
      else
        alert(res.data.message);
      },
      (err) => { // error 를 보여줌
        console.log('err1');
        alert(err);
      
    })
    .catch(err => {
        console.log('err2');
      alert(err);
    })
  },
  createAccount: function(){
    this.$router.push({path:'/create'});
  },
  check_login: function(){
    if(this.check_id!=null&&this.check_auth!=null){
    this.user.userid=this.check_id;
    this.status=1;
    }
  },
  logout: function(){
    localStorage.removeItem("id");
    localStorage.removeItem("auth");
    this.user.userid='';
    this.status=0;
    this.$router.push({path:'/'})
  },
  ShowMembers: function(){
    this.$router.push({path:'/Members'});
  },
  data_flatform: function(){
    alert("서비스 준비중입니다.");
  },
  caculate:function(){
    window.open("/calculator", "양액계산기", "width=1800px, height=800, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes" );
  },
  video:function(){
    window.open("/video", "동영상메뉴얼", "width=1800px, height=900, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes" );
  },
  go_link:function(where){
    if(where=="main"){
      this.$router.push({path:'/'});
    }
    else if(where=="info"){
      this.$router.push({path:'/info'});
    }
    else if(where=="board"){
      this.$router.push({path:'/board'});
    }
  },
  get_new_join_count:function(){
      var auth=localStorage.getItem("auth")
      if(auth=='admin'){
      this.$http.post('/users/get_newJoin')
			.then((res)=>{
        if(res.data.success==true){
          this.new_join=res.data.count;
        }
        else{
          this.new_join='';
        }
			})
			.then((err)=>{
				console.log(err);
      })
      }
  }
  
},
components:{
  modal,
  modal_farmos
//  modal_calculator
}
}
</script>
<style>

@charset "utf-8";

 @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 600;
    src: url('../assets/fonts/NanumGothic.eot');
    src: url('../assets/fonts/NanumGothic.eot?#iefix') format('embedded-opentype'), url('../assets/fonts/NanumGothic.woff') format('woff'), url('../assets/fonts/NanumGothic.ttf') format('truetype'),url('../assets/fonts/NanumGothic.woff2') format('woff2'); 
}

@font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 800;
    src: url('../assets/fonts/NanumGothic-Bold.eot');
    src: url('../assets/fonts/NanumGothic-Bold.eot?#iefix') format('embedded-opentype'),url('../assets/fonts/NanumGothic-Bold.woff') format('woff'), url('../assets/fonts/NanumGothic-Bold.ttf') format('truetype'), url('../assets/fonts/NanumGothic-Bold.woff2') format('woff2');
}



@font-face {
    font-family: 'ntk';
    font-weight: normal;
    font-style: normal;
    src: url("../assets/fonts/notokr-regular.eot");
    src: url("../assets/fonts/notokr-regular.eot?#iefix") format('embedded-opentype'),
     url("../assets/fonts/notokr-regular.woff") format('woff'),
     url("../assets/fonts/notokr-regular.woff2") format('woff2');
    
}



body {
    position: relative;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: 'ntk', 'Nanum Gothic', '나눔고딕', "돋움", dotum, sans-serif;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
textarea,
p,
blockquote,
th,
td,
input,
select,
textarea,
button {
    margin: 0;
    padding: 0
}

img,
fieldset,
iframe {
    border: 0 none
}

dl,
ul,
ol,
menu,
li {
    list-style: none
}

blockquote,
q {
    quotes: none
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none
}

article,
aside,
footer,
header,
hgroup,
nav,
section,
menu {
    display: block;
    padding: 0;
    margin: 0;
}

img,
input,
button,
select,
textarea {
    vertical-align: middle;
}

button {
    overflow: visible;
    margin: 0;
    padding: 0;
    border: none;
    background: 0;
    vertical-align: middle;
    cursor: pointer;
}

table {
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: fixed;
    word-wrap: break-word;
}

label {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    font-weight: normal;
    margin: 0;
}

caption {
    position: static;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
    padding: 0;
}

hr,
legend,
caption {
    overflow: hidden;
    position: absolute;
    top: -9999px;
    left: -9999px;
    height: 0;
    font-size: 0;
    line-height: 0;
    padding: 0;
}

em,
i,
address {
    font-style: normal;
}

a,
a:link,
a:visited {
    color: #222222;
    text-decoration: none;
}

a:hover {
    color: #339966;
    text-decoration: underline;
    text-decoration: none;
}

a:active {
    color: #006600;
    text-decoration: none;
}


.wrap,
#header,
#container,
#contents,
#footer {
    position: relative;
}

html,
body,
.wrap {
    height: 100%;
    width: 100%;
}


#header {
    top:-5px;
    position: fixed;
    margin: 0 auto;
    width: 100%;
    z-index: 100;
    height: 90px;
    background: #fff;
    border-bottom: 1px solid #e1e1e1
}

#header .header-in {
    position: relative;
    width: 1280px;
    margin: 0 auto
}

#header #logo {
    position: absolute;
    top: 30px;
    left: 0;
    width: 224px;
    height: 24px;
    z-index: 10;
    background: url('../assets/img/logo.png') no-repeat 0 0;
    font-size: 0;
    line-height: 0;
}

#header #logo a {
    display: block;
    height: 100%;
}

.login_btn {
  font-weight: 800 !important;
}
#gnb {
    position: relative;
    width: 100%;
    padding: 0;
    height: 84px;
}

#gnb>ul {
    padding: 24px 0 0 240px;
}

#gnb>ul:after {
    content: "";
    display: block;
    clear: both;
}

#gnb>ul>li {
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: top;
}

#gnb>ul>li>a {
    position: relative;
    display: inline-block;
    padding: 0 10px 0;
    height: 41px;
    line-height: 41px;
    font-size: 18px;
    color: #000;
    font-weight: 800;
    letter-spacing: -0.02em;
    vertical-align: top;
}

#gnb>ul>li>a:hover,
#gnb>ul>li.active a {
    text-decoration: none;
    color: #55bc7e;
}

#header .util {
    position: absolute;
    right: 320px;
    top: 35px;
    text-align: right;
    height: 19px;
    width: 750px;
    float: left
}

#header .util {
    display: inline-block;
    font-size: 14px;
}

#header .util a {
    font-size: 13px;
    color: #333;
    font-weight: bold;
}

#header .util .d_mem {
    display: inline-block;
    width: 1px;
    height: 14px;
    content: '';
    background: #c6c6c6;
    vertical-align: 10px;
    margin: 0 12px 0 5px;
    font-size: 0;
}


button {
    font-family: 'ntk';
    font-size: 0;
    vertical-align: top;
    border: 0;
}





a.link_ty1 {
    color: #0066cc;
    text-decoration: underline;
}



.mt0 {
    margin-top: 0px !important;
}

.mt10 {
    margin-top: 10px !important;
}

.mt20 {
    margin-top: 20px !important;
}

.mt70 {
    margin-top: 70px !important;
}

.mr5 {
    margin-right: 5px !important;
}

.mr8 {
    margin-right: 8px !important;
}

.mr10 {
    margin-right: 10px !important;
}

.mr20 {
    margin-right: 20px !important;
}

.mr30 {
    margin-right: 30px !important;
}
.mr200 {
    margin-right: 200px !important;
}


.ml20 {
    margin-left: 20px !important;
}

.ml30 {
    margin-left: 30px !important;
}

.ml40 {
    margin-left: 40px !important;
}

.mb30 {
    margin-bottom: 30px !important;
}

.mb60 {
    margin-bottom: 70px !important;
}


.inp_main {
    display: inline-block;
    width: 100%;
    min-width: auto;
    border: 2px solid #55bc7e;
    line-height: 30px;
    height: 33px;
    color: #333;
    font-size: 13px;
    padding: 0 6px;
    vertical-align: middle;
    border-radius: 3px;
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
}

</style>