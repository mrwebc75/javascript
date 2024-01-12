const $mnus = document.querySelectorAll('header>.container>nav>.gnb>li>a');
const $top = document.querySelector('a.top');
const $articles = document.querySelectorAll('article');

//활성화표시에 사용할 변수
let nowIdx = 0;
let oldIdx = nowIdx;


const arrTopVal = [];//각 article의 top값을 저장하는 배열

//전자동으로 article의 top값을 가져와 arrTopVal 배열에 추가
$articles.forEach(($article,idx)=>{
	//어떤 요소의 top 값(body로부터 떨어진 거리)을 구하는 $DOM.offsetTop 속성
	arrTopVal[idx] = $article.offsetTop; 
});

console.log('arrTopVal =', arrTopVal);
//[0, 1000, 1845, 2645, 3245] + 마진탑66
//=> [66, 1066, 1911, 2711, 3311]

//반복되는 코드를 함수화
const pageAni = function(){

	//활성화 표시
	$mnus[oldIdx].parentElement.classList.remove('on');//on 제거
	$mnus[nowIdx].parentElement.classList.add('on');//on 추가
	
	//window.scrollTo(0, 500*idx);
	
	//스크롤바의 top값에 변화를 줘서 smooth하게 움직이게 설정
	window.scrollTo({
		left:0,
		top:arrTopVal[nowIdx]-66,
		behavior:'smooth'
	});
};


//메뉴에 대한 클릭이벤트
$mnus.forEach(($mnu, idx)=>{
	$mnu.addEventListener('click', (evt)=>{
		evt.preventDefault();
		
		oldIdx = nowIdx;
		nowIdx = idx;		
		
		pageAni();
	})
});


//화살표에 대한 클릭이벤트
$top.addEventListener('click', function(evt){
	evt.preventDefault();
		
	oldIdx = nowIdx;
	nowIdx = 0;		
	
	pageAni();
});












