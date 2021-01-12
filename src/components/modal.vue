<template>
   <transition name="modal">
    <div class="modal-mask" >
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              회원정보수정
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
             비밀번호확인
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
               <input class="inp_main" type="password" id="password" v-model="password" />
               <br>
              <button class="btn-line" @click="check_password">
                확인
              </button>
              <button class="btn-line2" @click="$emit('close')">
                취소
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
    data: function () {
  return {
      password:''
      ,body:this.$route.query
  }
},
methods:{
    check_password: function(){
        this.$http.post('/users/check_pass', {password: this.password,id:localStorage.getItem("id") }) 
    .then((res) => {
      if (res.data.success == true) {
          this.body={
              password:this.password
          }
       	this.$router.push({path:'/create',query:this.body});
      }
      if (res.data.success == false) {
        alert(res.data.message);
      }
    })
    .catch(function (error) {
      alert(error)
    })
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
  width: 250px;
  margin: 0px auto;
  padding: 20px 30px;
  height:150px;
  background-color: #fff;
  border-radius: 15px;
  border:3px solid #33CC33;;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  height: 20px;
  font-weight: bold;
}
.modal-footer{
  height: 100px;
}
.modal-default-button {
  float: right;
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

.inp_main {
    display: inline-block;
    width: 50%;
    min-width: auto;
    border: 2px solid #55bc7e;
    line-height: 30px;
    height: 30px;
    color: #333;
    font-size: 13px;
    padding: 0 6px;
    vertical-align: middle;
    border-radius: 3px;
    box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
}
.btn-line {
    min-width: 50px;
    background: #fff;
    height: 28px ;
    margin-right: 8px;
    margin-top: 8px;
    line-height: 30px;
    color: #55bc7e;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 10px;
    border: 1px solid #55bc7e
}

.btn-line2 {
  margin-top: 8px;
    min-width: 50px;
    background: #fff;
    height: 28px;
    line-height: 30px;
    color: #999999;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;
    padding: 0 10px;
    border: 1px solid #999999
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>