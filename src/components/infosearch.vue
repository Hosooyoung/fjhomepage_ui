<template>
		<div>
	<login></login>
  	<div class="contents">
	<h3 class="tit">공지사항</h3>
	<div class="search">
					<legend>게시글 검색</legend>
					<select  v-model="search.option" class="sel_ty2 mr8">
						<option disabled value="">옵션선택</option>
						<option value="제목">제목</option>
						<option value="내용">내용</option>
					</select>
					<input type="text" v-model="search.contents" ref="search.contents" class="inp_ty2 mr8" style="width:398px;" />
					<button  @click="fnSearch" class="btn-sm3">검색</button>
			</div>
			<table class="tbl_board mt30" summary="번호, 제목, 등록일, 작성자의 공지사항 목록 입니다.">
				<caption>공지사항 목록</caption>
				<colgroup>
					<col width="10%" />
					<col width="*" />
					<col width="12%" />
					<col width="11%" />
					<col width="8%" />
				</colgroup>
				<thead>
					<tr>
						<th scope="col">번호</th>
						<th scope="col">제목</th>
						<th scope="col">등록일</th>	
						<th scope="col">작성자</th>
						<th scope="col">조회수</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(row, idx) in list" :key="idx" >
						<td >{{row.seq}}</td>
						<td class="txt_left"><a href="javascript:;" @click="fnView(`${row.seq}`)">{{row.title}}</a></td>
						<td>{{row.write_date.substr(0,10)}}</td>
						<td>{{row.user_id}}</td>
						<td>{{row.hit}}</td>
				</tr>
				</tbody>
			</table>
			<div class="btn_left mt20">
				<button type="button"  @click="fnAdd" ref="auth"  v-if="check_auth=='admin'"  class="btn-default">글쓰기</button>
			</div>
			<div class="paging"  v-if="paging.totalCount > 0"> 
			  <a href="javascript:;" class="first" @click="fnPage(1)">첫 페이지</a>
			  <a href="javascript:;" class="prev2"  v-if="paging.start_page > 10"  @click="fnPage(`${paging.start_page-1}`)">10개 이전 페이지</a>
			  <template v-for=" (n,index) in paginavigation()">
				<template v-if="paging.page==n">
					<strong :key="index">{{n}}</strong> 
				</template>
				<template v-else>
					<a href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{n}}</a>
				</template>
			</template>
			  <a href="javascript:;" class="next2" v-if="paging.total_page > paging.end_page" @click="fnPage(`${paging.end_page+1}`)">10개 다음 페이지</a>
			  <a href="javascript:;" class="last" @click="fnPage(`${paging.total_page}`)">마지막 페이지</a> 
			</div>

	</div>
	</div>
    
</template> 

<script>
import login from './login'
export default {
	data() { //변수생성
		return{
        auth:localStorage.getItem("auth")
		,body:'' //리스트 페이지 데이터전송
    	,title:'' //리스트 데이터
    	,list:''
    	,write_date:''
		,rewrite_date:''
		,check_auth:''
        ,search:{
		    contents:''
            ,option:''
            }
        ,recieved_contents:this.$route.query.contents
        ,recieved_option:this.$route.query.option
    	,user:''
    	,no:'' //게시판 숫자처리
			,paging:'' //페이징 데이터
			,start_page:'' //시작페이지
			,page:this.$route.query.page ? this.$route.query.page:1
			,keyword:this.$route.query.keyword
			,paginavigation:function() { //페이징 처리 
				var pageNumber = [];
				var start_page = this.paging.start_page;
				var end_page = this.paging.end_page;
				for (var i = start_page; i <= end_page; i++) pageNumber.push(i);
				return pageNumber;
			}
		}
	}
    ,mounted() { 
        this.fnSearchlist(this.recieved_contents,this.recieved_option);
      
		this.check_auth=localStorage.getItem("auth");
    }
    
	, methods:{
        fnSearch(){
			if(this.search.contents==''){
				alert("검색어를 입력해주세요.")
				return;
			}
            if(this.search.option){
            this.fnSearchlist(this.search.contents,this.search.option);
            }
            else{
                alert('검색옵션을 다시설정해주세요.');
            }
        }
        ,fnAdd() {
			var id=localStorage.getItem("id");
			if(id==null){
				alert("로그인 후 이용해주세요.");
				return;
			}
			var body={
				id:id
			}
			this.$http.get('/users/check_auth_admin', {params:body})
			.then((res)=>{
				if(res.data.success){
	  	this.$router.push('/infowrite')
				}
				else{
					alert("권한이 없습니다.");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
			}
		, fnPage(n) {//페이징 이
			if(this.page != n) {
				this.page = n;
				this.fnSearchlist(this.recieved_contents,this.recieved_option);
			}
		}
        ,fnback() {//페이징 이
			 this.$router.push({path:'./info'});
		}
		,
        fnView(seq) {
			this.body.seq = seq;
			this.$router.push({path:'./inforead',query:this.body}); //추가한 상세페이지 라우터
		}
		,fnSearchlist(content,option){
			this.body = { 
				page:this.page,
				option:option
				}
			this.$http.get('/info/getSearchList'+content,{params:this.body})
			.then((res)=>{
				if(res.data.success) {
					this.list = res.data.list;
					this.paging = res.data.paging;
					this.no = this.paging.totalCount - ((this.paging.page-1) * this.paging.ipp);
				} else{
					alert("검색하시는 내용의 글이 없습니다.");
					this.$router.go(-1);
					}
			})
			.catch((err)=>{
				console.log(err);
			})
		
		}
}
,components: {
	login
  }
  
}
</script>

<style scoped>
@import '../assets/css/board.css'

</style>