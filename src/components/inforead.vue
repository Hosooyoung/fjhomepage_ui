<template>
	<div>
	<login></login>
	<div class="contents">
	<h3 class="tit">공지사항</h3>
			<table class="tbl_board_view" summary="공지사항 글내용 보기 및 관리자 답변 게시판입니다">
				<caption>공지사항 상세보기</caption>
				<colgroup>
					<col width="200px">
					<col width="400px">
					<col width="200px">
					<col width="400px">
					<col width="400px">
				</colgroup>
				<tbody>
					<tr>
						<th scope="col" class="first">작성자</th>
						<td class="first">{{user_id}}</td>
						<th scope="col" class="first">작성일</th>
						<td class="first">{{user_write_date.substr(0,10)}}</td>
					</tr>
					<tr>
						<th scope="col">제목</th>
						<td colspan="3">[{{user_option}}] {{title}}</td>
					</tr>
					<tr>
						<th scope="col">첨부파일</th>
						<td colspan="3"><a href='' id="file_down" download=''>{{file_name}}</a></td>
					</tr>
					<tr>
						<th scope="col">내용</th>
						<td colspan="3" v-html="contents">공지사항에 대한 내용이 들어갑니다.</td>
					</tr>
					</tbody>
					</table>
					<div class="btn_center">
				<button type="button" class="btn-line2_big mr8" @click="fnDel"> 공지사항 삭제</button>
				<button type="button" class="btn-line_big mr8" @click="fnMod">공지사항 수정</button>
				<button type="button" class="btn-default"  @click="fnList" >목록</button>
			</div> 
					<table class="tbl_board_view" summary="공지사항 글내용 보기 및 관리자 답변 게시판입니다">
							<colgroup>
					<col width="200px">
					<col width="400px">
					<col width="200px">
					<col width="400px">
					<col width="400px">
					</colgroup>
					<tbody>
					<tr>
						<th scope="col">답변쓰기</th>
						<td colspan="3"><textarea v-model="reply_contents" ref="reply_contents" title="내용" rows="3" cols="3" class="textarea_ty1"></textarea>
						<p>	<button type="button"  @click="addReply" class="btn-sm mt10">등록</button></p></td>
					</tr>
					<tr  v-for="(row, idx) in list" :key="idx">
						<th scope="col">{{row.user_id}}</th>
						<td colspan="3">
							<p><span class="re_tag mr12">답변 {{row.orders}}</span><span class="re_date">{{row.write_date.substr(0,10)}}</span></p>	
							<input type="text" v-if="mod_reply==1&&row.orders==mod_auth" v-model="row.contents"/>
							<p v-else class="mt10">{{row.contents}}</p>
							<p class="btn-right" v-if="row.user_id==check_id||check_auth=='admin'">
								<button type="button"  v-if="mod_reply==0" @click="modReply(row.orders)" class="btn-sm4 mt10 mr12">수정</button>
								<button type="button"  v-else @click="SendmodReply(row.orders,row.contents,row.user_id)" class="btn-sm4 mt10 mr12">완료</button>
								<button type="button" v-if="mod_reply==0" @click="delReply(row.user_id,row.orders)" class="btn-sm5 mt10">삭제</button>
								<button type="button" v-else @click="CancelmodReply()" class="btn-sm5 mt10">취소</button>
								</p>
						</td>
					</tr>
					</tbody>
			</table>
			
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
import login from './login.vue';
export default {
	data() {
		return {
			body:this.$route.query
			,file_title:''
			,mod_reply:''
			,mod_auth:''
			,reply_seq:''
			,page_num:''
			,reply_contents:''
			,reply_form:''
			,reply_info:''
			,data:''
			,title:''
			,user_id:''
			,check_auth:''
			,user_option:''
			,user_write_date:''
			,file_name:''
			,contents:''
			,check_id:''
			,seq:this.$route.query.seq
			,list_page:this.$route.query.page
			,no:''
			,list:''
			,paging:'' //페이징 데이터
			,start_page:'' //시작페이지
			,page:1
			,keyword:this.$route.query.keyword
			,paginavigation:function() { //페이징 처리 for문 커스텀
				var pageNumber = [];
				var start_page = this.paging.start_page;
				var end_page = this.paging.end_page;
				for (var i = start_page; i <= end_page; i++) pageNumber.push(i);
				return pageNumber;
			}
		}
	}
	,mounted() {
		console.log(this.list_page)
		this.check_id=localStorage.getItem("id");
		this.check_auth=localStorage.getItem("auth");
		this.mod_reply=0;
		this.fnGetView();
		this.fnGetReply();
		this.get_Download_info();
	}
	,methods:{
		fnGetView() {
			this.$http.get('/info/inforead/'+this.body.seq,{params:this.body})
			.then((res)=>{	
				this.data = res.data.data[0];
				this.title = this.data.title;
				this.user_id=this.data.user_id;
				this.user_write_date=this.data.write_date;
				this.user_option=this.data.category_option;
				this.contents = this.data.contents.replace(/(\n)/g,'<br/>');
				this.file=this.data.file_path
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		,fnList(){
			this.$router.go(-1)
		},fnMod() {
			var id=localStorage.getItem("id");
			if(id==null){
				alert("로그인 후 이용해주세요.");
				return;
			}
			console.log(id);
			var body={
				id:id
			}
			this.$http.get('/users/check_auth_admin', {params:body})
			.then((res)=>{
				if(res.data.success){	
					this.$router.push({path:'./infowrite',query:this.body}); //등록화면으로 이동하면서 파라미터를 넘겨준다.
				}
				else{
				alert("권한이없습니다.");
			}
			})
			.catch((err)=>{
				console.log(err);
			})
		},
		fnDel(){

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
		this.$http.post('/info/DelNoti',{params:this.body.seq})
			.then((res)=>{	
				if(res.data.success) {
					alert('삭제되었습니다.');
					this.$router.push('/info');
				}
			})
			.catch((err)=>{
				console.log(err);
			})
			}
			else{
				alert("권한이없습니다.");
			}
			})
			.catch((err)=>{
				console.log(err);
			})
		}
		,
		addReply() {
			var id=localStorage.getItem("id");
			if(id==null){
				alert("로그인 후 이용해주세요.");
				return;
			}
			var body={
					id:id
					}
			this.$http.post('/users/check_auth_all', body)
			.then((res)=>{
				if(res.data.success){	
			if(!this.reply_contents) { //제목이 없다면 값을 입력하라고 알려준다.
				alert("내용을 입력해 주세요");
				return;
			}
			this.reply_form = {
				contents:this.reply_contents
				,id:localStorage.getItem("id")
				,seq:this.seq
			} 
			this.$http.post('/info/addReply',this.reply_form)
			.then((res)=>{
				if(res.data.success) {
					alert('등록되었습니다.');
					this.reply_contents='';
					this.fnGetReply();
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
				}
			else{
				alert("권한이 없습니다.");
			}
			})
			.catch((err)=>{
				console.log(err);
			})
		},
		fnGetReply() { 
      this.page_num = { 
				page:this.page,
				seq:this.seq
			}
			this.$http.get('/info/getReply',{params:this.page_num})
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
		}, 
		fnPage(n) {//페이징 이
			if(this.page != n) {
				this.page = n;
				this.fnGetReply();
			}
		}
		, 
		
		delReply(id,input) {//페이징 이
		var form={
			seq:this.seq,
			id:localStorage.getItem("id"),
			orders:input,
			auth:localStorage.getItem("auth")
		}

		if(form.id==null){
				alert("로그인 후 이용해주세요.");
				return;
			}
		this.$http.post('/users/check_auth_info_reply',form)
		.then((res)=>{
			console.log(res.data.success);
			if(res.data.success==true) {
			this.reply_info={
				seq:this.seq,
				orders:input
			}
			this.$http.post('/info/DelReply',this.reply_info)
				.then((res)=>{	
					if(res.data.success) {
						alert('삭제되었습니다.');
						this.fnGetReply();
						}
					})
				} 
			else{
				alert("권한이없습니다.");
			}
			})		
		}
		,
		modReply(ord){
		var form={
			seq:this.seq,
			id:localStorage.getItem("id"),
			orders:ord,
			auth:localStorage.getItem("auth")
		}
		if(form.id==null){
				alert("로그인 후 이용해주세요.");
				return;
			}
		this.$http.post('users/check_auth_info_reply',form)
		.then((res)=>{
				if(res.data.success==true) {
					this.mod_auth=ord;
					this.mod_reply=1;
				}
				else{
					alert("권한이없습니다.");
					}
				
				})
				.catch((err)=>{
				console.log(err);
				})
			},
		CancelmodReply(){
			this.mod_reply=0;
			this.fnGetReply();
		},
		SendmodReply(odr,con,id){
			if(id){
			console.log(id);
			}
			if(id==null){
				alert("로그인 후 이용해주세요.");
				return;
			}
			this.reply_info={
			seq:this.seq,
			contents:con,
			orders:odr
		}

		this.$http.post('/info/modReply',this.reply_info)
			.then((res)=>{	
				if(res.data.success) {
					alert('수정되었습니다.');
					this.mod_reply=0;
					this.fnGetReply();
					}
			})
		},
		get_Download_info:function(){
			var link_name=''
			this.$http.post('/info/searchFile',{seq:this.seq})
			.then((res)=>{	
				if(res.data.success){
				link_name=res.data.name

		//	var file_name="C:/workspace/hodu/vue_project2/svr/uploads/"+name;
			link_name="../uploads/"+link_name;
			this.file_name=res.data.title
			this.file_title=res.data.title
			}
			else {
				this.file_name=''
				this.file_title=''
			}
			var link = document.getElementById("file_down");
			link.href = link_name;
			link.download=this.file_title;
			//document.getElementById("file_down").href=file_name;
			})
		}

	},
	components:{
		login
	}
}
</script>

<style scoped>
@import '../assets/css/board.css'
	/*.listWrap{margin-left: 200px;margin-top:120px;top:50px; text-align:left; position: relative;}
	.listWrap_2{margin-left: 330px; text-align:left; }
	.tblist{text-decoration:none; margin-left:auto;margin-right: auto;text-align:left;}
	.tbList th{border-bottom:2px solid #DCDFE6;  padding:0.3em; text-align:center;font-size:1em;}
	.tbList td{ border-bottom:2px solid #DCDFE6; padding:0.5em; text-align: left; }
	.tbList td.txt_left{text-align:left; text-decoration:none; color:#DCDFE6;padding:1em;}
	.tbList td.txt_left a{text-align:left; text-decoration:none; color:black;padding:1em; }
	.tbList td.txt_cont{height:400px; vertical-align:top;}
	.tblist_2{text-decoration:none; margin-left:auto;margin-right: auto;text-align:left;}
	.tbList_2 th{border-bottom:2px solid #DCDFE6;  padding:0.3em; text-align:center;font-size:1em;}
	.tbList_2 td{ border-bottom:2px solid #DCDFE6; padding:0.5em; text-align: left; }
	.tbList_2 td.txt_left{text-align:left; text-decoration:none; color:#DCDFE6;padding:1em;}
	.tbList_2 td.txt_left a{text-align:left; text-decoration:none; color:black;padding:1em; }
	.tbList_2 td.txt_cont{height:400px; vertical-align:top;}
	.btnRightWrap_group{margin-left:950px;}	
	.btnRightWrap{color:black;}
	.div_for_table{margin-left:200px; width:1100px; margin-top:100px; height: 680px;}*/
</style>