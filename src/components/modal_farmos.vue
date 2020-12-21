
<template>
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              장비제어접속
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body" >
             fjbox계정을 입력하세요.
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            <div v-if="mod_acc==0">
            <form @submit.prevent="loginForm">
              <input v-model="id" type="text" placeholder="Username" required />
              <input v-model="pw" type="password" placeholder="Password" required />
              <br>
              <button type="submit" style="background-color:#409EFF;color:white;">
              로그인
             </button>
          </form>
            <button style="background-color:#F56C6C;color:white;" @click="$emit('close')">
                취소
              </button>
              <br>
            <button style="background-color:white;color:black;" @click="mod_acc=1">
            비밀번호 변경
            </button>  
          </div>
            <div v-if="mod_acc==1">
            <p>비밀번호 확인</p>
            <input v-model="id_check" type="text" placeholder="Username" required />
            <input v-model="pw_check" type="password" placeholder="Password" required />
            <br>
             <button style="background-color:#F56C6C;color:white;" @click="check_pw">
                확인
            </button>
            <button style="background-color:#F56C6C;color:white;" @click="$emit('close')">
                취소
            </button>
            </div>
            <div v-if="mod_acc==2">
            <p>변경 비밀번호 </p>
            <input v-model="pw_mod" type="password" placeholder="Password" required />
            <p>변경 비밀번호 확인</p>
            <input v-model="pw_mod_check" type="password" placeholder="Password" required />
            <br>
             <button style="background-color:#F56C6C;color:white;" @click="Mod_password">
                변경
            </button>
            <button style="background-color:#F56C6C;color:white;" @click="$emit('close')">
                취소
            </button>
            </div>
          </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import Cookies from "js-cookie"
import jwt_decode from "jwt-decode"
export default {
    data: function () {
  return {
      id_check:'',
      pw_check:'',
      pw_mod:'',
      pw_mod_check:'',
      mod_acc:0,
      body:{
          id:'',
          pw:'',
          isCookie:false
      }
  }
},
mounted() {
  this.mod_acc=0;
  console.log("모엣"+this.mod_acc)
  this.cookieCheck()
},
methods:{/*
    go_farmos: function(){
        console.log(this.body.id);
        console.log(this.body.pw);
       this.$http({
        method: 'POST',
       // url: 'http://login.jinong.co.kr/login/login',
        url: 'http://login.jinong.co.kr/login/login',
        data: {
            id:this.body.id,
            pw:this.body.pw
         }
         })
    .then(response =>{
        console.log(typeof response)
    })
    .catch(err => {
        console.log('err2');
      alert(err);
    })
},*/
    cookieCheck(){
        this.isCookie = Cookies.get("token") !== undefined ? true : false
       
    },
    async check_pw(){
      if(this.id_check==''){
          alert("아이디를 입력해 주세요.")
          return;
          }
        if(this.pw_check==''){
          alert("비밀번호를 입력해 주세요.")
          return;
          }
          try {
              const result = await this.$http.post("/fjbox/check_pw", {
                pw: this.pw_check
              })
              if(result.data.success){
                this.mod_acc==2;
                this.pw_check='';
              }
              else{
                alert("비밀번호가 일치하지 않습니다.");
              }
               } catch (error) {
              console.log(error)
              if (error) {
                console.log(error)
                alert(error)
              } else {
                console.log(error)
                alert("오류가 발생했습니다. 관리자에게 문의바랍니다.")
              }
            }  
        }
       ,
  async Mod_password(){
      if(this.pw_mod==''){
          alert("변경할 비밀번호를 입력해 주세요.")
          return;
          }
      if(this.pw_mod_check==''){
          alert("비밀번호확인란를 입력해 주세요.")
          return;
          }
      if(this.pw_mod_check!=this.pw_mod){
          alert("변경할 비밀번호와 확인란이 일치하지않습니다.\n다시입력해주세요.")
          this.pw_mod='';
          this.pw_mod_check='';
          return;
          }
          try {
              const result = await this.$http.post("/fjbox/mod_pw", {
                id:this.id_check,
                pw: this.pw_mod
              })
              if(result.data.success){
                alert("비밀번호 변경성공")
                this.mod_acc==0;
                this.pw_mod='';
                this.pw_mod_check='';
              }
              else{
                alert("오류가 발생했습니다. 관리자에게 문의바랍니다.");
              }
               } catch (error) {
              console.log(error)
              if (error) {
                console.log(error)
                alert(error)
              } else {
                console.log(error)
                alert("오류가 발생했습니다. 관리자에게 문의바랍니다.")
              }
            }       
  }
, async loginForm() {
            try {
              const result = await this.$http.post("/fjbox/login", {
                id: this.id,
                pw: this.pw,
              })
              var decoded = jwt_decode(result.data.token)
              const lcalStorageData = {
                user: {
                  info: decoded,    
                  token: result.data.token,
                  refreshToken: result.data.refreshToken,
                },
              }

             Cookies.set("store", JSON.stringify(lcalStorageData), { expires: 31, path:'/common/v1/loginserver', domain : '.jinong.co.kr'})
             
             Cookies.set("token", result.data.token,{domain :'.jinong.co.kr'})
             // this.cookieCheck()
           window.location.href = `http://${result.data.url}/common/v1/loginserver`
            } catch (error) {
              console.log(error)
              if (error) {
                console.log(error)
                alert(error)
              } else {
                console.log(error)
                alert("오류가 발생했습니다. 관리자에게 문의바랍니다.")
              }
            }
        }
      } 
}

</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  height: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 15px;
  border:3px solid #33CC33;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-footer{
  text-align: center;
}
.modal-footer label{
  font-weight: bold;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  
  font-weight: bold;
}



/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>