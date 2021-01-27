<template>
	<div>
  <login></login>
	<div class="contents">
	  <h3 class="tit">회원신청목록</h3>
			<legend>회원신청목록</legend>
					<div class="search mt40">
					<select title="검색항목 선택" class="sel_ty2 mr8" v-model="join_search.option">
						<option disabled value="">옵션선택</option>
						<option>아이디</option>
						<option>이름</option>
						<option>소속</option>
						<option>연락처</option>
						<option>이메일</option>
						<option>장비</option>
					</select>
					<input type="text" class="inp_ty2 mr8" title="검색어" style="width:398px;" v-model="join_search.contents" ref="join_search.contents"/>
					<button  class="btn-sm3 mr8"  @click="fnjoin_Search">조회</button>
					<button  class="btn-sm3" @click="join_redirection" v-if="join_show_all==true">신청목록 전체보기</button>
				
				</div>
					<table class="tbl_01">
						<colgroup>
							<col style="width:140px" />
							<col style="width:100px" />
							<col style="width:auto" />
							<col style="width:140px" />
							<col style="width:250px" />
							<col style="width:120px" />
							<col style="width:160px" />
						</colgroup>
						<thead>
							<tr>
								<th>아이디</th>
								<th>이름</th>
								<th>소속</th>
								<th>전화번호</th>
								<th>이메일주소</th>
								<th>장비 소유</th>
								<th>승인/거절</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(row, idx) in join_list" :key="idx">
								<td style="text-align:center;">{{row.id}}</td>
								<td style="text-align:center;">{{row.user_name}}</td>
								<td>{{row.user_group}}</td>
								<td style="text-align:center;">{{row.phone}}</td>
								<td>{{row.email}}</td>
								<td style="text-align:center;">{{row.user_device}}</td>
                    			<td style="text-align:center;">
									<button  @click="Getjoin(row.id,1)" v-if="row.user_auth==4" class="btn-sm2-green mr8">Y</button>
									<button @click="Getjoin(row.id,2)" v-if="row.user_auth==4" class="btn-sm2">N</button>
                     			</td>
							</tr>
						</tbody>
					</table>				
					<div class="paging" v-if="join_paging.totalCount > 0">
						<a href="javascript:;" @click="fnJoinPage(1)" class="first">&lt;&lt;</a>
						<a href="javascript:;" v-if="join_paging.start_page > 10" @click="fnJoinPage(`${join_paging.start_page-1}`)"  class="prev">&lt;</a>
						<template v-for=" (n,index) in Joinpaginavigation()">
						<template v-if="join_paging.page==n">
						<strong :key="index">{{n}}</strong> 
						</template>
						<template v-else>
						<a href="javascript:;" @click="fnJoinPage(`${n}`)" :key="index">{{n}}</a>
						</template>
						</template>
						<a href="javascript:;" v-if="join_paging.total_page > join_paging.end_page" @click="fnJoinPage(`${join_paging.end_page+1}`)"  class="next">&gt;</a>
						<a href="javascript:;" @click="fnJoinPage(`${join_paging.total_page}`)" class="last">&gt;&gt;</a>
    				</div>
				<h3 class="tit">회원목록</h3>
					<legend>회원목록</legend>
					<div class="search mt40">
					<select title="검색항목 선택" class="sel_ty2 mr8" v-model="search.option">
						<option disabled value="">옵션선택</option>
						<option>아이디</option>
						<option>이름</option>
						<option>소속</option>
						<option>연락처</option>
						<option>이메일</option>
						<option>장비</option>
					</select>
					<input type="text" class="inp_ty2 mr8" title="검색어" style="width:398px;" v-model="search.contents" ref="search.contents"/>
					<button  class="btn-sm3 mr8"  @click="fnSearch">조회</button>
					<button  class="btn-sm3"  @click="redirection" v-if="show_all==true">전체목록 보기</button>
					</div>
					<table class="tbl_01">
						<colgroup>
							<col style="width:140px" />
							<col style="width:100px" />
							<col style="width:auto" />
							<col style="width:140px" />
							<col style="width:240px" />
							<col style="width:110px" />
							<col style="width:100px" />
							<col style="width:100px" />
						</colgroup>
						<thead>
							<tr>
								<th>아이디</th>
								<th>이름</th>
								<th>소속</th>
								<th>전화번호</th>
								<th>이메일주소</th>
								<th>장비 소유</th>
								<th>계정 상태</th>
								<th>관리</th>
							</tr>
						</thead>
						<tbody>
							
							<tr v-for="(row, idx) in list" :key="idx">
								<td style="text-align:center">{{row.id}}</td>
								<td style="text-align:center;">{{row.user_name}}</td>
								<td>{{row.user_group}}</td>
								<td style="text-align:center;">{{row.phone}}</td>
								<td>{{row.email}}</td>
								<td style="text-align:center;">{{row.user_device}}</td>
                    			<td style="text-align:center;">
									<h4 v-if="row.user_auth==0">활동회원</h4>
                    				<h4 v-if="row.user_auth==2">휴면</h4>
                    				<h4 v-if="row.user_auth==1">관리자</h4>
                   					<h4 v-if="row.user_auth==4">가입신청</h4>
                     			</td>
								 <td>
									 <button  @click="reset_pw(row.id)" class="btn-line" style="min-width:80px; font-size:13px;">비밀번호<br>초기화</button>
								 </td>
							</tr>
						</tbody>
					</table>				
					<div  class="paging" v-if="paging.totalCount > 0">
						<a href="javascript:;" @click="fnPage(1)" class="first">&lt;&lt;</a>
						<a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"  class="prev">&lt;</a>
						<template v-for=" (n,index) in paginavigation()">
						<template v-if="paging.page==n">
						<strong :key="index">{{n}}</strong> 
						</template>
						<template v-else>
						<a href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{n}}</a>
						</template>
						</template>
						<a href="javascript:;" v-if="paging.total_page > paging.end_page" @click="fnPage(`${paging.end_page+1}`)"  class="next">&gt;</a>
						<a href="javascript:;" @click="fnPage(`${paging.total_page}`)" class="last">&gt;&gt;</a>
    				</div>
	</div>
	</div>

</template> 

<script>
import login from './login.vue'
export default {
	data() { //변수생성
		return{
        auth:''
		,body:'' //리스트 페이지 데이터전송
		,join_body:''  
		  ,id:'' //리스트 데이터
     	 ,name:''
      	,phone:''
		,email:''
		,show_all:false  
		,join_show_all:false 
	  	,group:''
	  	,device:''
		,last_login:''
		,search:{
			option:'',
			contents:''
		}
		,join_search:{
			option:'',
			contents:''
		}
		,list:''
		,join_list:''
		,no:'' //게시판 숫자처리
		,paging:'' //페이징 데이터
		,start_page:'' //시작페이지
		,page:this.$route.query.page ? this.$route.query.page:1
		,keyword:this.$route.query.keyword
		,join_no:'' //게시판 숫자처리
		,join_paging:'' //페이징 데이터
		,join_start_page:'' //시작페이지
		,join_page:this.$route.query.join_page ? this.$route.query.join_page:1
			//,keyword:this.$route.query.keyword
		,paginavigation:function() { 
			var pageNumber = [];
			var start_page = this.paging.start_page;
			var end_page = this.paging.end_page;
			for (var i = start_page; i <= end_page; i++) pageNumber.push(i);
			return pageNumber;
		},Joinpaginavigation:function() {
			var pageNumber = [];
			var start_page = this.join_paging.start_page;
			var end_page = this.join_paging.end_page;
			for (var i = start_page; i <= end_page; i++) pageNumber.push(i);
			return pageNumber;
		}
		}
	}
	,mounted() { //페이지 시작하면은 자동 함수 실행
		this.fnGetList();
		this.fnGetJoinList();
	}
	, methods:{
		fnGetList() { //데이터 가져오기 함수
   
      this.body = { 
				page:this.page
			}
			this.$http.get('/users/getList',{params:this.body})
			.then((res)=>{
				if(res.data.success) {
					this.list = res.data.list;
					for(var i in this.list){
						this.list[i].phone=this.phoneFomatter(this.list[i].phone,1)
						if(this.list[i].last_login==null){
							this.list[i].last_login==""
						}
						else{
						this.list[i].last_login=this.list[i].last_login.substr(0,10)
						}
					}
					this.paging = res.data.paging;
					this.no = this.paging.totalCount - ((this.paging.page-1) * this.paging.ipp);
				
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요.");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
		},
		fnGetJoinList() { 
     		 this.join_body = { 
				page:this.join_page
			}
			this.$http.get('/users/getJoinList',{params:this.join_body})
			.then((res)=>{
				if(res.data.success) {
					for(var i in this.join_list){
						this.join_list[i].phone =this.phoneFomatter(this.join_list[i].phone,1)
					}
					this.join_list = res.data.join_list;
					this.join_paging = res.data.join_paging;
					this.join_no = this.join_paging.totalCount - ((this.join_paging.page-1) * this.join_paging.ipp);
					
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요.");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		, fnPage(n) {//페이징 이
			if(this.page != n) {
				this.page = n;
				this.fnGetList();
			}
		},
		fnJoinPage(n) {//페이징 이
			if(this.join_page != n) {
				this.join_page = n;
				this.fnGetJoinList();
			}
		},
		Getjoin(input,ok){
			var form={
				id:input,
				ok:''
			}
			if(ok==1){
				form.ok="join"
			}else if(ok==2){
				form.ok="reject"
			}
			else{
				alert("다시시도 해주세요.")
				return;
			}
			this.$http.post('users/Getjoin',form)
			.then((res)=>{
				if(res.data.success==true) {
					alert("가입승인완료")
					this.$router.go();
				}else {
					alert("가입거절완료");
					this.$router.go();					
				}
			})
			.catch((err)=>{
				console.log(err);
			})
		},
		fnSearch(){
			if(this.search.contents==''){
				alert("검색어를 입력해주세요.")
				return;
			}
			if(this.search.option==''){
				alert("옵션을 선택해주세요.")
				return;
			}
            if(this.search.option){
				this.body = { 
				page:this.page,
				option:this.search.option
				}
				this.$http.get('/users/getSearchList'+this.search.contents,{params:this.body})
			.then((res)=>{
				if(res.data.success) {
					this.list = res.data.list;
					for(var i in this.list){
						this.list[i].phone=this.phoneFomatter(this.list[i].phone,1)
						if(this.list[i].last_login==null){
							this.list[i].last_login==""
						}
						else{
						this.list[i].last_login=this.list[i].last_login.substr(0,10)
						}
					}
					this.paging = res.data.paging;
					this.no = this.paging.totalCount - ((this.paging.page-1) * this.paging.ipp);
					this.show_all=true;
			}
            else{
                alert('검색내용이 없습니다.');
			}
			})
        }else{
			alert('검색내용을 확인하고 다시 시도해주세요.');
		}
		},
		redirection(){
			this.join_show_all=false;
			this.$router.go();
		},
		fnjoin_Search(){
			if(this.join_search.contents==''){
				alert("검색어를 입력해주세요.")
				return;
			}
			if(this.join_search.option==''){
				alert("옵션을 선택해주세요.")
				return;
			}
            if(this.join_search.option){
				this.join_body = { 
				page:this.join_page,
				option:this.join_search.option
				}
				this.$http.get('/users/getSearchjoinList'+this.join_search.contents,{params:this.join_body})
			.then((res)=>{
				if(res.data.success) {
					for(var i in this.join_list){
						this.join_list[i].phone=this.phoneFomatter(this.join_list[i].phone,1)
					}
					this.join_list = res.data.join_list;
					this.join_paging = res.data.join_paging;
					this.join_no = this.join_paging.totalCount - ((this.join_paging.page-1) * this.join_paging.ipp);
					this.join_show_all=true;
			}
            else{
                alert('검색내용이 없습니다.');
			}
			})
        }else{
			alert('검색내용을 확인하고 다시 시도해주세요.');
		}
		},
		join_redirection(){
			this.show_all=false;
			this.$router.go();
		}
		,
		goback(){
			 this.$router.push('/')
		},
		reset_pw(id){
			var form={
				id:id
			}
			this.$http.post('users/reset_pw',form)
			.then((res)=>{
				if(res.data.success==true) {
					alert(res.data.message)
				}else {
					alert("초기화 실패");
										
				}
			})
			.catch((err)=>{
				console.log(err);
			})	
		},
		 phoneFomatter:function(num,type){
 		   var formatNum = '';
   		 	if(num.length==11){
       		if(type==0){
            	formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-****-$3');
        	}else{
            	formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        	}
    		}else if(num.length==8){
        		formatNum = num.replace(/(\d{4})(\d{4})/, '$1-$2');
    		}else{
        	if(num.indexOf('02')==0){
            if(type==0){
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-****-$3');
            }else{
                formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
            }
        	}else{
            	if(type==0){
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-***-$3');
            }else{
                formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
        	}
	}
	console.log("입력 num")
	console.log(num)
	console.log("출력 Fnum")
	console.log(formatNum)
    return formatNum;
	  }

             
}
,components: {
    login
  }
  
}
</script>

<style scoped>
@import '../assets/css/member.css'
/*  .main_loc{top:170px; margin-top:120px!important;}
.titles{font-size:2.5em;position: relative;margin-top:120px;top:50px;}
.listWrap{width:1300px;margin-left: 200px;margin-top:50px;top:50px; text-align:left;border-radius:15px; border:2px solid #DCDFE6; position: relative;}
.listWrap2{width:1400px;margin-left: 200px;margin-top:50px;top:50px; text-align:left;border-radius:15px; border:2px solid #DCDFE6; position: relative;}
	.tblist{text-decoration:none; margin-left:auto;margin-right: auto;text-align:center;}
	.tbList th{border-bottom:2px solid #DCDFE6;border-right:1px solid #DCDFE6;  padding:0.3em; text-align:center;font-size:1em;}
	.tbList td{ border-bottom:2px solid #DCDFE6; padding:0.3em;border-right:2px solid #DCDFE6; text-align: left; }
	.tbList td.txt_left{text-align:left; text-decoration:none; color:#DCDFE6;padding:0.3em;}
	.tbList td.txt_left a{text-align:left; text-decoration:none; color:black;padding:0.3em; }
	.tbList td.txt_cont{height:400px; vertical-align:top;}
	
	.pagination{ margin:50px 0 0 0; text-align:center;}
	.pagination span{display:inline-block; padding:0 5px; color:#333;}
	.pagination a{text-decoration:none; display:inline-block; padding:0 5px; color:#666;}
	
	.join_pagination{ margin:50px 0 0 0; text-align:center;}
	.first, .prev, .next, .last{border:1px solid #666; margin:0 5px;}
	.join_pagination span{display:inline-block; padding:0 5px; color:#333;}
	.join_pagination a{text-decoration:none; display:inline-block; padding:0 5px; color:#666;}
	*/
</style>