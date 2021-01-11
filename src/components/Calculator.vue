<template>
    <div v-loading="loading" class="main">
    
          <div class="modal-body">
            <br>
            <br>
            <p style="font-size:2em;font-weight:bold;border-bottom:2px solid #DCDFE6;" >양액계산기</p>
            <br>
            <h style="font-size:1em;">계산방법을 선택해주세요.</h>
            <br>
            <button class="btn-line mr8" @click="select_category(1)">양분 비율 자동 탐색</button>
            <button class="btn-line" @click="select_category(2)">양분 조제 가능 영역 선택</button>
             </div>
            
          <div class="modal-footer">
            <div v-if="option==1" id="auto_search">
                <h>
                 전기전도도를 입력합니다.<br>
                 전기전도도(EC)란 전하를 운반할 수 있는 정도를 나타내는 물리량으로 양액의 전이온농도 측정에 사용될 수 있습니다.<br>
                 양액의 전이온농도는 양액 내 존재하는 모든 이온농도의 합을 의미합니다.<br>
                 전기전도도가 증가하면 양액의 전 이온농도도 증가합니다.
                 </h>
                 <br>
                 <br>
                 <label style="font-size:1em;">조재하고자 하는 양액의 전기전도도를 입력하세요.(0~4.5mS/cm)</label><br>
                <input class="inp_main" type="text" v-model="ec" id="ec" style="width:250px"/> 
                <br>
                <label style="font-size:1em;">조재하고자하는 양액의 부피를 입력해주세요.(L)</label>
                <br>
                <input class="inp_main" type="text" id="liter" v-model="liter" style="width:250px"/>
                <br>
                <p>[양이온] 조재를 원하는 칼륨(K),칼슘(Ca), 마그네슘(Mg) 양분의 비율(%)을 입력해주세요.
                <br>총합은 100(%)이어야합니다.</p>
                <table class="table_for_input">
                <tr>
                  <td>
                <label for="kalum" style="font-weight:bold">양이온:칼륨(K)</label>
                  </td>
                   <td>
                <label for="calsum" style="font-weight:bold">양이온:칼슘(Ca)</label>
                  </td>
                   <td>
                     <label for="magnesum" style="font-weight:bold">양이온:마그네슘(Mg)</label>
                  </td>
                </tr>
                <tr >
                  <td>
                <input class="inp_main mr8" type="text" id="kalum" v-model="kalum">
                  </td>
                   <td>
                <input class="inp_main mr8" type="text" id="calsum" v-model="calsum">
                  </td>
                   <td>
                     <input class="inp_main" type="text" id="magnesum" v-model="magnesum" readonly placeholder="자동계산">
                </td>
                </tr>
                </table>
               <p v-if="calc_cat_ok=='OK'">{{calc_cat_ratio}}</p>
                <p>[음이온] 조재를 원하는 질소(NO3),인(H2PO4), 황(SO4) 양분의 비율(%)을 입력해주세요.
                <br>총합은 100(%)이어야합니다.</p>
                <table class="table_for_input">
                    <tr>
                      <td>
                      <label for="jilso" style="font-weight:bold">음이온:질소(NO3)</label>
                      </td>
                      <td>
                      <label for="inn" style="font-weight:bold">  음이온:인(H2PO4)</label>
                      </td>
                      <td>
                      <label for="whang" style="font-weight:bold">  음이온:황(SO4)</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <input class="inp_main mr8" type="text" id="jilso" v-model="jilso">
                      </td>
                      <td>
                      <input class="inp_main mr8" type="text" id="inn" v-model="inn">
                      </td>
                      <td>
                      <input class="inp_main mr8" type="text" id="whang" v-model="whang" readonly placeholder="자동계산">
                      </td>
                    </tr>
                </table>
                <button class="btn-line" @click="calc_option_1()">목표 및 가능 제조값 계산</button>
                <br>
                <strong style="font-size:1.3em">계산 결과</strong>
                <p v-if="calc_cat_ok=='OK'">{{calc_cat_ratio}}</p>
                <div v-if="calc_ani_ok=='OK'"><p>{{calc_ani_ratio}}</p>
                <br>
                    <p style="font-weight:bold">양액 조제표(단위 :mM)</p>
                  <table class="table_for_res" >
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result.KNO3}}</td>
                      <td>{{result.KH2PO4}}</td>
                      <td>{{result.K2SO4}}</td>
                      <td>{{result.Ca_NO3_2}}</td>
                      <td>{{result.MgSO4}}</td>
                  </tr>
                  </table>
                  <br>
                <p style="font-weight:bold">양액 조제표(단위 :mg/L)</p>
                   <table class="table_for_res">
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result_liter.KNO3}}</td>
                      <td>{{result_liter.KH2PO4}}</td>
                      <td>{{result_liter.K2SO4}}</td>
                      <td>{{result_liter.Ca_NO3_2}}</td>
                      <td>{{result_liter.MgSO4}}</td>
                  </tr>
                  </table>
                  <br>
                  <p style="font-weight:bold">양액 조제표(단위 :mg)</p>
                     <table class="table_for_res">
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result_mg.KNO3}}</td>
                      <td>{{result_mg.KH2PO4}}</td>
                      <td>{{result_mg.K2SO4}}</td>
                      <td>{{result_mg.Ca_NO3_2}}</td>
                      <td>{{result_mg.MgSO4}}</td>
                  </tr>
                  </table>                                   
                  <div id='1_Div_cat' style="float:left;"></div>
                 <div id='1_Div_ani' style="float:left;"></div>
                 </div>
            </div>
            <!--p>
            
            여기부터 2번 메뉴시작
            
            </p-->
            <div v-if="option==2" id="select_area">
            <h>양분조제 가능 영역을 선택하셨습니다.<br>
            양이온과 음이온 그룹 중 하나를 선택하여 목표 비율을 입력합니다.<br>
            입력한비율에 따라 나머지 이온그룹의 조성 가능 범위가 제시됩니다.
            </h>
            <br>
            <button class="btn-line mr8" @click="select_category(3)">양이온 목표비율입력</button>
            <button class="btn-line" @click="select_category(4)">음이온 목표비율입력</button>
            <br>
            <div v-if="select_option==1">
                    <p>[양이온] 조재를 원하는 칼륨(K),칼슘(Ca), 마그네슘(Mg) 양분의 비율(%)을 입력해주세요.
                <br>총합은 100(%)이어야합니다.</p>
                <table class="table_for_input">
                <tr>
                  <td>
                <label for="kalum" style="font-weight:bold">양이온:칼륨(K)</label>
                  </td>
                   <td>
                <label for="calsum" style="font-weight:bold">양이온:칼슘(Ca)</label>
                  </td>
                   <td>
                     <label for="magnesum" style="font-weight:bold">양이온:마그네슘(Mg)</label>
                  </td>
                </tr>
                <tr>
                  <td>
                <input class="inp_main mr8" type="text" id="kalum" v-model="kalum"/>
                  </td>
                   <td>
                <input class="inp_main mr8" type="text" id="calsum" v-model="calsum"/>
                  </td>
                   <td>
                     <input class="inp_main" type="text" id="magnesum" v-model="magnesum" readonly placeholder="자동계산"/>
                </td>
                </tr>
                </table>
                    <button class="btn-line" @click="before_range(1)">음이온 영역 출력</button>
                </div>
                <div v-if="select_option==2">
                    <p>[음이온] 조재를 원하는 질소(NO3),인(H2PO4), 황(SO4) 양분의 비율(%)을 입력해주세요.
                <br>총합은 100(%)이어야합니다.</p>
                <table class="table_for_input">
                    <tr>
                      <td>
                      <label for="jilso" style="font-weight:bold">음이온:질소(NO3)</label>
                      </td>
                      <td>
                      <label for="inn" style="font-weight:bold">  음이온:인(H2PO4)</label>
                      </td>
                      <td>
                      <label for="whang" style="font-weight:bold">  음이온:황(SO4)</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <input class="inp_main mr8" type="text" id="jilso" v-model="jilso">
                      </td>
                      <td>
                      <input class="inp_main mr8" type="text" id="inn" v-model="inn">
                      </td>
                      <td>
                      <input class="inp_main" type="text" id="whang" v-model="whang" readonly placeholder="자동계산"/>
                      </td>
                    </tr>
                </table>
                    <button class="btn-line" @click="before_range(2)">양이온 영역 출력</button>
                    <p v-if="calc_ani_ok=='OK'">{{calc_ani_ratio}}</p>
                    </div>
                    <!--p>
            
                     여기부터 2번 메뉴종료, 영역 플롯 표시
            
                     </p-->
                    <div id="Div_area"></div>
                <div v-if="select_option_2==true&&select_option==1">
                <p>위의 삼각도 그래프에서 조제를 원하는 지점의 값을 참고하여 음이온 조제 비율과 전기전도도(EC)를 입력해주세요.
                </p>
                <h>
                 전기전도도(EC)란 전하를 운반할 수 있는 정도를 나타내는 물리량으로 양액의 전이온농도 측정에 사용될 수 있습니다.<br>
                 양액의 전이온농도는 양액 내 존재하는 모든 이온농도의 합을 의미합니다.<br>
                 전기전도도가 증가하면 양액의 전 이온농도도 증가합니다.
                 </h>
                 <br>
                 <label>조재하고자 하는 양액의 전기전도도를 입력하세요.(0~4.5mS/cm)</label><br>
                <input class="inp_main" type="text" v-model="ec" id="ec" style="width:250px"/>
                <br>
                <label style="font-size:1em;">조재하고자하는 양액의 부피를 입력해주세요.(L)</label>
                <br>
                <input class="inp_main" type="text" id="liter" v-model="liter" style="width:250px"/>
                <br>
                 <p>[음이온] 조재를 원하는 질소(NO3),인(H2PO4), 황(SO4) 양분의 비율(%)을 입력해주세요.
                <br>총합은 100(%)이어야합니다.</p>
                <table class="table_for_input">
                    <tr>
                      <td>
                      <label for="jilso" style="font-weight:bold">음이온:질소(NO3)</label>
                      </td>
                      <td>
                      <label for="inn" style="font-weight:bold">  음이온:인(H2PO4)</label>
                      </td>
                      <td>
                      <label for="whang" style="font-weight:bold">  음이온:황(SO4)</label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <input class="inp_main mr8" type="text" id="jilso" v-model="jilso">
                      </td>
                      <td>
                      <input class="inp_main mr8" type="text" id="inn" v-model="inn">
                      </td>
                      <td>
                      <input class="inp_main mr8" type="text" id="whang" v-model="whang" readonly placeholder="자동계산">
                      </td>
                    </tr>
                </table>
                <button class="btn-line" @click="calc_option_1()">목표 및 가능 제조값 계산</button>
                <br>
                <strong style="font-size:1.3em">계산 결과</strong>
                <p v-if="calc_cat_ok=='OK'">{{calc_cat_ratio}}</p>
                <div v-if="calc_ani_ok=='OK'"><p>{{calc_ani_ratio}}</p>
                <br>
                    <p style="font-weight:bold">양액 조제표(단위 :mM)</p>
                  <table class="table_for_res" >
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result.KNO3}}</td>
                      <td>{{result.KH2PO4}}</td>
                      <td>{{result.K2SO4}}</td>
                      <td>{{result.Ca_NO3_2}}</td>
                      <td>{{result.MgSO4}}</td>
                  </tr>
                  </table>
                  <br>
                <p style="font-weight:bold">양액 조제표(단위 :mg/L)</p>
                   <table class="table_for_res">
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result_liter.KNO3}}</td>
                      <td>{{result_liter.KH2PO4}}</td>
                      <td>{{result_liter.K2SO4}}</td>
                      <td>{{result_liter.Ca_NO3_2}}</td>
                      <td>{{result_liter.MgSO4}}</td>
                  </tr>
                  </table>
                  <br>
                  <p style="font-weight:bold">양액 조제표(단위 :mg)</p>
                     <table class="table_for_res">
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result_mg.KNO3}}</td>
                      <td>{{result_mg.KH2PO4}}</td>
                      <td>{{result_mg.K2SO4}}</td>
                      <td>{{result_mg.Ca_NO3_2}}</td>
                      <td>{{result_mg.MgSO4}}</td>
                  </tr>
                  </table>                                   
                  <div id='1_Div_cat' style="float:left;"></div>
                 <div id='1_Div_ani' style="float:left;"></div>
                
                </div> 
                </div>
                 <!--p>
            
                     여기부터 2번 1번선택시 두번쨰 종료,2번 2번선택시 ㅅ ㅣ작
            
                     </p--> 
               
                <div v-if="select_option_2==true&&select_option==2">
                <p>위의 삼각도 그래프에서 조제를 원하는 지점의 값을 참고하여<br>
                양이온 조제 비율과 전기전도도(EC)를 입력해주세요.
                </p>
                 <h>
                 전기전도도(EC)란 전하를 운반할 수 있는 정도를 나타내는 물리량으로 양액의 전이온농도 측정에 사용될 수 있습니다.<br>
                 양액의 전이온농도는 양액 내 존재하는 모든 이온농도의 합을 의미합니다.<br>
                 전기전도도가 증가하면 양액의 전 이온농도도 증가합니다.
                 </h>
                 <br>
                 <label>조재하고자 하는 양액의 전기전도도를 입력하세요.(0~4.5mS/cm)</label>
                   <br>
                <input class="inp_main" type="text" v-model="ec" id="ec" style="width:250px" /> 
                <br>
                <label style="font-size:1em;">조재하고자하는 양액의 부피를 입력해주세요.(L)</label>
                <br>
                <input class="inp_main" type="text" id="liter" v-model="liter" style="width:250px" />
                <br>
                 <p>[양이온] 조재를 원하는 칼륨(K),칼슘(Ca), 마그네슘(Mg) 양분의 비율(%)을 입력해주세요.
                <br>총합은 100(%)이어야합니다.</p>
                <table class="table_for_input">
                <tr>
                  <td>
                <label for="kalum" style="font-weight:bold">양이온:칼륨(K)</label>
                  </td>
                   <td>
                <label for="calsum" style="font-weight:bold">양이온:칼슘(Ca)</label>
                  </td>
                   <td>
                     <label for="magnesum" style="font-weight:bold">양이온:마그네슘(Mg)</label>
                  </td>
                </tr>
                <tr>
                  <td>
                <input class="inp_main mr8" type="text" id="kalum" v-model="kalum" />
                  </td>
                   <td>
                <input class="inp_main mr8" type="text" id="calsum" v-model="calsum" /> 
                  </td>
                   <td>
                     <input class="inp_main mr8" type="text" id="magnesum" v-model="magnesum" readonly placeholder="자동계산" />
                </td>
                </tr>
                </table>
                <button class="btn-line" @click="calc_option_1()">목표 및 가능 제조값 계산</button>
                <br>
                <strong style="font-size:1.3em">계산 결과</strong>
                <p v-if="calc_cat_ok=='OK'">{{calc_cat_ratio}}</p>
                <div v-if="calc_ani_ok=='OK'"><p>{{calc_ani_ratio}}</p>
                <br>
                    <p style="font-weight:bold">양액 조제표(단위 :mM)</p>
                  <table class="table_for_res" >
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result.KNO3}}</td>
                      <td>{{result.KH2PO4}}</td>
                      <td>{{result.K2SO4}}</td>
                      <td>{{result.Ca_NO3_2}}</td>
                      <td>{{result.MgSO4}}</td>
                  </tr>
                  </table>
                  <br>
                <p style="font-weight:bold">양액 조제표(단위 :mg/L)</p>
                   <table class="table_for_res">
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result_liter.KNO3}}</td>
                      <td>{{result_liter.KH2PO4}}</td>
                      <td>{{result_liter.K2SO4}}</td>
                      <td>{{result_liter.Ca_NO3_2}}</td>
                      <td>{{result_liter.MgSO4}}</td>
                  </tr>
                  </table>
                  <br>
                  <p style="font-weight:bold">양액 조제표(단위 :mg)</p>
                     <table class="table_for_res">
                  <tr>
                      <td>KNO3</td>
                      <td>KH2PO4</td>
                      <td>K2SO4</td>
                      <td>Ca(NO3)2</td>
                      <td>MgSO4</td>
                  </tr>
                  <tr>
                      <td>{{result_mg.KNO3}}</td>
                      <td>{{result_mg.KH2PO4}}</td>
                      <td>{{result_mg.K2SO4}}</td>
                      <td>{{result_mg.Ca_NO3_2}}</td>
                      <td>{{result_mg.MgSO4}}</td>
                  </tr>
                  </table>                                   
                  <div id='1_Div_cat' style="float:left;"></div>
                 <div id='1_Div_ani' style="float:left;"></div>
                </div>
            </div>
            </div>
          
          </div>
              <button class="btn-line" v-if="show_new==true" @click="reset()">
              새로 계산하기
              </button>
        </div>
</template>
<script>
import Plotly from 'plotly.js-dist'
import {round} from 'mathjs'
//var opt=require('scipy-optimize')
export default {
    data: function () {
  return {
    loading:false,
    option:0,
    select_option:0,
    select_option_2:false,
    ec:'',
    liter:'',
    kalum:'',
    calsum:'',
    magnesum:'',
    jilso:'',
    inn:'',
    whang:'',
    show_new:false, 
    calc_cat_ratio:'',
    calc_ani_ratio:'',
    calc_cat_ok:'no',
    calc_ani_ok:'no',
    result:{
        KNO3:'',
        KH2PO4:'',
        K2SO4:'',
        Ca_NO3_2:'',
        MgSO4:''
    },result_liter:{
        KNO3:'',
        KH2PO4:'',
        KK2SO4:'',
        Ca_NO3_2:'',
        MgSO4:''
    },result_mg:{
        KNO3:'',
        KH2PO4:'',
        KK2SO4:'',
        Ca_NO3_2:'',
        MgSO4:''
    },
    option_2_title:'',
    fert_wt:[100.95,135.93,173.88,235.98,191.98],
    rawData_cat :  [
    {K:0,Ca:0,Mg:0,label:'Target<br>point'},
    {K:0,Ca:0,Mg:0,label:'able<br>point'}
    ],
    rawData_ani :  [
    {NO3:0,H2PO4:0,SO4:0,label:'Target<br>point'},
    {NO3:0,H2PO4:0,SO4:0,label:'able<br>point'}
    ],
    colors:['#db7365','#6ed953'],
    option_2_colors:['#db7365'],
    Area_Axis:['','',''],
    area_data_ani:{
    able:[
		{A:0,B:0,C:0},
		{A:0,B:0,C:0},
		{A:0,B:0,C:0}]},
    
    area_data_cat:{
    able:[
		{A:0,B:0,C:0},
		{A:0,B:0,C:0},
		{A:0,B:0,C:0},
		{A:0,B:0,C:0}
	  ]},
  }
  }
    ,
    mounted(){
    },
    methods:{
    select_category:function(sel){
        this.show_new=false
        this.ec=''
        this.liter=''
        this.kalum=''
        this.calsum=''
        this.magnesum=''
        this.jilso=''
        this.inn=''
        this.whang=''
        this.calc_cat_ok='no'
        this.calc_ani_ok='no'
        this.calc_cat_ratio=''
        this.calc_ani_ratio=''
        this.result.KNO3=''
        this.result.KH2PO4=''
        this.result.Ca_NO3_2=''
        this.result.K2SO4=''
        this.result.MgSO4=''
        this.result_liter.KNO3=''
        this.result_liter.KH2PO4=''
        this.result_liter.Ca_NO3_2=''
        this.result_liter.K2SO4=''
        this.result_liter.MgSO4=''
        this.result_mg.KNO3=''
        this.result_mg.KH2PO4=''
        this.result_mg.Ca_NO3_2=''
        this.result_mg.K2SO4=''
        this.result_mg.MgSO4=''
      if(sel==1){
          this.option=1
          this.select_option=0
          this.select_option_2=false
        }
      else if(sel==2){
          this.option=2
          this.select_option=0
          this.select_option_2=false
      }
      else if(sel==3)
          this.select_option=1
      else if(sel==4)
          this.select_option=2
    },
    async calc_option_1(){
      var mg;
      var so;
      
      var temp_a=Number(this.kalum);
      var temp_b=Number(this.calsum);
      var temp_c=Number(this.jilso);
      var temp_d=Number(this.inn);
      var temp_ec=Number(this.ec)
      if(this.ec==''||this.liter==''){
        alert("EC와 liter값을 입력해주세요.")
        return;
      }
      if(temp_ec<0.5||temp_ec>4.5){
        alert("EC값은 0.5~4.5사이를 입력해야합니다.")
        return;
      }
      if(temp_a+temp_b<100&&temp_a+temp_b>0&&temp_a>0&&temp_b){
          mg=100-(temp_a+temp_b);
          this.magnesum=mg;
          this.calc_cat_ok="OK"
          this.calc_cat_ratio="목표 계산값: K="+temp_a+"% Ca="+temp_b+"% Mg="+mg+"%" 
        }
        else{
          alert("유효한 양이온비를 입력해주세요.")
          return;
        }
        if(temp_c+temp_d<100&&temp_c+temp_d>0&&temp_c>0&&temp_d>0){
            so=100-(temp_c+temp_d);
            this.whang=so;
            this.calc_ani_ok="OK"
            this.calc_ani_ratio="목표 계산값: NO3="+temp_c+"% H2PO4="+temp_d+"% SO4="+so+"%" 
            
        }
        else{
              alert("유효한 음이온비를 입력해주세요.");
              return;
        }
        var body={
              ec:this.ec,
              k:this.kalum,
              ca:this.calsum,
              mg:this.magnesum,
              no3:this.jilso,
              h2po4:this.inn,
              so4:this.whang
        }

        this.req_minimize(body);
    },
    before_range:function(range_option){
      var body_temp={
            select:0,
            a:0,
            b:0,
            c:0
           }
      if(range_option==1){
        var mg;
        var temp_a=Number(this.kalum);
        var temp_b=Number(this.calsum);
       if(temp_a+temp_b<100&&temp_a+temp_b>0&&temp_a>0&&temp_b){
          mg=100-(temp_a+temp_b);
          this.magnesum=mg;
          this.calc_cat_ok="OK"
          this.calc_cat_ratio="목표 계산값: K="+temp_a+"% Ca="+temp_b+"% Mg="+mg+"%" 
          body_temp={
              select:1,
              a:this.kalum,
              b:this.calsum,
              c:this.magnesum 
            }
            this.colors[0]='#366be9'
            this.Area_Axis[0]='A:NO3'
            this.Area_Axis[1]='B:H2PO4'
            this.Area_Axis[2]='C:SO4'
            this.option_2_title='음이온 조제 가능구역'
            this.area_data_ani.able[0].A=this.calsum
            this.area_data_ani.able[0].B=this.kalum
            this.area_data_ani.able[0].C=this.magnesum
            this.area_data_ani.able[1].A=temp_b+temp_a
            this.area_data_ani.able[1].B=0
            this.area_data_ani.able[1].C=mg
            this.area_data_ani.able[2].A=this.calsum
            this.area_data_ani.able[2].B=0
            this.area_data_ani.able[2].C=Number(this.kalum)+Number(this.magnesum)
            this.draw_area(this.area_data_ani,this.colors)
           this.select_option_2=true  
        }
        else{
          alert("유효한 양이온비를 입력해주세요.")
          return;
        }        
      }
      if(range_option==2){
        var so
        var temp_c=Number(this.jilso);
        var temp_d=Number(this.inn);
        if(temp_c+temp_d<100&&temp_c+temp_d>0&&temp_c>0&&temp_d>0){
            so=100-(temp_c+temp_d);
            this.whang=so;
            this.calc_ani_ok="OK"
            this.calc_ani_ratio="목표 계산값: NO3="+temp_c+"% H2PO4="+temp_d+"% SO4="+so+"%" 
            body_temp={
                select:2,
                a:this.jilso,
                b:this.inn,
                c:this.whang
            }
            console.log(body_temp)
             this.colors[0]='#db7365'
            this.Area_Axis[0]='A:K'
            this.Area_Axis[1]='B:Ca'
            this.Area_Axis[2]='C:Mg'
            this.option_2_title='양이온 조제 가능구역'
            this.area_data_cat.able[0].A=100
            this.area_data_cat.able[0].B=0
            this.area_data_cat.able[0].C=0
            this.area_data_cat.able[1].A=100-this.jilso
            this.area_data_cat.able[1].B=this.jilso
            this.area_data_cat.able[1].C=0
            this.area_data_cat.able[2].A=this.inn
            this.area_data_cat.able[2].B=this.jilso
            this.area_data_cat.able[2].C=this.whang
            this.area_data_cat.able[3].A=this.inn
            this.area_data_cat.able[3].B=0
            this.area_data_cat.able[3].C=100-this.inn
            this.draw_area(this.area_data_cat,this.colors)
        
            this.select_option_2=true       
        }
        else{
              alert("유효한 음이온비를 입력해주세요.");
              return;
        }
      }
    },
    /////////파이썬 실행 API 요청//////////
    req_minimize:function(body){
      this.loading=true;
       this.$http.post('/main/nutrient_target', body)
      .then((res) => {
       
            var res_1=res.data.value[0]
            var res_2=res.data.value[1]
            var res_3=res.data.value[2]
            var res_4=res.data.value[3]
            var res_5=res.data.value[4]
            this.rawData_cat[0].K=body.k
            this.rawData_cat[0].Ca=body.ca
            this.rawData_cat[0].Mg=body.mg
            this.rawData_ani[0].NO3=body.no3
            this.rawData_ani[0].H2PO4=body.h2po4
            this.rawData_ani[0].SO4=body.so4
            this.rawData_cat[1].K=res.data.value[5]
            this.rawData_cat[1].Ca=res.data.value[6]
            this.rawData_cat[1].Mg=res.data.value[7]
            this.rawData_ani[1].NO3=res.data.value[8]
            this.rawData_ani[1].H2PO4=res.data.value[9]
            this.rawData_ani[1].SO4=res.data.value[10]
            this.result.KNO3=round(res_1,0)+"mM"
            this.result.KH2PO4=round(res_2,0)+"mM"
            this.result.K2SO4=round(res_3,0)+"mM"
            this.result.Ca_NO3_2=round(res_4,0)+"mM"
            this.result.MgSO4=round(res_5,0)+"mM"
            this.result_liter.KNO3=round(res_1*this.fert_wt[0],0)+"mg/L"
            this.result_liter.KH2PO4=round(res_2*this.fert_wt[1],0)+"mg/L"
            this.result_liter.K2SO4=round(res_3*this.fert_wt[2],0)+"mg/L"
            this.result_liter.Ca_NO3_2=round(res_4*this.fert_wt[3],0)+"mg/L"
            this.result_liter.MgSO4=round(res_5*this.fert_wt[4],0)+"mg/L"
             this.result_mg.KNO3=round(res_1*this.fert_wt[0]*this.liter,0)+"mg"
            this.result_mg.KH2PO4=round(res_2*this.fert_wt[1]*this.liter,0)+"mg"
            this.result_mg.K2SO4=round(res_3*this.fert_wt[2]*this.liter,0)+"mg"
            this.result_mg.Ca_NO3_2=round(res_4*this.fert_wt[3]*this.liter,0)+"mg"
            this.result_mg.MgSO4=round(res_5*this.fert_wt[4]*this.liter,0)+"mg"
            this.loading=false;
            this.show_new=true;
            this.draw_cat();
            this.draw_ani();
      })
      .catch(function (error) {
      alert(error)
      })
      },
      calc_range:function(){
        this.select_option_2=true;
      },
      reset:function(){
         this.$router.go();
        
      },
      /////////////////////////////////////////////////////////////////////

      //----  Methods under this row are used for drawing tenary plot----   


      /////////////////////////////////////////////////////////////////////
      ////////////////////타겟값 그리기///////////////
      draw_cat:function(){
        Plotly.newPlot('1_Div_cat', [{
            type: 'scatterternary',
            mode: 'markers',
            a: this.rawData_cat.map(function(d) { return d.K; }),
            b: this.rawData_cat.map(function(d) { return d.Ca; }),
            c: this.rawData_cat.map(function(d) { return d.Mg; }),
            text: this.rawData_cat.map(function(d) { return d.label; }), 
            marker: {
                symbol: 100,
                color: ['#db7365','#6ed953'],
                size: 14,
                line: { width: 2 }
                }
            }
        ], {
            ternary: {
                sum: 100,
                aaxis: makeAxis_cat('A:K', 0),
                baxis: makeAxis_cat('<br>B:Ca', 45),
                caxis: makeAxis_cat('<br>C:Mg', -45),
                bgcolor: '#FFFFFF'
                },
            annotations: [{
                showarrow: false,
                text: '양이온',
                x: 1.0,
                y: 1.3,
                font: { size: 15 }
                }],
                paper_bgcolor: '#fefdfd',
                });

        function makeAxis_cat(title, tickangle) {
            return {
                title: title,
                titlefont: { size: 20 },
                tickangle: tickangle,
                tickfont: { size: 15 },
                tickcolor: 'rgba(0,0,0,0)',
                ticklen: 5,
                showline: true,
                showgrid: true
                };
          }
        },
    draw_ani:function(){
        Plotly.newPlot('1_Div_ani', [{
        type: 'scatterternary',
        mode: 'markers',
        a: this.rawData_ani.map(function(d) { return d.NO3; }),
        b: this.rawData_ani.map(function(d) { return d.H2PO4; }),
        c: this.rawData_ani.map(function(d) { return d.SO4; }),
        text: this.rawData_ani.map(function(d) { return d.label; }), 
        marker: {
           symbol: 100,
            color: ['#db7365','#6ed953'],
            size: 14,
            line: { width: 2 }
       }
       }
      ], {
       ternary: {
            sum: 100,
            aaxis: makeAxis_ani('A:NO3', 0),
            baxis: makeAxis_ani('<br>B:H2PO4', 45),
            caxis: makeAxis_ani('<br>C:SO4', -45),
            bgcolor: '#FFFFFF'
        },
        annotations: [{
            showarrow: false,
            text: '음이온',
            x: 1.0,
            y: 1.3,
            font: { size: 15 }
        }],
            paper_bgcolor: '#FFFFFF',
        }); 
        function makeAxis_ani(title, tickangle) {
        return {
            title: title,
            titlefont: { size: 20 },
            tickangle: tickangle,
            tickfont: { size: 15 },
            tickcolor: 'rgba(0,0,0,0)',
            ticklen: 5,
            showline: true,
            showgrid: true
        };
        }
    },
      ///////영역 그리기////////////
      /////////////////////////////
      draw_area:function(rawData,colors){
      var data = Object.keys(rawData).map(function(k, i) {
        console.log(i)
        var pts = rawData[k];
        pts = pts.concat(pts[0]);
        return {
            type: 'scatterternary',
            mode: 'lines',
            name: k,
            a: pts.map(function(d) { return d.A }),
            b: pts.map(function(d) { return d.B }),
            c: pts.map(function(d) { return d.C}),
            line: { color: '#444' },
            fill: 'toself',
            fillcolor:colors[i],
            hoveron:'fills+points'
        };
    });
    var layout = {
        ternary: {
            sum: 100,
            aaxis: makeAxis(this.Area_Axis[0]),
            baxis: makeAxis(this.Area_Axis[1]),
            caxis: makeAxis(this.Area_Axis[2])
        },
        showlegend: false,
        width: 700,
        annotations: [{
            showarrow: false,
            text: this.option_2_title,
            x: 0.15,
            y: 1.1
        }]
    };
    Plotly.newPlot('Div_area', data, layout);
  function makeAxis(title) {
  return {
      title: title,
      ticksuffix: '%',
      min: 0.01,
      linewidth: 2,
      ticks: 'outside',
      ticklen: 8,
      showgrid: true,
    };
  }
}
   /* Cal_totalmeq:function(ec,liter){
        console.log(liter);
        var convfactor=9.819;
        var offset=-1.462;
        var totalmeq=convfactor*ec+offset;
        this.totalmeq=totalmeq
    }
    ,cat_meq_rto: function(x){
      var cat_fert_res_meq=[0,0,0];
      var fert_meq_sum=0;
      var cat_fert_res_meq_rto_temp=[0,0,0];
      var cat_fert_res_meq_rto=[0,0,0]
      for(var j=0;j<3;j++){
        for(var i=0;i<5;i++){
          cat_fert_res_meq[j]+=this.el_ratio_cat[j][i]*this.valency_cat[j]*x[i];
        }
        fert_meq_sum+=cat_fert_res_meq[j]
      }
    for(var k=0;k<3;k++){
      cat_fert_res_meq_rto_temp[k]=(cat_fert_res_meq[k]/fert_meq_sum)*100;
      cat_fert_res_meq_rto[k]=round(cat_fert_res_meq_rto_temp[k],0);
      
    }
    this.able_cat=[cat_fert_res_meq_rto[0],cat_fert_res_meq_rto[1],cat_fert_res_meq_rto[2]]
    var diff_temp_cat=0;
    for(var m=0;m<3;m++){
      diff_temp_cat+=pow(cat_fert_res_meq_rto_temp[m]-this.target_cat[m],2)
    }
    var res=[fert_meq_sum,diff_temp_cat]
      return res;
    }
    ,ani_meq_rto: function(x){
      var ani_fert_res_meq=[0,0,0];
      var fert_meq_sum=0;
      var ani_fert_res_meq_rto_temp=[0,0,0];
      var ani_fert_res_meq_rto=[0,0,0]
      for(var j=0;j<3;j++){
        for(var i=0;i<5;i++){
          ani_fert_res_meq[j]+=this.el_ratio_ani[j][i]*this.valency_ani[j]*x[i];
        }
        fert_meq_sum+=ani_fert_res_meq[j]
      }
    for(var k=0;k<3;k++){
      ani_fert_res_meq_rto_temp[k]=(ani_fert_res_meq[k]/fert_meq_sum)*100;
      ani_fert_res_meq_rto[k]=round(ani_fert_res_meq_rto_temp[k],0);
      
    }
    this.able_ani=[ani_fert_res_meq_rto[0],ani_fert_res_meq_rto[1],ani_fert_res_meq_rto[2]]
    var diff_temp_ani=0;
    for(var m=0;m<3;m++){
      diff_temp_ani+=pow(ani_fert_res_meq_rto_temp[m]-this.target_ani[m],2)
    }
    var res=[fert_meq_sum,diff_temp_ani]
     return res;
    
    },show_res:function(){
      var res_cat=[0,0];
      var res_ani=[0,0];
      res_cat=this.cat_meq_rto(this.text_x)
      res_ani=this.ani_meq_rto(this.text_x)
      var diff=res_ani[1]+res_cat[1]
      var cat_sum=this.totalmeq/2-res_cat[0]
      var con1={'type':'eq','fun':cat_sum}
      var cons=([con1])
      var b=(0,10000)
      var bnds=(b,b,b,b,b)
      var method='SLSQP'   
      var body={
          diff:diff,
          bounds:bnds, 
          method:method,
          constraints:cons
          }
      var solution=opt.minimize(this.cat_meq_rto(),this.text_x,method,bnds,cons)
      var x=solution.x  
      console.log("솔루션")
      console.log(typeof solution)
      console.log(solution)
      console.log("엑스")
      console.log(typeof x)
      console.log(x)
    }*/
    }         
}
</script>

<style scoped>
.inp_main {
    display: inline-block;
    width: 80%;
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

.main{
  overflow-y: initial !important;
  margin-right: 50px;
  margin-left: 50px;
  line-height: 1.2;

}
.mr8{margin-right:8px !important;}
.modal-mask {
  overflow-y: initial !important;
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
label {font-size:0.8em;}
p {font-size:1em;}
.modal-container {
  height: 80%;
  overflow-y: auto;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header{
  opacity: 1 !important;
  width:800px;
  height: 40px;
  margin-top: 0;
  color:white;
  background-color : #42b983;
  position: absolute;
}

.modal-body {
  margin: 20px 0;
}
.modal-footer{
  position: relative;
  margin-right:20px;
}
.modal-default-button {
  float: right;
}
.btn-line{min-width:180px;background:#fff;height:54px;line-height:30px;color:#55bc7e;font-size:16px;font-weight:bold;border-radius:3px;padding:0 10px;border:1px solid #55bc7e}
.modal-enter {
  opacity: 0;
}
.table_for_input{
  border-collapse: separate;
  border-spacing: 10px;
  font-size:1.0em;
  font-weight: normal;
}
.table_for_input tr{
  height:1.0em;
  font-weight: normal;
}
.table_for_input td{
  margin-left:1.0em;
  height:1.0em;
  font-weight: normal;
}
.table_for_res{
  border:1px solid #DCDFE6;
  border-radius: 1px;
  border-collapse: separate;
  border-spacing: 10px;
  font-size:1.0em;
  font-weight: normal;
}
.table_for_res tr{
  font-size:1.0em;
  font-weight: normal;
}
.table_for_res td{
 
  margin-left:1.0em;
  height:1.0em;
  font-weight: normal;
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