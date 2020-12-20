<template>
<div>
<img src="title.JPG" style="margin-top:100px;width:300px;height:80px"><br>
<strong style="font-size:2em" v-if="status=='join'">회원가입</strong>
<strong style="font-size:2em" v-if="status=='mod'">회원정보수정</strong>
<div class="check_first" v-if="status=='join'">
<form action="" id="joinForm">
            <ul class="join_box">                
            <li class="checkBox check02">
                    <li style="margin-top:30px;font-weight: bold;">개인정보 취급방침 동의(필수)</li>
                    <div id="info_law_text"  style="width:1000px; height:100px; text-align:left;margin-left:150px; font-size:0.8em; border:2px solid #DCDFE6; overflow:scroll;" ><p>
                    &lt;주식회사 지농&gt;('login.jinong.co.kr'이하 '푸드 쥬크 박스 로그인 홈페이지 ')(이하 당 사이트라 한다.)은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.<br>&lt;주식회사 지농&gt;('푸드 쥬크 박스 로그인 홈페이지 ') 은(는) 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.<br>제1조(개인정보의 처리목적)<br>⦁당 사이트는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br>- 홈페이지 회원 가입 및 관리<br>회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별ㆍ인증, 회원자격 유지ㆍ관리, 제한적 본인확인제 시행에 따른 본인 확인, 서비스 부정이용 방지, 
                    만 14세 미만 아동의 개인정보 처리시 법정대리인의 동의 여부 확인, 홈페이지 이용에 관한 문의사항 확인 및 결과 통보, 홈페이지 서비스 개선을 위한 이용자 의견 수렴, 각종 고지ㆍ통지 등을 목적으로 개인정보를 처리합니다.<br>⦁당 사이트가 개인정보 보호법 제32조에 따라 등록ㆍ공개하는 개인정보파일의 처리 목적은 다음과 같습니다.</p>
                    <table class="law_table"><tr><th>개인정보 <br>파일의 명칭</th><th>운영근거/처리목적</th><th>개인정보 파일에 기록되는<br>개인정보의 항목</th><th>보유기간</th></tr><tr><th>푸드 쥬크박스 회원명부</th><th>이용약관/홈페이지 가입의사 확인 및 회원제 서비스 제공</th><th>성명, 이메일주소, 연락처 등</th><th>1년</th>
                    </tr></table><br><p>제2조(개인정보의 처리 및 보유기간)<br>⦁당 사이트는 법령에 따른 개인정보 보유ㆍ이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유ㆍ이용기간 내에서 개인정보를 처리ㆍ보유합니다.<br>⦁각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.<br>- 보유근거: 이용약관<br>- 개인정보 보유 목적: 홈페이지 회원 가입 및 관리<br>- 보유기간: 1년* (단, 회원탈퇴 시 개인정보를 보유하지 아니합니다.)<br>*
                    1년을 주기로 정보주체의 재동의 절차를 거쳐 동의한 경우에만 계속하여 보유합니다. 마지막 동의일자로부터 1년이 경과한 회원은 휴면회원으로 전환하여 별도 테이블에서 개인정보를 보관하고, 휴면회원 전환 이후 180일간 재동의가 없는 경우 파기합니다.<br>제3조(개인정보의 제3자 제공)<br>⦁정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다. ⦁제공목적은 '푸드쥬크박스 사용자 및 데이터 조회 / 푸드쥬크박스 유지 및 관리'입니다.<br>제4조(개인정보처리의 위탁)<br>⦁주식회사 지농은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
                    <table class="law_table"><tr><th>위탁받는 자 (수탁자)</th><th>KIST</th><th>코리아디지탈</th></tr><tr><th>위탁업무</th><th></th><th></th></tr><tr><th>제공받는 자의 개인정보</th><th>로그인 ID, 이름, 소속, 이메일, 휴대폰 전화번호</th>
                    <th>로그인 ID, 이름, 소속, 이메일, 휴대폰 전화번호</th></tr></table><br><p>⦁주식회사 지농은 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리 금지, 기술적ㆍ관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는 지를 감독하고 있습니다.<br>⦁위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리 방침을 통하여 공개하도록 하겠습니다.<br>제5조(정보주체의 권리ㆍ의무 및 행사방법)<br>⦁정보주체는 주식회사 지농에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.<br>- 개인정보 열람요구<br>- 오류 등이 있을 경우 정정 요구<br>- 삭제요구<br>- 처리정지 요구<br>⦁주식회사 지농에서 보유하고 있는 개인정보는 보호법 제35조(개인정보의 열람)에 따라 열람을 요구할 수 있습니다. 개인정보 열람 요구 시 보호법 제35조제4항에 따라 열람을 제한할 수 있습니다.<br>제6조(처리하는 개인정보 항목)<br>⦁당 사이트는 다음의 개인정보 항목을 처리하고 있습니다.<br>홈페이지 회원 가입 및 관리<br>필수항목: 아이디, 비밀번호, 이름, 휴대폰 번호, 이메일주소<br>제7조(개인정보의 파기)<br>⦁주식회사 지농은 개인정보 보유기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.<br>⦁정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리 목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보(또는 개인정보파일)를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.<br>⦁개인정보 파기의 절차 및 방법은 다음과 같습니다.<br>-파기절차<br>주식회사 지농 파기하여야 하는 개인정보(또는 개인정보파일)에 대해 개인정보 파기계획을 수립하여 파기합니다. 주식히사 지농은 파기 사유가 발생한 개인정보(또는 개인정보파일)를 선정하고, 주식회사 지농의 개인정보 보호책임자의 승인을 받아 개인정보(또는 개인정보파일)를 파기합니다.<br>-파기방법 <br>주식회사 지농은 전자적 파일 형태로 기록ㆍ저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록ㆍ저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.<br>제8조(개인정보의 안전성 확보조치)<br>⦁주식회사 지농은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.<br>- 관리적 조치: 내부관리계획 수립ㆍ시행, 정기적 직원 교육 등<br>- 기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치<br>- 물리적 조치: 전산실, 자료보관실 등의 접근통제<br>제9조(개인정보 보호책임자)<br>⦁주식회사 지농은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.<br>⦁개인정보 보호책임자<br>성명 : 최은채<br>직책 : 연구원<br>⦁개인정보 보호 담당부서<br>부서명 : 주식회사 지농 기술연구소<br>담당자 : 최은채<br>연락처 : 010-2934-3722<br>제10조(개인정보 열람청구)<br>⦁정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 주식회사 지농은 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.<br>제11조(권익침해 구제방법)<br>⦁정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.<br>&lt;아래의 기관은 주식회사 지농과는 별개의 기관으로서, 주식회사 지농의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다>.<br>- 개인정보 침해신고센터 (한국인터넷진흥원 운영)<br>소관업무 : 개인정보 침해사실 신고, 상담 신청<br>홈페이지 : privacy.kisa.or.kr<br>전화 : (국번없이) 118<br>주소 : 전라남도 나주시 진흥길 9 한국인터넷진흥원<br>- 개인정보 분쟁조정위원회<br>소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)<br>홈페이지 : www.kopico.go.kr<br>전화 : 1833-6972<br>주소 : 서울특별시 종로구 세종대로 209 정부서울청사 4층<br>대검찰청 사이버범죄수사단<br>(국번없이) 1301 (www.spo.go.kr)<br>- 경찰청 사이버안전국<br>(국번없이) 182, cyberbureau.police.go.kr<br>또한, 개인정보의 열람, 정정·삭제, 처리정지 등에 대한 정보주체자의 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익을 침해 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.<br>☞ 중앙행정심판위원회(www.simpan.go.kr)의 전화번호 안내 참조<br>제13조(개인정보 처리방침 변경)<br>⦁이 개인정보 처리방침은 2020. 12. 2.부터 적용됩니다.<br>
                    </p></div>
            <el-checkbox style="margin-left:730px; font-weight:bold" v-model="info_law_checked" id="info_law_checkbox">개인정보 취급방침(필수)에 동의합니다.</el-checkbox>
           <li class="checkBox check03">
                    <li style="font-weight: bold;">홈페이지 이용에 대한 안내(필수)</li>
                    <div id="homepage_law_text"  style="width:1000px; height:100px; text-align:left;margin-left:150px; font-size:0.8em; border:2px solid #DCDFE6; overflow:scroll;" ><p>
                    푸드 쥬크박스 홈페이지 이용약관<br/>제1장 총칙<br/>제 1 조 (목적)<br/>이 약관은 주식회사 지농이 운영하는 푸드 쥬크박스 홈페이지(이하 “당 사이트”라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 홈페이지와 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.<br/>제 2 조 (약관의 효력과 변경)<br/>당 사이트는 이용자가 본 약관 내용에 동의하는 것을 조건으로 이용자에게 서비스를 제공하며, 당 사이트의 서비스 제공 행위 및 이용자의 서비스 사용 행위에는 본 약관을 우선적으로 적용하겠습니다.<br/>당 사이트는 본 약관을 사전 고지 없이 변경할 수 있으며, 변경된 약관은 당 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 이용자가 변경된 약관에 동의하지 아니하는 경우 본인의 회원등록을 취소(회원 탈퇴)할 수 있으며, 계속 사용할 경우에는 약관 변경에 대한 암묵적 동의로 간주됩니다. 변경된 약관은 공지와 동시에 그 효력을 발휘합니다.<br/>제 3 조 (약관외 준칙)<br/>본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 정보통신윤리위원회심의규정, 정보통신윤리강령, 저작권법 및 기타 관련 법령의 규정에 의합니다.<br/>제 4 조 (용어의 정의)<br/>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>이용자 : 본 약관에 따라 당 사이트가 제공하는 서비스를 받는 자<br/>회원 : 당 사이트에 개인 정보를 제공하여 회원 등록을 한 자로서, 당 사이트의 정보 및 서비스를 이용할 수 있는 자<br/>아이디 : 당 사이트 회원가입 시 발급받은 회원의 신분을 증명하는 고유 코드<br/>비밀번호 : 아이디에 대한 본인 여부를 확인하기 위하여 사용하는 문자, 숫자, 특수 문자등의 조합<br/>가입 : 회원가입 시 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위<br/>탈퇴 : 회원이 이용계약을 종료시키는 행위<br/>본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및 이용규정에서 정의합니다.<br/>제 2 장 서비스 제공 및 이용<br/>제 5 조 (이용 계약의 성립)<br/>이용계약은 이용자가 온라인으로 당 사이트에서 제공하는 이용계약 신청서를 작성하여 가입을 완료하는 것으로 성립됩니다.<br/>당 사이트는 다음 각 호에 해당하는 경우에 가입을 취소할 수 있습니다.<br/>다른 사람의 명의를 사용하여 신청한 경우<br/>이용계약 신청서의 내용을 허위로 기재하였거나 신청한 경우<br/>사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청한 경우<br/>다른 사람의 당 사이트 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 한 경우<br/>당 사이트를 이용하여 법령과 본 약관이 금지하는 행위를 한 경우<br/>기타 당 사이트가 정한 이용신청요건이 미비한 경우<br/>당 사이트는 다음 각 호에 해당하는 경우 그 사유가 소멸될 때까지 이용계약 성립을 유보할 수 있습니다.<br/>서비스 관련 제반 용량이 부족한 경우<br/>기술상 장애 사유가 있는 경우<br/>당 사이트가 제공하는 서비스는 자체 개발하거나 다른 기관과의 협의 등을 통해 제공하는 일체의 서비스를 말하는 것이며, 그 내용을 변경할 경우에는 이용자에게 공지한 후 변경하여 제공할 수 있습니다.<br/>제 6 조 (회원정보 사용에 대한 동의)<br/>회원의 개인정보는 개인정보보호법에 의해 보호되며 개별 사이트의 개인정보처리방침이 적용됩니다.<br/>당 사이트의 회원 정보는 다음과 같이 수집, 사용, 관리, 보호됩니다.<br/>개인정보의 수집 : 당 사이트는 회원가입 시 회원이 제공하는 정보를 수집합니다.<br/>개인정보의 사용 : 당 사이트는 서비스 제공과 관련해서 수집된 회원정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다. 단, 전기통신기본법 등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한 수사상의 목적이 있거나 방송통신심의위원회의 요청이 있는 경우 또는 기타 법령에서 정한 절차에 따른 요청이 있는 경우, 회원이 당 사이트에 제공한 개인정보를 스스로 공개한 경우에는 그러하지 않습니다.<br/>개인정보의 관리 : 회원은 개인정보의 보호 및 관리를 위하여 서비스의 개인정보관리에서 수시로 회원의 개인정보를 수정/삭제할 수 있습니다. 수신되는 정보 중 불필요하다고 생각되는 부분도 변경/조정할 수 있습니다.<br/>개인정보의 보호 : 회원의 개인정보는 오직 회원만이 열람/수정/삭제할 수 있으며, 이는 전적으로 회원의 아이디와 비밀번호에 의해 관리되고 있습니다. 따라서 타인에게 본인의 아이디와 비밀번호를 알려주어서는 아니 되며, 작업 종료 시에는 반드시 로그아웃 해주시고, 웹 브라우저의 창을 닫아주시기 바랍니다(이는 타인과 컴퓨터를 공유하는 인터넷 카페나 도서관 같은 공공장소에서 컴퓨터를 사용하는 경우에 회원의 정보의 보호를 위하여 필요한 사항입니다.)<br/>제 7 조 (회원의 정보 보안)<br/>가입 신청자가 당 사이트 서비스 가입 절차를 완료하는 순간부터 회원은 입력한 정보의 비밀을 유지할 책임이 있으며, 회원이 본인의 아이디와 비밀번호를 타인에게 제공하여 발생하는 모든 결과에 대한 책임은 본인에게 있습니다.<br/>회원은 본인의 아이디와 비밀번호를 타인에게 누설하지 않을 책임이 있으며, 회원의 아이디나 비밀번호가 부정하게 사용되었다는 사실을 발견한 경우에는 즉시 당 사이트에 신고하여야 합니다. 신고를 하지 않음으로 인한 모든 책임은 회원 본인에게 있습니다.<br/>회원은 당 사이트 서비스의 사용 종료 시마다 정확히 접속을 종료하도록 해야 하며, 정확히 종료하지 아니함으로써 제3자가 이용자 또는 회원에 관한 정보를 이용하게 되는 등의 결과로 인해 발생하는 손해 및 손실에 대하여 당 사이트는 책임을 부담하지 아니합니다.<br/>제 8 조 (서비스 이용시간)<br/>서비스 이용시간은 당 사이트의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.<br/>제1항의 이용시간은 정기점검 등의 필요로 인하여 당 사이트가 정한 날 또는 시간 및 예기치 않은 사건사고로 인한 시간은 예외로 합니다.<br/>제 9 조 (서비스의 중지 및 정보의 저장과 사용)<br/>당 사이트 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 국가의 비상사태, 정전, 당 사이트의 관리 범위 외의 서비스 설비 장애 및 기타 불가항력에 의하여 보관되지 못하였거나 삭제된 경우, 전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에 당 사이트는 관련 책임을 부담하지 아니합니다.<br/>당 사이트가 정상적인 서비스 제공의 어려움으로 인하여 일시적으로 서비스를 중지하여야 할 경우에는 서비스 중지 1주일 전의 고지 후 서비스를 중지할 수 있으며, 이 기간 동안 이용자가 고지내용을 인지하지 못한 데 대하여 당 사이트는 책임을 부담하지 아니합니다. 부득이한 사정이 있을 경우 위 사전 고지기간은 감축되거나 생략될 수 있습니다. 또한 위 서비스 중지에 의하여 본 서비스에 보관되거나 전송된 메시지 및 기타 통신 메시지 등의 내용이 보관되지 못하였거나 삭제, 전송되지 못한 경우 및 기타 통신 데이터의 손실이 있을 경우에 대하여도 당 사이트는 책임을 부담하지 아니합니다.<br/>당 사이트의 사정으로 서비스를 영구적으로 중단하여야 할 경우 제2항에 의거합니다. 다만, 이 경우 사전 고지기간은 1개월로 합니다.<br/>당 사이트는 사전 고지 후 서비스를 일시적으로 수정, 변경 및 중단할 수 있으며, 이에 대하여 이용자 또는 제3자에게 어떠한 책임도 부담하지 아니합니다.<br/>당 사이트는 이용자가 본 약관의 내용에 위배되는 행동을 한 경우, 임의로 서비스 사용을 제한 및 중지할 수 있습니다. 이 경우 당 사이트는 위 이용자의 접속을 금지할 수 있습니다.<br/>
                    장기간 휴면 이용자인 경우 안내 메일 또는 공지사항 발표 후 1주일간의 통지 기간을 거쳐 서비스 사용을 중지할 수 있습니다.<br/>제 10 조 (서비스의 변경 및 해지)<br/>당 사이트는 이용자가 서비스를 이용하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않으며, 회원이 당 사이트에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다.<br/>당 사이트는 서비스 이용과 관련하여 가입자에게 발생한 손해 중 가입자의 고의, 과실에 의한 손해에 대하여 책임을 부담하지 아니합니다.<br/>회원을 탈퇴하고자 하는 경우에는 당 사이트 로그인 후 회원탈퇴 절차에 따라 해지할 수 있으며, 통합회원으로서 이용 가능한 모든 사이트의 회원 서비스로부터 동시에 해지됩니다.<br/>제 11 조 (정보 제공 및 홍보물 게재)<br/>당 사이트는 서비스를 운영함에 있어서 각종 정보를 사이트에 게재하는 방법 등으로 회원에게 제공할 수 있습니다.<br/>당 사이트는 서비스에 적절하다고 판단하거나 활용 가능성 있는 홍보물을 게재할 수 있습니다.<br/>제12조 (게시물의 저작권)<br/>이용자가 게시한 게시물의 내용에 대한 권리는 이용자에게 있습니다.<br/>당 사이트는 게시된 내용을 사전 통지 없이 편집, 이동할 수 있는 권리를 보유하며, 다음의 경우 사전 통지 없이 삭제할 수 있습니다.<br/>본 이용약관에 위배되거나 상용 또는 불법, 음란, 저속하다고 판단되는 게시물을 게시한 경우<br/>다른 이용자 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우<br/>공공질서 및 미풍양속에 위반되는 내용인 경우<br/>범죄적 행위에 결부된다고 인정되는 내용일 경우<br/>제3자의 저작권 등 기타 권리를 침해하는 내용인 경우<br/>기타 관계 법령에 위배되는 경우<br/>이용자의 게시물이 타인의 저작권을 침해함으로써 발생하는 민·형사상의 책임은 전적으로 이용자가 부담하여야 합니다.<br/>제 13 조 (이용자의 행동규범 및 서비스 이용제한)<br/>이용자가 제공하는 정보의 내용이 허위인 것으로 판명되거나, 그러하다고 의심할 만한 합리적인 사유가 발생한 경우 당 사이트는 이용자의 본 서비스 사용을 일부 또는 전부 중지할 수 있으며, 이로 인해 발생하는 불이익에 대해 책임을 부담하지 아니합니다.<br/>이용자가 당 사이트 서비스를 통하여 게시, 전송, 입수하였거나 전자메일 기타 다른 수단에 의하여 게시, 전송 또는 입수한 모든 형태의 정보에 대하여는 이용자가 모든 책임을 부담하며 당 사이트는 어떠한 책임도 부담하지 아니합니다.<br/>당 사이트는 당 사이트가 제공한 서비스가 아닌 가입자 또는 기타 유관기관이 제공하는 서비스의 내용상의 정확성, 완전성 및 질에 대하여 보장하지 않습니다. 따라서 당 사이트는 이용자가 위 내용을 이용함으로 인하여 입게 된 모든 종류의 손실이나 손해에 대하여 책임을 부담하지 아니합니다.<br/>이용자는 본 서비스를 통하여 다음과 같은 행동을 하지 않는데 동의합니다.<br/>타인의 아이디(ID)와 비밀번호를 도용하는 행위<br/>저속, 음란, 모욕적, 위협적이거나 타인의 프라이버시를 침해할 수 있는 내용을 전송, 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위<br/>서비스를 통하여 전송된 내용의 출처를 위장하는 행위<br/>법률, 계약에 의하여 이용할 수 없는 내용을 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위<br/>타인의 특허, 상표, 영업비밀, 저작권, 기타 지적재산권을 침해하는 내용을 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위<br/>당 사이트의 승인을 받지 아니한 광고, 판촉물, 정크메일, 스팸, 행운의 편지, 피라미드 조직 기타 다른 형태의 권유를 게시, 게재, 전자메일 또는 기타의 방법으로 전송하는 행위<br/>다른 이용자의 개인정보를 수집 또는 저장하는 행위<br/>당 사이트는 이용자가 본 약관을 위배했다고 판단되면 서비스와 관련된 모든 정보를 이용자의 동의 없이 삭제할 수 있습니다.<br/>1항의 규정에 의하여 서비스의 제한을 받게 된 이용자가 위 조치에 대한 이의가 있을 경우에는 이의신청을 할 수 있으나 서비스 제한 시 삭제된 이용자의 데이터에 대해서는 책임지지 아니합니다.<br/>당 사이트는 제6항의 규정에 의한 이의신청에 대하여 그 확인이 완료될 때까지 이용제한을 연기할 수 있습니다.<br/>제 3 장 의무 및 책임<br/>제 14 조 (당 사이트의 의무)<br/>당 사이트는 법령과 본 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 지속적이고 안정적으로 서비스를 제공하기 위해 노력할 의무가 있습니다.<br/>당 사이트는 회원의 개인 신상 정보를 본인의 승낙 없이 타인에게 누설, 배포하지 않습니다. 다만, 전기통신관련법령 등 관계법령에 의하여 관계 국가기관 등의 요구가 있는 경우에는 그러하지 아니합니다.<br/>당 사이트는 이용자가 안전하게 당 사이트 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안시스템을 갖추어야 합니다.<br/>당 사이트는 이용자의 귀책사유로 인한 서비스 이용 장애에 대하여 책임을 지지 않습니다.<br/>제 15 조 (이용자의 의무)<br/>회원 가입 시에 요구되는 정보는 정확하게 기입하여야 합니다. 또한 이미 제공된 회원에 대한 정보가 정확한 정보가 되도록 유지ㆍ갱신하여야 하며, 회원은 자신의 아이디 및 비밀번호를 제3자에게 이용하게 해서는 안 됩니다.<br/>이용자는 당 사이트의 사전 승낙 없이 서비스를 이용하여 어떠한 영리행위도 할 수 없습니다. 단 개별 사이트에서 별도로 정하는 경우에는 예외로 합니다.<br/>회원은 당 사이트의 서비스를 이용하여 얻은 정보를 각 사이트의 사전승낙 없이 복사, 복제, 변경, 번역, 출 판·방송 기타의 방법으로 사용하거나 이를 타인에게 제공할 수 없습니다. 단, 개별사이트에서 별도로 정하는 경우에는 예외로 합니다.<br/>이용자는 당 사이트 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안 됩니다.<br/>다른 회원의 ID를 부정 사용하는 행위<br/>범죄행위를 목적으로 하거나 기타 범죄행위와 관련된 행위<br/>선량한 풍속, 기타 사회질서를 해하는 행위<br/>타인의 명예를 훼손하거나 모욕하는 행위<br/>타인의 지적재산권 등의 권리를 침해하는 행위<br/>해킹행위 또는 컴퓨터바이러스의 유포행위<br/>타인의 의사에 반하여 광고성 정보 등 일정한 내용을 지속적으로 전송하는 행위<br/>서비스의 안전적인 운영에 지장을 주거나 줄 우려가 있는 일체의 행위<br/>당 사이트에 게시된 정보의 변경<br/>기타 전기통신법 제53조와 전기통신사업법 시행령 16조(불온통신), 통신사업법 제53조 3항에 위배되는 행위<br/>제 4 장 기 타<br/>제 16 조 (당 사이트의 소유권)<br/>당 사이트가 제공하는 서비스, 그에 필요한 소프트웨어, 이미지, 마크, 로고, 디자인, 서비스 명칭, 정보 및 상표 등과 관련된 지적재산권 및 기타 권리는 당 사이트에 소유권이 있습니다.<br/>이용자는 명시적으로 승인받거나 개별 사이트에서 별도로 정하는 경우를 제외하고는 제1항의 소정의 각 재산에 대한 전부 또는 일부의 수정, 대여, 대출, 판매, 배포, 제작, 양도, 재라이센스, 담보권 설정 행위, 상업적 이용 행위를 할 수 없으며, 제3자로 하여금 이와 같은 행위를 하도록 허락할 수 없습니다.<br/>제 17 조 (양도금지)<br/>회원이 서비스의 이용권한, 기타 이용계약 상 지위를 타인에게 양도, 증여할 수 없으며, 이를 담보로 제공할 수 없습니다.<br/>제 18 조 (손해배상)<br/>당 사이트는 무료로 제공되는 서비스와 관련하여 이용자에게 어떠한 손해가 발생하더라도 당 사이트가 고의로 행한 범죄행위를 제외하고 이에 대하여 책임을 부담하지 아니합니다.<br/>제 19 조 (면책조항)<br/>당 사이트는 서비스에 표출된 어떠한 의견이나 정보에 대해 확신이나 대표할 의무가 없으며 회원이나 제3자에 의해 표출된 의견을 승인하거나 반대하거나 수정하지 않습니다. 당 사이트는 어떠한 경우라도 이용자가 서비스에 담긴 정보에 의존해 얻은 이득이나 입은 손해에 대해 책임이 없습니다.<br/>당 사이트는 이용자간 또는 이용자와 제3자간에 서비스를 매개로 하여 물품거래 혹은 금전적 거래 등과 관련하여 어떠한 책임도 부담하지 아니하고, 이용자가 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다.<br/>제 20 조 (관할법원)<br/>본 서비스 이용과 관련하여 발생한 분쟁에 대해 소송이 제기될 경우 안양지방법원을 전속적 관할 법원으로 합니다.<br/>부 칙<br/>[시행일] 본 약관은 2020년 12월 02일부터 시행됩니다.<br/>
                    </p> </div>
                        <el-checkbox style="margin-left:680px;font-weight:bold" v-model="homepage_law_checked" id="homepage_law_checkbox">홈페이지 이용에 대한 안내(필수)에 동의합니다.</el-checkbox>
                    <br>
                    <br>
                    <el-checkbox style="margin-left:490px;font-weight:bold"  @change="selectAll" v-model="all_law_checked" id="all_law_checkbox">개인정보 취급방침(필수), 홈페이지 이용에 대한 안내(필수)에 모두 동의합니다.</el-checkbox>
                    </ul>
         </form>
</div>
<div class="input_form">
<div class="input_table">
<table>
<tr>
<th>
 <label for="id">아이디</label><br>
  <input type="profile" id="id" v-model="user.userid" value="user.userid">
</th>
<th>
   <label for="name">이름</label><br>
   <input type="profile" id="name" v-model="user.name">
</th>
</tr>
<tr>
<th>
   <label for="password">비밀번호</label><br>
   <input type="password" id="password" v-model="user.password">
</th>
<th>
   <label for="password_check">비밀번호확인</label><br>
   <input type="password" id="password_check" v-model="password_check">
</th>
</tr>
<br>
<tr>
<th>
   <label for="phone">전화번호</label><br>
   <input type="text" id="phone" v-model="user.phone">
</th>
<th>
  <label for="email">e메일</label><br>
   <input type="text" id="email" v-model="user.email">
</th>
</tr>
<tr>
<th>
  <label for="group">소속</label><br>
   <input type="text" id="group" v-model="user.group">
   <br><br><br>
</th>
<th>
  <label for="device">장비보유여부</label><br>
   <input type="text" id="device" placeholder="제품시리얼번호" v-model="user.dev"><br>
   <input  type="checkbox" id="checkbox" v-model="checked">
<label style="font-size:1em; " for="checkbox">장비없음</label>
</th>
</tr>
</table>
</div> 
<br>
<el-button type="primary" style="width:100px;height:40px;font-size:1em;" v-on:click="createAccount" v-if="status=='join'">가입신청</el-button>
<el-button type="primary" style="width:100px;height:40px;font-size:1em;" v-on:click="modAccount" v-if="status=='mod'">수정하기</el-button>
<el-button type="danger" style="width:100px;height:40px;font-size:1em;" v-on:click="delAccount" v-if="status=='mod'">회원탈퇴</el-button>
<el-button type="default" style="width:100px;height:40px;font-size:1em;" v-on: @click="$router.go(-1)">취소</el-button>
</div>
</div>
</template>
<script>
export default {
    data: function () {
  return {
    user: {
      userid: '',
      name: '',
      password: '',
      phone: '',
      email: '',
      group:'',
      dev:'',
      law_check:'',
      same:''
    },
    homepage_law_checked:false,
    info_law_checked:false,
    all_law_checked:false,
    password_check:''
    ,checked:''
    ,status:''
    ,form:this.$route.query
  }
},
  mounted() {
    console.log("콘솔갓다배림?")
    console.log(this.homepage_law_checked)
    this.check_status();
      },
   methods: {
  createAccount: function () {
    if(this.homepage_law_checked==true&&this.info_law_checked==true){
     this.user.law_check=true;
    if(this.checked==true){
      this.user.dev="장비없음";
    }
    console.log(this.checked)
    console.log(this.user.dev)
    if(this.user.userid==''){
      alert("아이디를 입력해주세요.");
      return;
    }
    if(this.user.name==''){
      alert("이름을 입력해주세요.");
      return;
    }
    if(this.user.password==''){
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if(this.user.phone==''){
      alert("전화번호를 입력해주세요.");
      return;
    }
    if(this.user.email==''){
      alert("e-mail를 입력해주세요.");
      return;
    }
    if(this.user.group==''){
      alert("소속을 입력해주세요.");
      return;
    }
    if(this.user.dev==''){
      alert("장비입력 또는 장비없음을 선택해주세요.");
      return;
    }
    if(this.user.password==this.password_check){
    this.$http.post('/users/createAcc', { 
      user: this.user
    })
    .then((res) => {
      if (res.data.createsuccess == true) {
        alert(res.data.message);
        this.$router.go(-1);
      }
      if (res.data.createsuccess == false) {
        alert(res.data.message);
        this.user.userid='',
        this.user.name='',
        this.user.password='',
        this.user.phone='',
        this.user.email='',
        this.user.law_check='',
        this.user.dev=''
      }
    })
    .catch(function (error) {
      alert(error)
      this.user.userid='',
        this.user.name='',
        this.user.password='',
        this.user.phone='',
        this.user.email='',
        this.user.law_check='',
        this.user.dev=''
    })
    }
    else{
    alert('비밀번호를 확인해주세요.');
  }
  }
    else{
      alert('약관에 동의해주세요.');  
  }
  },
  modAccount:function(){
    this.user.law_check=true;
     if(this.checked==true){
      this.user.dev="장비없음";
    }
    if(this.user.userid==''){
      alert("아이디를 입력해주세요.");
      return;
    }
    if(this.user.name==''){
      alert("이름을 입력해주세요.");
      return;
    }
    if(this.user.password==''){
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if(this.user.phone==''){
      alert("전화번호를 입력해주세요.");
      return;
    }
    if(this.user.email==''){
      alert("e-mail를 입력해주세요.");
      return;
    }
    if(this.user.dev==''){
      alert("장비입력 또는 장비없음을 선택해주세요.");
      return;
    }
    var id=localStorage.getItem("id");
    
    if(id==this.user.userid){
      this.user.same=true
    }
    else {
      this.user.same=false
    }
    if(this.user.password==this.password_check){
    this.$http.post('/users/modAcc', { 
      user: this.user,
      before_mod_id:localStorage.getItem("id")
    })
    .then((res) => {
      if (res.data.success == true) {
        alert(res.data.message);
        localStorage.setItem("id",res.data.id);
        this.$router.go(-1);
      }
      if (res.data.success == false) {
        alert(res.data.message);
      }
    })
    .catch(function (error) {
      alert(error)
    })
    }
    else{
      alert("비밀번호가 일치하지않습니다. 다시입력해주세요.")
    }
  }
  ,
  selectAll:function(){
    console.log("되냐구")
    console.log(this.all_law_checked+"되나?")
    if(this.all_law_checked==true)
    {
      this.homepage_law_checked=true;
      this.info_law_checked=true;
    }
    else{
      this.homepage_law_checked=false;
      this.info_law_checked=false;    
    }
  },
  check_status:function(){
    var id=localStorage.getItem("id");
    if(id==null){
      this.status='join';
      
    }
    else if(id!=null){
      this.status='mod';
      var body={
        id:id
      }
      this.$http.post('/users/check_user_info',body)
			.then((res)=>{
				if(res.data.success) {
          for(var key in this.form){
            this.user.password=this.user.password+this.form[key]
          }
        this.user.userid=res.data.data[0].id,
        this.user.name=res.data.data[0].user_name,
        this.user.phone=res.data.data[0].phone,
        this.user.password_check=this.user.password,
        this.user.email=res.data.data[0].email,
        this.user.group=res.data.data[0].user_group,
        this.user.dev=res.data.data[0].user_device
        
          console.log('비번2'+this.user.password)
				} else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
    }
  }
  ,
  delAccount:function(){
    this.$http.post('/users/delAcc', { 
      id:localStorage.getItem("id")
    })
    .then((res)=>{
				if(res.data.success) {
           localStorage.removeItem("id");
           localStorage.removeItem("auth");
          alert(res.data.message);
           this.$router.go(-1);
        } else {
					alert("실행중 실패했습니다.\n다시 이용해 주세요");
				}
			})
			.catch((err)=>{
				console.log(err);
			})
  }
}
}
</script>
<style scoped>
body{background-color: #f7f7f7;}
ul>li{list-style: none}
a{text-decoration: none;}
#joinForm{width: 70%;margin: 0 auto; height:450px; }
ul.join_box{border: 1px solid #ddd;height:400px;background-color: #fff;}
.check_first{width:100%;position: relative;}
.input_form{position: relative;width:800;height:900px;margin-left:30%;margin-right:30%;}
.input_table{margin-top:30px;text-align:left;width:700px;height: 520px;border-radius: 5px;border: 1px solid #DCDFE6;}
.input_table table{margin-top:0px;}
.input_table label{font-size:1.4em; font-weight: bold;color:#606266;}
.input_table input{font-size:1.3em;}
.input_table input[type=profile]{width:300px;height: 40px;border-radius: 10px;border: 1px solid #DCDFE6;}
.input_table input[type=password]{width:300px;height: 40px;border-radius: 10px;border: 1px solid #DCDFE6;}
.input_table input[type=text]{width:300px;height: 40px;border-radius: 10px;border: 1px solid #DCDFE6;}
.input_table input[type=checkbox]{width:20px;height: 20px;border-radius: 10px;border: 1px solid #DCDFE6;}
.input_table tr th{padding:20px;}
.law_table tr th{border:1px solid #DCDFE6;}
</style>