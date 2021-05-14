<template>
    <div class="main">
          <div>
            <br>
            <div style="border-bottom:4px solid #55bc7e;">
            <h4 style="font-size:2.2em; margin-left:10%;font-weight:bold;" >동영상 매뉴얼</h4>
            </div>
          </div>
          <div style="margin-top:2%;margin-left:10%;margin-right:10%; ">
              <el-button-group style="border-bottom:black 1px;">
                <el-button type="success"  @click="select_category(1)" >UI 사용법(1부)</el-button>
                <el-button type="success"  @click="select_category(2)" >UI 사용법(2부)</el-button>
                <el-button type="success"  @click="select_category(3)" >육묘 방법</el-button>
                <el-button type="success"  @click="select_category(4)" >표준양액조제방법(비커가 있는 경우)</el-button>
                <el-button type="success"  @click="select_category(5)" >표준양액조제방법(비커가 없는 경우)</el-button>
                <el-button type="success"  @click="select_category(6)" >양액커스터마이징</el-button>
            </el-button-group>
            <div style="margin-top:2%">
            <div v-if="state==1" >
                <h4>[UI] 푸드쥬크박스의 UI 사용방법을 설명합니다(1부)</h4>
                 <video  controls  preload="auto">
                    <source src="../video/UI_manual_1.mp4" type="video/mp4">
                </video>             
              </div>
            <div v-if="state==2" >
              <h4>[UI] 푸드쥬크박스의 UI 사용방법을 설명합니다(2부)</h4>
                  <video  controls  preload="auto">
                   <source src="../video/UI_manual_2.mp4" type="video/mp4">
                </video>             
            </div>
            <div v-if="state==3" >
                <h4>[육묘] 푸드쥬크박스에서 정식할 작물을 육묘하는 방법에 대해 설명합니다</h4>
                 <video  controls  preload="auto">
                    <source src="../video/seedling_manual.mp4" type="video/mp4">
                </video>             
              </div>
              <div v-if="state==4" >
                <h4>[표준양액조제] 양액조제 표준에 맞춰 비커를 이용해 양액을 조제하는 방법을 설명합니다</h4>
                 <video  controls  preload="auto">
                    <source src="../video/make_nutrient_with_beaker.mp4" type="video/mp4">
                </video>  
              </div>
              <div v-if="state==5">
                <h4>[표준양액조제] 양액조제 표준에 맞춰 비커가 없을 경우 양액을 조제하는 방법을 설명합니다</h4>
                 <video  controls  preload="auto">
                    <source src="../video/make_nutrient_without_beaker.mp4" type="video/mp4">
                </video>  
              </div>
              <div v-if="state==6">
                <h4>[양액조제] 푸드쥬크박스 홈페이지의 양액계산기를 이용하여 원하는 조성의 양액조제방법을 설명합니다</h4>
                 <video  controls  preload="auto">
                    <source src="../video/nutrient_customizing.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
        </div>
</template>
<script>
export default {
    data: function () {
        return {
            state:1 
        }
    }
    ,
    mounted(){
    },
    methods:{ 
      select_category:function(num){
          this.state=num
      }

  }         
}
</script>

<style scoped>
.el-tab{
    color:#55bc7e; 

}
video {width: 80%; max-height:100% ;display:block; margin:20px ;}
@import '../assets/css/calculator.css'
</style>