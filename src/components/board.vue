<template>
	<div>
	<login></login>
  	<div class="contents">
	<h3 class="tit">Q&A 게시판</h3>
	<div class="search">
				
					<legend>게시글 검색</legend>
					<select  v-model="search.option" class="sel_ty1">
						<option value="제목">제목</option>
						<option value="내용">내용</option>
					</select>
					<input type="text" v-model="search.contents" ref="search.contents" class="inp_ty2" style="width:398px;" />
					<button  @click="fnSearch" class="btn-sm3">검색</button>
			</div>
			<table class="tbl_board mt30" >
				<caption>게시판 목록</caption>
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
				<button type="button"  @click="fnAdd" ref="auth" v-if="check_auth=='admin'||check_auth=='user'"  class="btn-default">글쓰기</button>
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
//import sidebar from './Sidebar'
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
		,search:{
			option:'',
			contents:''
		}
		,check_auth:''
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
	,mounted() { //페이지 시작하면은 자동 함수 실행
		this.check_auth=localStorage.getItem("auth");
		this.fnGetList();

	}
	, methods:{
		fnGetList() { //데이터 가져오기 함수
      this.body = { 
				page:this.page
			}
			this.$http.get('/board/getList',{params:this.body})
			.then((res)=>{
				if(res.data.success) {
					this.list = res.data.list;
					this.paging = res.data.paging;
					this.no = this.paging.totalCount - ((this.paging.page-1) * this.paging.ipp);
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요.");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
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
		this.$http.post('/users/check_auth_all',body)
		.then((res)=>{
				if(res.data.success==true) {
					this.$router.push('/boardwrite')
				}
				 else {
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
				this.fnGetList();
			}
		}
		,fnView(seq) {
			this.body.seq = seq;
			this.$router.push({path:'./boardread',query:this.body}); //추가한 상세페이지 라우터
		}
		,fnSearch(){
			if(this.search.contents==''){
				alert("검색어를 입력해주세요.")
				return;
			}
            if(this.search.option){
			this.$router.push({path:'./boardsearch'+this.search.contents,query:this.search});
			}
            else{
                alert('검색옵션을 다시설정해주세요.');
            }
        }
}
,components: {
    //HelloWorld,
	login
  }
  
}
</script>

<style scoped>
@import '../assets/css/board.css'
/*
.listWrap{margin-left: 200px;margin-top:120px;top:50px;position: relative;}
	.searchWrap{border:1px solid #888; border-radius:5px; text-align:center; padding:20px 0; margin-bottom:40px;}
	.searchWrap input{width:100%; height:36px; border-radius:3px; padding:0 10px; border:1px solid #888;}
	.searchWrap .btnSearch{display:inline-block; margin-left:10px;}
  .tblist{text-decoration:none; margin-left:auto;margin-right: auto;}
	.tbList th{border-bottom:2px solid #DCDFE6; padding:1em; }
	.tbList th, .tbList td{ border-bottom:2px solid #DCDFE6;  padding:1em; }
	.tbList td.txt_left{text-align:left; text-decoration:none; color:#888;padding:1em;}
	.tbList td.txt_left a{text-align:left; text-decoration:none; color:black;padding:1em; }
	.btnRightWrap{text-align:right; margin:10px 0px 0px 650px;}
	.pagination{ margin:40px 0 0 0;  text-align:center;margin-right:150px; font-size:1.2em;}
	.first, .prev, .next, .last{border:0px solid #666; margin:0 5px;}
	.pagination span{display:inline-block; padding:0 5px; color:#333}
	.pagination a{text-decoration:none; display:inline-block; padding:0 5px; color:#666;}
  .div_for_table{ width:1500px;height: 700px;}
  .input{width:300px};
  .option{width:50px};*/
</style>