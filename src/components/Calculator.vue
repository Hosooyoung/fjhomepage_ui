<template>
    <div class="main">
          <div>
            <br>
            <div style="border-bottom:4px solid #55bc7e;">
            <h4 style="font-size:2.2em; margin-left:10%;font-weight:bold;" >양액계산기</h4>
            </div>
            <br>
            <div style="margin-left:10%;">
            <h4 style="font-size:0.8em;font-weight:bold">계산방법을 선택해주세요.</h4>
            <br>
            <el-button-group style="margin-bottom:10px;">
            <el-button type="success"  @click="select_category(1)" >양분 비율 자동 탐색</el-button>
            <el-button type="success"  @click="select_category(2)" >양분 조제 가능 영역 선택</el-button>
            </el-button-group>
            </div>
             </div>
            
          <div>
            
            <div v-if="option==1" id="auto_search">
              <h4 class="step_tit">양분 비율 자동 탐색</h4>
            <br>
            <div class="steps_body">
            <el-steps :active="active_1" finish-status="success" class="step_body">
              <el-step title="Step 1" description="전기전도도 및 용량입력"></el-step>
              <el-step title="Step 2" description="양이온 및 음이온 비율입력"></el-step>
              <el-step title="Step 3" description="계산 결과"></el-step>
              </el-steps>
            </div>  
              <br>
              <el-card v-if="active_1==0" style="margin-left:7%; width:1400px;">
                <div class="card_in">
                 <strong>Step1 : 전기전도도(EC) 및 용량 입력</strong>
                  </div>
                  <br>
                  <div class="card_tit">
                <h4>
                전기전도도(EC)란 전하를 운반할 수 있는 정도를 나타내는 물리량으로 양액의 전이온농도 측정에 사용될 수 있습니다.
                <br>전이온농도는 양액 내 존재하는 모든 이온농도의 합을 의미합니다.
                 <br>전기전도도가 증가하면 양액의 전 이온농도도 증가합니다.
                 </h4>
                 </div>
                 <br>
                 <table  style=" margin-left:50px;border-spacing:10px;border-collapse:separate;">
                  <tr>
                <td style="width:500px;"> <label for="ec" style="font-size:0.8em;font-weight:bold">조재하고자 하는 양액의 전기전도도를 입력하세요.(0~4.5mS/cm)</label></td>
                <td><label for="liter" style="font-size:0.8em;font-weight:bold">조재하고자하는 양액의 부피를 입력해주세요.(L)</label></td>
                  </tr>
                  <tr>
                    <td><input class="inp_main" type="text" v-model="ec" id="ec" style="width:430px"/> 
                    </td>
                    <td>
                      <input class="inp_main" type="text" id="liter" v-model="liter" style="width:430px"/>
                    </td>
                  </tr>
                 </table>
                 
                 <button  style="margin-top:60px;margin-left:45%;margin-right:auto;" class="btn-sm" @click="next_1()">입력완료</button>
              </el-card>
             
                <el-card v-if="active_1==1" style="margin-left:7%; width:1400px;" v-loading="loading" >
                  <div class="card_in">
                <strong>Step2 : 양이온 및 음이온 비율 입력</strong>
                  </div>
                <br>
                <br>
                <div class="card_tit">
                <h4>[양이온] 조재를 원하는 칼륨(K),칼슘(Ca), 마그네슘(Mg) 양분의 비율(%)을 입력해주세요.
                총합은 100(%)이어야합니다.</h4>
                </div>
                <table class="table_for_input">
                <tr>
                  <td style="width:300px;">
                <label for="kalum" style="font-weight:bold;font-size:0.8em">양이온:칼륨(K)</label>
                  </td>
                   <td style="width:300px;">
                <label for="calsum" style="font-weight:bold">양이온:칼슘(Ca)</label>
                  </td>
                   <td style="width:300px;">
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
                     <input class="inp_main" type="text" id="magnesum" v-model="magnesum" readonly placeholder="K,Ca에 맞춰 자동계산됨">
                </td>
                </tr>
                </table>
                <br>
                <div class="card_tit">
                <h4>[음이온] 조재를 원하는 질소(NO3),인(H2PO4), 황(SO4) 양분의 비율(%)을 입력해주세요.
                총합은 100(%)이어야합니다.</h4>
                </div>
                <table class="table_for_input">
                    <tr>
                      <td style="width:300px;">
                      <label for="jilso" style="font-weight:bold">음이온:질소(NO3)</label>
                      </td>
                      <td style="width:300px;">
                      <label for="inn" style="font-weight:bold">  음이온:인(H2PO4)</label>
                      </td>
                      <td style="width:300px;">
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
                      <input class="inp_main mr8" type="text" id="whang" v-model="whang" readonly placeholder="NO3,H2SO4에 맞춰 자동계산됨">
                      </td>
                    </tr>
                </table>
                <button  class="btn-sm" style="margin-left:40%;margin-top:60px;" @click="calc_option_1()">목표 및 가능 제조값 계산</button>
                </el-card>
           
                <div class="result">
                <el-card v-show="active_1==3" style="margin-left:7%; width:1420px;">
                <div class="card_in">          
                <strong>계산 결과</strong>
                </div>
                <div class="card_tit">
                <br>
                <h4>{{calc_cat_ratio}}</h4>
                <br>
                <br>
                <h4>{{calc_ani_ratio}}</h4>
                <br>
                <br>
                <h4>목표 EC 및 부피값 : {{ec}}mS/cm, {{liter}}L</h4>
                <br>
                <br> 
                <table style="width:1300px">
                    <tr>
                      <td style="width:430px">
                    
                    <h4 class="res_title">양액 조제표(단위 :mM)</h4>
                    
                  <table class="table_for_res" >
                  <tr class="res_table_title">
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
                      </td>
                      <tr style="width:430px">
                        <br><br>
                <h4 class="res_title">양액 조제표(단위 :mg/L)</h4>
                   <table class="table_for_res">
                  <tr class="res_table_title">
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
                      </tr>
                      
                      <tr style="width:430px;margin-top:20px;">
                        <br><br>
                  <h4 class="res_title">양액 조제표(단위 :mg)</h4>
                     <table class="table_for_res">
                  <tr class="res_table_title">
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
                      </tr>
                    
                </table>     
                
                </div>
                <br>
                <br>
                <div style="width:1410px;">               
                  <div id='1_Div_cat' style="display:inline-block;"></div>
                 <div id='1_Div_ani' style="display:inline-block;"></div>
                </div>
                <br>
                <br>
              <button class="btn-line" style="margin-left:45%;margin-right:auto;"  @click="reset()">
              새로 계산하기
              </button>
                </el-card>
            </div>
            </div>
            <!--p>
               조제가능 영역 메뉴시작
            </p-->
            <div v-if="option==2" id="select_area">
              <h4 class="step_tit">양분 조제 가능 영역 선택</h4>
              <br>
            <div class="steps_body">
            <el-steps :active="active_2" finish-status="success" class="step_body">
              <el-step title="Step 1" description="조제영역 이온선택"></el-step>
              <el-step title="Step 2" description="조제 가능 영역 확인"></el-step>
              <el-step title="Step 3" description="이온비,전기전도도 및 용량입력"></el-step>
              <el-step title="Step 4" description="계산 결과"></el-step>
              </el-steps>
            </div>
            <br>
            <el-card v-if="active_2==0" style="margin-left:7%; width:1400px;">
            <div class="card_in">
            <strong>Step1 : 계산할 조제 영역의 이온 선택</strong>
            </div>
            <br>
            <div class="card_tit">
            <h4>
            양분조제 가능 영역을 선택하셨습니다. 양이온과 음이온 그룹 중 하나를 선택하여 목표 비율을 입력합니다. 
            <br>입력한 비율에 따라 나머지 이온그룹의 조성 가능 범위가 제시됩니다.
            </h4>
            </div>
            <br>
            <button class="btn-line mr12" style="margin-left:4%;"  @click="select_category(3)">양이온 목표비율입력</button>
            <button class="btn-line" @click="select_category(4)">음이온 목표비율입력</button>
            </el-card>
            <el-card v-if="select_option==1&&active_2==1" style="margin-left:7%;width:1400px;">
                <div class="card_in">
                  <strong >Step2 : 목표 양이온비를 통한 조제 가능 음이온 영역 확인</strong>
                </div>
                <br>
                <br>
                <div class="card_tit">
                  <h4>[양이온] 조재를 원하는 칼륨(K),칼슘(Ca), 마그네슘(Mg) 양분의 비율(%)을 입력해주세요.
                  총합은 100(%)이어야합니다.</h4>
                </div>
                <br>
                <table class="table_for_input">
                  <tr>
                   <td style="width:300px;">
                     <label for="kalum" style="font-weight:bold;font-size:0.8em">양이온:칼륨(K)</label>
                   </td>
                   <td style="width:300px;">
                     <label for="calsum" style="font-weight:bold">양이온:칼슘(Ca)</label>
                   </td>
                   <td style="width:300px;">
                      <label for="magnesum" style="font-weight:bold">양이온:마그네슘(Mg)</label>
                   </td>
                  </tr>
                  <tr>
                   <td>
                      <input class="inp_main mr8" type="text" id="kalum" v-model="kalum">
                   </td>
                   <td>
                       <input class="inp_main mr8" type="text" id="calsum" v-model="calsum">
                   </td>
                    <td>
                       <input class="inp_main" type="text" id="magnesum" v-model="magnesum" readonly placeholder="K,Ca에 맞춰 자동계산됨">
                    </td>
                  </tr>
                </table>
                <br>
                <button style="margin-left:45%;margin-top:60px;" class="btn-sm" @click="before_range(1)">음이온 영역 출력</button>
                </el-card>
           
                <el-card v-if="select_option==2&&active_2==1" style="margin-left:7%;widrth:1400px;">
                  <div class="card_in">
                    <strong>Step2 : 목표 음이온비를 통한 조제 가능 양이온 영역 확인</strong>
                  </div>
                    <br>
                    <br>
                  <div class="card_tit">
                    <h4>[음이온] 조재를 원하는 질소(NO3),인(H2PO4), 황(SO4) 양분의 비율(%)을 입력해주세요.
                총합은 100(%)이어야합니다.</h4>
                  </div>
                  <br>
                <table class="table_for_input">
                    <tr>
                      <td style="width:300px;">
                      <label for="jilso" style="font-weight:bold">음이온:질소(NO3)</label>
                      </td>
                      <td style="width:300px;">
                      <label for="inn" style="font-weight:bold">  음이온:인(H2PO4)</label>
                      </td>
                      <td style="width:300px;">
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
                      <input class="inp_main mr8" type="text" id="whang" v-model="whang" readonly placeholder="NO3,H2SO4에 맞춰 자동계산됨">
                      </td>
                    </tr>
                </table>
                    <br>
                    <button style="margin-left:45%;margin-top:60px;" class="btn-sm" @click="before_range(2)">양이온 영역 출력</button>
                    <br>
                </el-card>
         






                    <!--p>
            
                     여기부터 2번 메뉴종료, 영역 플롯 표시
            
                     </p-->




                <el-card v-show="select_option_2==true&&select_option==1&&active_2==2" style="margin-left:7%;width:1400px;" v-loading="loading">
                <div class="card_in">   
                  <strong>Step3 : 목표 음이온 비,전기전도도(EC) 및 용량을 입력해 양액계산</strong>
                </div>
                  <br>
                <div id="Div_area_1"></div>
                <br>
                <div class="card_tit">
                <h4>위의 삼각도 그래프에서 조제를 원하는 지점의 값을 참고하여 음이온 조제 비율과 전기전도도(EC)를 입력해주세요.
                 <br>전기전도도(EC)란 전하를 운반할 수 있는 정도를 나타내는 물리량으로 양액의 전이온농도 측정에 사용될 수 있습니다. 
                 <br>전이온농도는 양액 내 존재하는 모든 이온농도의 합을 의미합니다. 전기전도도가 증가하면 양액의 전 이온농도도 증가합니다.
                 </h4>
                </div>
                 <br>
                 <table style="margin-left:50px;border-spacing:10px;border-collapse:separate;">
                  <tr>
                <td style="width:500px;"> <label for="ec" style="font-size:0.8em;font-weight:bold">조재하고자 하는 양액의 전기전도도를 입력하세요.(0~4.5mS/cm)</label></td>
                <td><label for="liter" style="font-size:0.8em;font-weight:bold">조재하고자하는 양액의 부피를 입력해주세요.(L)</label></td>
                  </tr>
                  <tr>
                    <td><input class="inp_main" type="text" v-model="ec" id="ec" style="width:430px"/> 
                    </td>
                    <td>
                      <input class="inp_main" type="text" id="liter" v-model="liter" style="width:430px"/>
                    </td>
                  </tr>
                 </table>
                <br>
                <br>
                <div class="card_tit">
                 <h4>[음이온] 조재를 원하는 질소(NO3),인(H2PO4), 황(SO4) 양분의 비율(%)을 입력해주세요.
                총합은 100(%)이어야합니다.</h4>
                </div>
                 <table class="table_for_input">
                    <tr>
                      <td style="width:300px;">
                      <label for="jilso" style="font-weight:bold">음이온:질소(NO3)</label>
                      </td>
                      <td style="width:300px;">
                      <label for="inn" style="font-weight:bold">  음이온:인(H2PO4)</label>
                      </td>
                      <td style="width:300px;">
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
                      <input class="inp_main mr8" type="text" id="whang" v-model="whang" readonly placeholder="NO3,H2SO4에 맞춰 자동계산됨">
                      </td>
                    </tr>
                </table>
                <button class="btn-sm" style="margin-top:60px; margin-left:45%;margin-right:auto;" @click="calc_option_1()">목표 및 가능 제조값 계산</button>
                <br>
                </el-card>
            
                <!--p>
                    여기부터 2번 1번선택시 두번쨰 종료,2번 2번선택시 ㅅ ㅣ작
                </p--> 
                <el-card v-show="select_option_2==true&&select_option==2&&active_2==2" style="margin-left:7%;width:1400px;" v-loading="loading">
                  <div class="card_in">
                    <strong>Step3 : 목표 양이온 비,전기전도도(EC) 및 용량을 입력해 양액계산</strong>
                  </div>
                  <br>
                  <div id="Div_area_2"></div>
                  <br>
                  <div class="card_tit">
                <h4>위의 삼각도 그래프에서 조제를 원하는 지점의 값을 참고하여 양이온 조제 비율과 전기전도도(EC)를 입력해주세요.
                 <br>전기전도도(EC)란 전하를 운반할 수 있는 정도를 나타내는 물리량으로 양액의 전이온농도 측정에 사용될 수 있습니다. 
                 <br>전이온농도는 양액 내 존재하는 모든 이온농도의 합을 의미합니다. 전기전도도가 증가하면 양액의 전 이온농도도 증가합니다.
                 </h4>
                  </div>
                 <br>
                 <table style="margin-left:50px;border-spacing:10px;border-collapse:separate;">
                  <tr>
                <td style="width:500px;"> <label for="ec" style="font-size:0.8em;font-weight:bold">조재하고자 하는 양액의 전기전도도를 입력하세요.(0~4.5mS/cm)</label></td>
                <td><label for="liter" style="font-size:0.8em;font-weight:bold">조재하고자하는 양액의 부피를 입력해주세요.(L)</label></td>
                  </tr>
                  <tr>
                    <td><input class="inp_main" type="text" v-model="ec" id="ec" style="width:430px"/> 
                    </td>
                    <td>
                      <input class="inp_main" type="text" id="liter" v-model="liter" style="width:430px"/>
                    </td>
                  </tr>
                 </table>
                <br>
                <br>
                <div class="card_tit">
                 <h4>[양이온] 조재를 원하는 칼륨(K),칼슘(Ca), 마그네슘(Mg) 양분의 비율(%)을 입력해주세요.
                총합은 100(%)이어야합니다.</h4>
                </div>
                 <table class="table_for_input">
                <tr>
                  <td style="width:300px;">
                <label for="kalum" style="font-weight:bold;font-size:0.8em">양이온:칼륨(K)</label>
                  </td>
                   <td style="width:300px;">
                <label for="calsum" style="font-weight:bold">양이온:칼슘(Ca)</label>
                  </td>
                   <td style="width:300px;">
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
                     <input class="inp_main" type="text" id="magnesum" v-model="magnesum" readonly placeholder="K,Ca에 맞춰 자동계산됨">
                </td>
                </tr>
                </table>
                <br>
                <button class="btn-sm" style="margin-top:60px; margin-left:45%;margin-rgiht:auto;" @click="calc_option_1()">목표 및 가능 제조값 계산</button>
                </el-card>
               
                <div class="result">
                <el-card v-show="select_option_2==true&&active_2==4" style="margin-left:7%;width:1400px;">
                <div class="card_in">
                <strong>계산 결과</strong>
                </div>
                <div class="card_tit">
                <br>
                <h4>{{calc_cat_ratio}}</h4>
                <br>
                <br>
                <h4>{{calc_ani_ratio}}</h4>
                <br>
                <br>
                <h4>목표 EC 및 부피값 : {{ec}}mS/cm, {{liter}}L</h4>
                <br>
                <br> 
                <table style="width:1300px">
                    <tr>
                      <td style="width:430px">
                    
                    <h4 class="res_title">양액 조제표(단위 :mM)</h4>
                    
                  <table class="table_for_res" >
                  <tr class="res_table_title">
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
                      </td>
                      <tr style="width:430px">
                        <br><br>
                <h4 class="res_title">양액 조제표(단위 :mg/L)</h4>
                   <table class="table_for_res">
                  <tr class="res_table_title">
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
                      </tr>
                      
                      <tr style="width:430px;margin-top:20px;">
                        <br><br>
                  <h4 class="res_title">양액 조제표(단위 :mg)</h4>
                     <table class="table_for_res">
                  <tr class="res_table_title">
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
                      </tr>                    
                </table>                     
                </div>
                <br>
                <br>
                <div style="width:1410px;">               
                  <div id='1_Div_cat' style="display:inline-block;"></div>
                 <div id='1_Div_ani' style="display:inline-block;"></div>
                </div>
                <br>
                <br>
              <button class="btn-line" style="margin-left:45%;margin-right:auto;"  @click="reset()">
              새로 계산하기
              </button>
              </el-card>
              </div>
          </div>
          </div>
        </div>
</template>
<script>
import Plotly from 'plotly.js-dist'
import {round} from 'mathjs'
//var opt=require('scipy-optimize')
export default {
    data: function () {
  return {
    active_1:0,
    active_2:0,
    area:'',
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
      next_1() {
        var temp_ec=Number(this.ec)
        if(this.ec==''||this.liter==''){
          alert("EC와 liter값을 입력해주세요.")
          return;
      }
      if(temp_ec<0.5||temp_ec>4.5){
        alert("EC값은 0.5~4.5사이를 입력해야합니다.")
        return;
      }
        this.active_1=this.active_1+1;
        if (this.activ_1++ > 2) this.active_1 = 0;
        
      },
      ////////////////////////버튼클릭에 따른 데이터 값 초기화
    select_category:function(sel){
        this.show_new=false
        this.area=''
        this.active_2=0
        this.active_1=0
        this.ec=''
        this.liter=''
        this.kalum=''
        this.calsum=''
        this.magnesum=''
        this.jilso=''
        this.inn=''
        this.whang=''
        this.calc_cat_ok=''
        this.calc_ani_ok=''
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
      if(this.select_option_2==true&&this.select_option==1){
        Plotly.purge('Div_area_1')
      }
      if(this.select_option_2==true&&this.select_option==2){
        Plotly.purge('Div_area_2')
      }
      if(sel==1){
          this.option=1
          this.active_1=0
          this.select_option=0
          this.select_option_2=false
          
        }
      else if(sel==2){
          this.option=2
          this.active_2=0
          this.select_option=0
          this.select_option_2=false
      }
      else if(sel==3){
          this.active_2=1
          this.select_option=1
      }
      else if(sel==4){
          this.active_2=1
          this.select_option=2
      }
    },

    /////////////////100% 합산 자동계산 및 파이썬 실행하는 함수 실행 //////////////////
    async calc_option_1(){
      
      var mg;
      var so;
      
      var temp_a=Number(this.kalum);
      var temp_b=Number(this.calsum);
      var temp_c=Number(this.jilso);
      var temp_d=Number(this.inn);
      var temp_ec=Number(this.ec);
      if(this.option==2){
        if(this.ec==''||this.liter==''){
          alert("EC와 liter값을 입력해주세요.")
          return;
      }
      if(temp_ec<0.5||temp_ec>4.5){
        alert("EC값은 0.5~4.5사이를 입력해야합니다.")
        return;
      }
      }
      if(temp_a+temp_b<100&&temp_a+temp_b>0&&temp_a>0&&temp_b>0){
          mg=100-(temp_a+temp_b);
          this.magnesum=mg;
          this.calc_cat_ratio="목표 양이온 계산값: K="+temp_a+"% Ca="+temp_b+"% Mg="+mg+"%" 
        }
        else{
          if(this.option==1){
            this.active_1==1
          }else if(this.option==2){
            this.active_2==2
          }
          alert("유효한 양이온비를 입력해주세요.")
          return;
        }
        if(temp_c+temp_d<100&&temp_c+temp_d>0&&temp_c>0&&temp_d>0){
            so=100-(temp_c+temp_d);
            this.whang=so;
            this.calc_ani_ratio="목표 음이온 계산값: NO3="+temp_c+"% H2PO4="+temp_d+"% SO4="+so+"%" 
            
        }
        else{
          if(this.option==1){
              this.active_1==1
          }else if(this.option==2){
              this.active_2==2
          }
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
    ///////////////////양액범위계산
    before_range:function(range_option){
      
      
      if(range_option==1){
        this.area='Div_area_1'
        var mg;
        var temp_a=Number(this.kalum);
        var temp_b=Number(this.calsum);
       if(temp_a+temp_b<100&&temp_a+temp_b>0&&temp_a>0&&temp_b>0){
          mg=100-(temp_a+temp_b);
          this.magnesum=mg;
          this.calc_cat_ok="OK"
          this.calc_cat_ratio="목표 계산값: K="+temp_a+"% Ca="+temp_b+"% Mg="+mg+"%" 
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
             this.active_2=2;
           this.select_option_2=true  
        }
        else{
          this.active_2==1
          alert("유효한 양이온비를 입력해주세요.")
          return;
        }        
      }
      if(range_option==2){
        this.area='Div_area_2'
        var so
        var temp_c=Number(this.jilso);
        var temp_d=Number(this.inn);
        if(temp_c+temp_d<100&&temp_c+temp_d>0&&temp_c>0&&temp_d>0){
            so=100-(temp_c+temp_d);
            this.whang=so;
            this.calc_ani_ok="OK"
            this.calc_ani_ratio="목표 계산값: NO3="+temp_c+"% H2PO4="+temp_d+"% SO4="+so+"%" 
           
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
            this.active_2=2;
            this.select_option_2=true       
        }
        else{
              this.active_2==1
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
            if(this.option==1){
            this.active_1=3;
            }
            else if(this.option==2){
            this.active_2=4;
            }
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
    
    Plotly.newPlot(this.area, data, layout);
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
  }         
}
</script>

<style scoped>

@import '../assets/css/calculator.css'
</style>