
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
              <p v-if="mod_acc==0">
             fjbox계정을 입력하세요.
             </p>
             
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
            <div v-if="mod_acc==0">
            <form @submit.prevent="loginForm">
              <input v-model="id" type="text" placeholder="Username" required />
              <input v-model="pw" type="password" placeholder="Password" required />
              <br>
              <button type="submit" class="btn-sm">
              로그인
             </button>
          </form>
            <button class="btn-sm-red" @click="$emit('close')">
              취소
              </button>
              <br>
            <button class="btn-line2-sm" @click="mod_acc=1">
            비밀번호 변경
            </button>  
          </div>
            <div v-if="mod_acc==1">
            <p>계정 확인</p>
            <input v-model="id_check" type="text" placeholder="Username" required />
            <input v-model="pw_check" type="password" placeholder="Password" required />
            <br>
             <button class="btn-sm" @click="check_pw">
                확인
            </button>
            <button class="btn-sm-red" @click="$emit('close')">
                취소
            </button>
            </div>
            <div v-if="mod_acc==2">
            <p>변경 비밀번호 </p>
            <input v-model="pw_mod" type="text" placeholder="Password" required />
            <p>변경 비밀번호 확인</p>
            <input v-model="pw_mod_check" type="password" placeholder="Password" required />
            <br>
             <button class="btn-sm" @click="Mod_password">
                변경
            </button>
            <button class="btn-sm-red" @click="$emit('close')">
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
              const res = await this.$http.post("/check_pw", {
                id: this.id_check,
                pw: this.pw_check
              })
              console.log(res.data.success);
              if(res.data.success){
                this.serial=res.data.serial;
                this.mod_acc=2;
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
              const res = await this.$http.post("/mod_pw", {
                id:this.id_check,
                pw: this.pw_mod,
                before_pw:this.pw_check
              })
              if(res.data.success){
                alert("비밀번호 변경성공")
                this.mod_acc=0;
                this.id_check='';
                this.pw_check='';
                this.pw_mod='';
                this.pw_mod_check='';
                this.serial='';
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
              const result = await this.$http.post("/login", {
                id: this.id,
                pw: this.pw
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
  text-align:center;
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

button {
    font-family: 'Nanum Gothic';
    font-size: 0;
    vertical-align: top;
    border: 0;
}

.text-xs-right .btn-reset,
.text-xs-right .btn-submit {
    margin-left: 4px;
}

.btn-line {
    min-width: 180px;
    background: #fff;
    height: 54px;
    line-height: 30px;
    color: #55bc7e;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 10px;
    border: 1px solid #55bc7e
}

.btn-line2 {
    min-width: 180px;
    background: #fff;
    height: 54px;
    line-height: 30px;
    color: #999999;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 10px;
    border: 1px solid #999999
}

.btn-default {
    min-width: 180px;
    background: #55bc7e;
    height: 54px;
    line-height: 30px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 10px;
}

.btn-gray {
    min-width: 180px;
    background-color: #999999;
    height: 54px;
    line-height: 30px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 10px;
}

.btn-select {
    background-color: #0082c9;
    border-color: #006fab;
    font-size: 16px;
    font-weight: bold;
    min-width: 138px;
    color: #fff;
    border-radius: 2px;
}

.btn-sm {
    min-width: 28px;
    background: #55bc7e;
    height: 30px;
    line-height: 26px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 15px;
}
.btn-line2-sm {
    min-width: 28px;
    background: #fff;
    height: 30px;
    line-height: 26px;
    color: #999999;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 10px;
    border: 1px solid #999999
}

.btn-sm-red {
    min-width: 28px;
    background: #F56C6C;
    height: 30px;
    line-height: 26px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 15px;
}
.btn-sm2 {
    display: inline-block;
    min-width: 28px;
    height: 30px;
    padding: 0 14px;
    line-height: 26px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    background: #fff;
    color: #333333;
    vertical-align: middle;
    border-radius: 3px;
    border: 1px solid #999999;
}

.btn-sm3 {
    min-width: 30px;
    background: #525863;
    height: 35px;
    line-height: 26px;
    color: #fff;
    font-size: 13px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 20px;
}

.btn-sm4 {
    display: inline-block;
    min-width: 30px;
    height: 30px;
    padding: 0 10px;
    line-height: 26px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    background: #fff;
    color: #55bc7e;
    vertical-align: middle;
    border-radius: 3px;
    border: 1px solid #55bc7e;
}

.btn-sm5 {
    display: inline-block;
    min-width: 28px;
    height: 30px;
    padding: 0 10px;
    line-height: 26px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    background: #fff;
    color: #aaaaaa;
    vertical-align: middle;
    border-radius: 3px;
    border: 1px solid #aaaaaa;
}

.btn_center {
    margin: 40px 0;
    text-align: center;
}
</style>
