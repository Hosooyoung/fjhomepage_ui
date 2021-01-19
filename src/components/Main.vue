<template>
  <div class="body">
  <Login></Login>
  <div id="fullpage">
  <div class="section" id="section0">
    <div class="cont_box">
      <p class="tit">개방형 식물 표현체 <br>
        데이터 수집-공유-분석-활용 플랫폼 개발</p>
      <p class="tit2">Developing open platform for collecting, sharing, analyzing, and utilizing plant phenome data</p>
      <div class="visual-area">
        <p class="mainimg mr30"><img src="../assets/img/main_img.png" alt=""></p>
      </div>
      <div class="cnt-area">
       <div class="box ml40">
          <h2 class="noti_tit">공지사항</h2>
          <p>
            <button type="button" class="btn-more2" v-on:click="go_info">더보기</button>
          </p>
          <ul>
            <li v-for="(row,idx) in info_list" :key="idx"><a href="javascript:;" @click="fnView_info(`${row.seq}`)">{{row.seq}}. {{row.title}}</a></li>
          </ul>
        </div>
        <div class="box ml20">
          <h2 class="qna_tit">Q&A</h2>
          <p>
            <button type="button" class="btn-more2" v-on:click="go_board">더보기</button>
          </p>
          <ul>
            <li v-for="(row,idx) in board_list" :key="idx"><a href="javascript:;" @click="fnView_board(`${row.seq}`)">{{row.seq}}. {{row.title}}</a></li>
          </ul>
        </div>
   <div class="manual ml40">
          <button type="button" class="btn-line mr5" v-on:click="Download_1">육묘 매뉴얼<br>
          다운로드</button>
          <button type="button" class="btn-line mr5" v-on:click="Download_2">UI 사용 매뉴얼<br>
          다운로드</button>
          <button type="button" class="btn-line mr5" v-on:click="Download_3">양액 조제 사용 매뉴얼<br>
          다운로드</button>
          <button type="button" class="btn-line" v-on:click="Download_4">장치 사용 매뉴얼<br>
          다운로드</button>
        </div>
      </div>
    </div>
  </div>
</div>
 <div class="section" id="section1">
  <div class="box-business">
    <h2>사업소개</h2>
    <div class="pg_left">
      <p class="t1">한국과학기술연구원(KIST)<br>
        강릉분원 천연물연구소</p>
      <p class="t2">(이하 KIST 천연물연구소)</p>
      <p class="txt_ge">는 과학기술정보통신부 소관 ‘2020년도 바이오·의료기술개발사업’ <strong>「개방형 식물 표현체 데이터 수집-공유-분석-활용 플랫폼 개발」</strong> 연구과제를 수행하고 있습니다.<br>
        <br>
        본 연구과제는 식물학 및 농업 분야 디지털 전환을 가속화하기 위한 연구의 일환으로, 식물 재배환경에 따라 변화하고 결정되는 식물생육 및 표현형을 디지털 데이터화 하고, 이를 효과적으로 수집·분석할 수 있는 데이터 플랫폼을 개발하고 활용함으로써, 식물 최적 생육조건 도출 기술 및 지능형 환경제어 기술 등을 개발 하는데 주목적을 두고 있습니다.<br>
        <br>
        주관연구기관인 KIST 천연물연구소는 협동연구기관인 코리아디지탈(주), 주식 회사 지농과 함께 다양한 식물 재배조건에 따른 식물생육 및 표현형 변화 데이터를 생산하고 수집할 수 있는 ‘분산형 식물재배시스템’인 ‘푸드쥬크박스＇를 개발하고,’20년 12월부터 농업계 고등학교와 유관 연구기관에 보급할 예정이며, 수집한 데이터에 대한 저장 및 공유, 집단지성에 기반한 데이터 분석 및 해석을 효과적으로 수행하기 위한 ‘클라우드 기반 개방형 식물 표현체 데이터 플랫폼’을 ‘22년까지 단계적으로 구축할 계획입니다.</p>
    </div>
    <div class="pg_right">
      <h3>1. 과제 구성</h3>
      <ul class="txt_busi mb60">
        <li><strong>사업명 : </strong>2020년 바이오의료기술개발사업 (GW첨단바이오사업)</li>
        <li><strong>과제명 : </strong>개방형 식물 표현체 데이터 수집-공유-분석-활용 플랫폼 개발</li>
        <li><strong>총 연구기간  : </strong>2020.6.1.~2022.12.31. (총 31개월)</li>
        <li><strong>주관연구기관 : </strong>한국과학기술연구원</li>
        <li><strong>협동연구기관 : </strong>코리아디지탈(주), 주식회사 지농</li>
        <li><strong>총괄연구책임자  : </strong>정제형 (한국과학기술연구원 스마트팜융합연구센터)</li>
      </ul>
      <h3>2. 연구개발 목표 및 주요내용</h3>
      <ul class="txt_busi2">
        <li> 오픈소스형 분산형 식물재배시스템 개발과 보급, 클라우드 기반 개방형 <br>
          데이터 플랫폼 구축을 통한 식물생육 및 재배환경 데이터 생산-수집-분석</li>
        <li> 개방형 데이터를 활용한 식물 생육특성 조절 기작 구명 및 지능형 환경제어 기술 개발</li>
        <li> 식물생육 / 재배환경데이터 공유 및 분석, 활용 기능 강화, 집단지성 활용을 통한 개방형 데이터 플랫폼의 순환적 고도화</li>
        <li> 연구, 교육용 식물재배시스템 및 최적 재배 레시피 도출 기술 사업화 모델 <br>
          개발</li>
      </ul>
    </div>
  </div>
</div>
<!-- //section2 -->
<!-- section3 -->
<div class="section" id="section2">
  <div class="box-org">
    <h2 class="tit-ty1">참여기관</h2>
    <ul>
      <li class="org01">
        <p class="txt-box">한국과학기술연구원 천연물연구소 스마트 팜융합연구센터는 과학기술 기반 미래농업 융합·원천기술 개발 연구를 수행하고 있으 며, 주요 연구분야는 식물 오믹스 데이터 기반 생육·성분 변화 모델링 및 기전 구명 연구 / 인공지능 기반 스마트팜 통합 데이터 수집-분석-제어 플랫폼 연구/ 스마트팜 생산 천연물 원료 표준화 및 산업화 연구입니다.</p>
        <p>
          <button type="button" class="btn-more grad" v-on:click="go_link('kist')">더보기</button>
        </p>
      </li>
      <li class="org02">
        <p class="txt-box">코리아디지탈은 4차 산업 혁명 시대를 맞이 하여, 우리의 경제와 삶을 바꿔 놓을 성과가 있고 그런 성과를 만들려고 도전하는 기업 입니다.<br>
          코리아디지탈은 1997년부터 센서분야의 R&D 역량 강화를 통해 200여 종의 다양한 센서 제품을 보유하고 있는 센서 전문 기업 입니다.<br>
          이를 통해 국내 MBL (스마트 과학실험 기자 재) 시장점유율 70%를 점유하고 있으며 4차 산업의 미래 먹거리로 스마트팜 사업을 집중 적으로 육성하고 있습니다. </p>
        <p>
          <button type="button" class="btn-more grad" v-on:click="go_link('kd')">더보기</button>
        </p>
      </li>
      <li class="org03">
        <p class="txt-box"><strong>수 많은 농업 데이터를 하나로 모으고 정보로 가공해 유용한 서비스를 만드는 농업정보기술 기업 </strong><br>
          <br>
          농업과 정보기술을 조화롭게 연결해 어려운 농업 문제를 푸는 데에 작은 힘을 더하겠습니다. 
          지농의 농업정보기술로 농사가 편해지며, 농민이 풍요롭고, 농업의 가치를 높입니다. </p>
        <p>
          <button type="button" class="btn-more grad" v-on:click="go_link('jinong')">더보기</button>
        </p>
      </li>
    </ul>
  </div>
</div>
<!-- //section3 -->
<!-- section4 -->
<div class="section" id="section3">
  <div class="box-confun">
    <div class="contact">
      <div class="box-contact">
        <h2>Contact</h2>
        <p><img src="../assets/img/contact_logo.png" alt="한국과학기술연구원 강릉분원 천연물연구소"></p>
        <h3>‘개방형 식물 표현체 데이터 수집-공유-분석-활용 플랫폼’</h3>
        <p>총괄연구책임자 <strong>정제형</strong><br>
          (한국과학기술연구원 천연물연구소 스마트팜융합연구센터)<br>
          전화 : <strong>033-650-3662</strong><br>
          이메일 : <strong>jhjung@kist.re.kr</strong></p>
      </div>
    </div>
    <div class="funding">
      <div class="box-funding">
        <h2>Funding Source</h2>
        <p class="mt20"><img src="../assets/img/funding_logo.png" alt="과학기술정보통신부"></p>
        <p class="mt70">푸드쥬크박스 개방형 데이터 플랫폼은<br>
          2020년도 정부 (과학기술정보통신부) 재원으로 한국연구재단의 지원을 받은<br>
          『개방형 식물 표현체 데이터 수집-공유-분석-활용 플랫폼 개발』<br>
          과제를 통해  『한국과학기술연구원(KIST)-코리아디지탈㈜-주식회사지농』이<br>
          개발하고 보급한 것입니다. </p>
      </div>
    </div>
  </div>
</div>
<!-- //section4 -->
<!-- footer -->
<div class="footer">
  <div class="footer_in">
    <div class="ft_logo"> <img src="../assets/img/footer_logo.png" alt="한국과학기술연구원 강릉분원 천연물연구소"> </div>
    <div class="ft-text"> (25451) 강원도 강릉시 사임당로 679 한국과학기술연구원 강릉분원 천연물연구소<br>
      <strong>TEL : </strong>031-360-1970 <strong class="ml20">Fax :</strong>033-650-3419<br>
    </div>
    <ul class="menu">
      <li><a href="javascript:;" @click="Download_5">개인정보처리지침 </a></li>
      <li> <a href="javascript:;" @click="Download_6">이용약관</a></li>
    </ul>
  </div>
</div>
  </div>
</template>
<script>
import Login from './login.vue';
export default {
  
  data () {
    return {
      board_title:'',
      board_list:'',
      info_title:'',
      info_list:'',
      body:''
    }
  }
  ,mounted() { //페이지 시작하면은 자동 함수 실행
    
    this.fnGetInfoList();
    this.fnGetBoardList();
  },
  
 methods: {
    Download_1:function(){
    this.$http({
    method: 'POST',
    url: '/main/DownloadFile_1',
    responseType: 'blob',
    headers: {
        "Content-Type": "application/pdf"
    }
})
.then(response =>{
    const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '육묘 매뉴얼.pdf');
    document.body.appendChild(link);
    link.click();
})
},
 Download_2:function(){
    this.$http({
    method: 'POST',
    url: '/main/DownloadFile_2',
    responseType: 'blob',
    headers: {
        "Content-Type": "application/pdf"
    }
})
.then(response =>{
    const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'FoodJukbox UI(화면)사용법.pdf');
    document.body.appendChild(link);
    link.click();
})
},
go_info: function(){
  this.$router.push('/info')
},
go_board: function(){
  this.$router.push('/board')
},
fnView_info(seq) {
			this.body.seq = seq;
			this.$router.push({path:'./inforead',query:this.body}); 
},
fnView_board(seq) {
			this.body.seq = seq;
			this.$router.push({path:'./boardread',query:this.body});
},
fnGetInfoList() { //데이터 가져오기 
      this.body = { 
				page:this.page
			}
			this.$http.get('/info/getList',{params:this.body})
			.then((res)=>{
				if(res.data.success) {
          this.info_list = res.data.list;
          for(var i in this.info_list){
            if(this.info_list[i].title.length>20){
              this.info_list[i].title=this.info_list[i].title.substr(0,20)+"..."
            }
          }
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요.");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
    }
,
fnGetBoardList() { //데이터 가져오기 
      this.body = { 
				page:this.page
			}
			this.$http.get('/board/getList',{params:this.body})
			.then((res)=>{
				if(res.data.success) {
          this.board_list = res.data.list;
          for(var i in this.board_list){
            if(this.board_list[i].title.length>20){
              this.board_list[i].title=this.board_list[i].title.substr(0,20)+"..."
            }
          }
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요.");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
    },
    go_link:function(where){
      if(where=="kist"){
         window.open("https://gn.kist.re.kr:8443/portal/main/main.do", "한국과학기술연구원 강릉분원", "width=800, height=700, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes" ); 
      }
      else if(where=="kd"){
         window.open("http://www.koreadigital.com/", "코리아디지탈 - Think Digital", "width=800, height=700, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes" ); 
      }
      else if(where=="jinong"){
         window.open("http://www.jinong.co.kr/pages/index.html",  "width=800, height=700, toolbar=yes, menubar=yes, scrollbars=yes, resizable=yes" ); 
      }
    },
 Download_3:function(){
    this.$http({
    method: 'POST',
    url: '/main/DownloadFile_3',
    responseType: 'blob',
    headers: {
        "Content-Type": "application/pdf"
    } 
})
.then(response =>{
    const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '양액조제방법.pdf');
    document.body.appendChild(link);
    link.click();
})
},
 Download_4:function(){
    this.$http({
    method: 'POST',
    url: '/main/DownloadFile_4',
    responseType: 'blob',
    headers: {
        "Content-Type": "application/pdf"
    }
})
.then(response =>{
    const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '장치사용방법.pdf');
    document.body.appendChild(link);
    link.click();
})
},
 Download_5:function(){
    this.$http({
    method: 'POST',
    url: '/main/DownloadFile_5',
    responseType: 'blob',
    headers: {
        "Content-Type": "application/pdf"
    }
})
.then(response =>{
    const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '개인정보처리방침.pdf');
    document.body.appendChild(link);
    link.click();
})
}
  ,
 Download_6:function(){
    this.$http({
    method: 'POST',
    url: '/main/DownloadFile_6',
    responseType: 'blob',
    headers: {
        "Content-Type": "application/pdf"
    }
})
.then(response =>{
    const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '홈페이지 이용약관.pdf');
    document.body.appendChild(link);
    link.click();
})
} 
 }
 ,
components: {
Login
  }
}
</script>

<style scoped>
@charset "utf-8";
   @font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 600;
    src: local(※),url('../fonts/NanumGothic.eot');
    src: local(※),url('../fonts/NanumGothic.eot?#iefix') format('embedded-opentype'), url('../fonts/NanumGothic.woff2') format('woff2'), url('../fonts/NanumGothic.woff') format('woff'), url('../fonts/NanumGothic.ttf') format('truetype');
}

@font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 700;
    src: local(※),url('../fonts/NanumGothic-Bold.eot');
    src: local(※),url('../fonts/NanumGothic-Bold.eot?#iefix') format('embedded-opentype'), url('../fonts/NanumGothic-Bold.woff2') format('woff2'), url('../fonts/NanumGothic-Bold.woff') format('woff'), url('../fonts/NanumGothic-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'Nanum Gothic';
    font-style: normal;
    font-weight: 900;
    src: local(※),url('../fonts/NanumGothic-Bold.eot');
    src: local(※),url('../fonts/NanumGothic-Bold.eot?#iefix') format('embedded-opentype'), url('../fonts/NanumGothic-Bold.woff2') format('woff2'), url('../fonts/NanumGothic-Bold.woff') format('woff'), url('../fonts/NanumGothic-Bold.ttf') format('truetype');
}




@font-face {
    font-family: 'ntk';
    font-weight: normal;
    font-style: normal;
    src: local(※),url("../fonts/notokr-regular.eot");
    src: local(※),url("../fonts/notokr-regular.eot?#iefix") format('embedded-opentype'), 
    url("../fonts/notokr-regular.woff2") format('woff2'), url("../fonts/notokr-regular.woff") format('woff');
}


 .body {
    position: relative;
    padding: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: 'ntk', 'Nanum Gothic', 'Nanum Gothic-Bold', "돋움", dotum, sans-serif;
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
    margin: 0 auto;
    
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

#gnb {
    position: relative;
    width: 100%;
    padding: 0;
    height: 84px;
}

#gnb>ul {
    padding: 24px 0 0 260px;
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
    vertical-align: top
}

#gnb>ul>li>a {
    position: relative;
    display: inline-block;
    padding: 0 28px 0;
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
    right: 0px;
    top: 28px;
    text-align: right;
    height: 19px;
    width: 600px;
    float: left
}

#header .util {
    display: inline-block;
    font-size: 14px;
}

#header .util a {
    font-size: 15px;
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
    margin: 0 12px 0 9px;
    font-size: 0;
}


#section0 {
    position: relative;
    background-color: #ecf1f4;
    z-index: 2;
    height: 810px;
}

#section1 {
    position: relative;
    background: url('../assets/img/bg01.png') no-repeat 50% 50%;
    z-index: 2;
    height: 810px;
}

#section2 {
    position: relative;
    background-color: #f5fbf7;
    background-size: cover;
    z-index: 2;
    height: 810px;
}

#section3 {
    position: relative;
    background-color: #f4f7f9;
    z-index: 2;
    height: 810px;
}


.cont_box {
    position: relative;
    width: 1280px;
    margin: 0 auto;
    text-align: left;
    padding: 65px 0;
    font-family: 'ntk';
}

.cont_box .tit {
    font-size: 25px;
    color: #000000;
    padding: 60px 0 10px;
    font-weight: bold;
    text-align: left;
}

.cont_box .tit2 {
    font-size: 16px;
    color: #22d37b;
    padding: 0 0 30px;
    font-weight: bold;
    text-align: left;
}

.cont_box .visual-area {
    float: left;
    width: 520px;
}

.cont_box .cnt-area {
    float: left;
    width: 760px
}

.cont_box .cnt-area .box {
    position: relative;
    float: left;
    width: 330px;
    height: 350px;
    padding: 10px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 3px 5px 25px rgba(0, 0, 0, 0.07)
}

.cont_box .cnt-area .box p {
    position: absolute;
    top: 33px;
    right: 30px
}

.cont_box .cnt-area .box ul {
    width: 310px;
    padding: 0 30px
}

.cont_box .cnt-area .box li {
    font-size: 15px;
    color: #000000;
    line-height: 26px;
}

.cont_box .cnt-area .box strong {
    font-size: 14px;
    color: #55bc7e;
}

.cont_box .cnt-area .noti_tit {
    height: 70px;
    font-size: 24px;
    color: #55bc7e;
    padding: 17px 0 0 80px;
    font-weight: bold;
    text-align: left;
    background: url('../assets/img/icon_noti.png') no-repeat -10px 0px
}

.cont_box .cnt-area .qna_tit {
    height: 70px;
    font-size: 24px;
    color: #55bc7e;
    padding: 17px 0 0 80px;
    font-weight: bold;
    text-align: left;
    background: url('../assets/img/icon_qna.png') no-repeat -10px 0px
}

.cont_box .cnt-area .manual {
    clear: both;
    margin-top: 410px;
}


.box-business {
    position: relative;
    width: 1280px;
    margin: 0 auto
}

.box-business h2 {
    font-size: 36px;
    color: #55bc7e;
    padding: 60px 0 10px;
    font-weight: bold;
    text-align: center
}

.box-business h3 {
    font-size: 24px;
    color: #55bc7e;
    padding: 0 0 14px;
    font-weight: bold;
    text-align: left
}

.box-business .pg_left {
    width: 520px;
    float: left;
    line-height: 26px;
    font-size: 15px;
    margin: 70px 160px 50px 0
}

.box-business .pg_right {
    width: 520px;
    float: left;
    margin: 70px 0 50px 0
}

.box-business .pg_left .t1 {
    font-size: 20px;
    color: #000000;
    font-weight: bold;
    text-align: left;
}

.box-business .pg_left .t2 {
    font-size: 20px;
    color: #55bc7e;
    font-weight: bold;
    text-align: left;
    margin: 0 0 20px 0
}

.txt_busi li {
    padding: 0 15px;
    background: url('../assets/img/bullet.png') no-repeat 3px 50%;
    line-height: 26px
}

.txt_busi2 li {
    padding: 0 15px;
    background: url('../assets/img/bullet.png') no-repeat 3px 12px;
    line-height: 26px;
    margin-bottom: 5px;
}


.box-org {
    position: relative;
    width: 1300px;
    margin: 0 auto;
    clear: both;
    text-align: center;
}

.box-org h2 {
    font-size: 36px;
    color: #55bc7e;
    padding: 60px 0 10px;
    font-weight: bold;
    text-align: center
}

.box-org li {
    width: 270px;
    height: 440px;
    margin: 60px 20px 0;
    padding: 50px 60px;
    float: left;
    border-radius: 12px;
    box-shadow: 3px 5px 25px rgba(0, 0, 0, 0.08)
}

.box-org .org01 {
    position: relative;
    background: url('../assets/img/org_logo01.png') no-repeat 50% 50px;
    line-height: 26px;
    background-color: #fff;
}

.box-org .org02 {
    position: relative;
    background: url('../assets/img/org_logo02.png') no-repeat 50% 50px;
    line-height: 22px;
    background-color: #fff;
}

.box-org .org03 {
    position: relative;
    background: url('../assets/img/org_logo03.png') no-repeat 50% 50px;
    line-height: 26px;
    background-color: #fff;
}

.box-org .txt-box {
    text-align: left;
    padding-top: 90px;
    height: 300px
}


.box-confun {
    position: relative;
    width: 1280px;
    margin: 0 auto;
    background: url('../assets/img/contact_logo.png') no-repeat 3px 50%;
    color: #ffffff;
    line-height: 26px;
}

.box-confun h2 {
    font-size: 30px;
    color: #ffffff;
    padding: 60px 0 50px;
    font-weight: bold;
    text-align: left
}

.box-confun h3 {
    font-size: 16px;
    color: #ffffff;
    padding: 60px 0 30px;
    font-weight: bold;
    text-align: left
}

.box-confun .contact {
    width: 622px;
    height: 570px;
    background: url('../assets/img/bg_contact.png') no-repeat;
    position: absolute;
    left: -30px;
    top: 90px;
    z-index: 199;
}

.box-confun .contact .box-contact {
    padding: 30px 90px;
}

.box-confun .funding {
    width: 803px;
    height: 552px;
    background: url('../assets/img/bg_funding.png') no-repeat;
    position: absolute;
    right: 0px;
    top: 156px;
    z-index: 188;
}

.box-confun .funding .box-funding {
    padding: 40px 125px 0 175px;
}


button {
    font-family: 'ntk';
    font-size: 0;
    vertical-align: top;
    border: 0;
}

.text-xs-right .btn-reset,
.text-xs-right .btn-submit {
    margin-left: 4px;
}

.btn-line {
    min-width: 173px;
    background: #fff;
    height: 72px;
    line-height: 20px;
    color: #55bc7e;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    padding: 0 10px;
    border: 1px solid #55bc7e
}

.btn-more {
    min-width: 280px;
    background: #21cd86;
    height: 50px;
    line-height: 30px;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 30px;
    padding: 0 10px;
    border: none;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
}

.btn-more2 {
    min-width: 68px;
    background: #ffffff;
    height: 24px;
    line-height: 16px;
    color: #55bc7e;
    font-size: 13px;
    font-weight: bold;
    border-radius: 30px;
    padding: 0 2px;
    border: 1px solid #55bc7e;
}

.grad {
    background: rgb(114, 215, 59);
    background: -webkit-linear-gradient(45deg, rgb(114, 215, 59), rgb(33, 205, 134));
    background: -moz-linear-gradient(45deg, rgb(114, 215, 59), rgb(33, 205, 134));
    background: -o-linear-gradient(45deg, rgb(114, 215, 59), rgb(33, 205, 134));
    background: linear-gradient(45deg, rgb(114, 215, 59), rgb(33, 205, 134))
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

.footer {
    position: relative;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    height: 100px;
    background: #fff;
}

.footer .footer_in {
    position: relative;
    width: 1280px;
    height: 100px;
    margin: 0 auto;
}

.footer .footer_in .ft-text {
    font-size: 14px;
    text-align: left;
    padding: 30px 0 0 250px;
}

.footer .footer_in .ft_logo {
    position: absolute;
    left: 0;
    top: 30px
}

.footer .footer_in .menu {
    position: absolute;
    right: 0;
    top: 30px
}

.footer .footer_in .menu li {
    display: inline-block;
}

.footer .footer_in .menu li:after {
    content: '';
    margin: 0 9px 0 13px;
    display: inline-block;
    width: 1px;
    height: 14px;
    background: #c2c2c2;
    overflow: hidden;
    vertical-align: middle;
}

.footer .footer_in .menu li:last-child:after {
    display: none;
}

.footer .footer_in .menu li a {
    font-size: 13px;
    color: #333;
}
</style>  