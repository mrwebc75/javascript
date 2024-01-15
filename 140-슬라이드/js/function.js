const $indicators = document.querySelectorAll('#slides>.slides-pagination>li>a');
const $container = document.querySelector('#slides>.slides-container');
const $btnPrev = document.querySelector('#slides>.slides-navigation.slides-prev');
const $btnNext = document.querySelector('#slides>.slides-navigation.slides-next');

console.log($container);

let nowIdx = 0;
let oldIdx = nowIdx;

$indicators.forEach(function($indicator, idx){
	$indicator.addEventListener('click', function(evt){
		evt.preventDefault();
		
		oldIdx = nowIdx;
		nowIdx = idx;
		
		//활성화표시
		$indicators[nowIdx].parentElement.classList.add('on');
		$indicators[oldIdx].parentElement.classList.remove('on');
		
		//컨테이너 이동
		$container.style.left = -(100*nowIdx)+'%';
	});
});

//이전버튼
$btnPrev.addEventListener('click', function(evt){
	evt.preventDefault();
	
	oldIdx = nowIdx;
	
	if(nowIdx>0){
		nowIdx--;
	}else{
		nowIdx=4;
	}
	
	//활성화표시
	$indicators[nowIdx].parentElement.classList.add('on');
	$indicators[oldIdx].parentElement.classList.remove('on');
	
	//컨테이너 이동
	$container.style.left = -(100*nowIdx)+'%';	
});

//다음버튼
$btnNext.addEventListener('click', function(evt){
	evt.preventDefault();
	
	oldIdx = nowIdx;
	
	if(nowIdx<4){
		nowIdx++;
	}else{
		nowIdx=0;
	}
	
	//활성화표시
	$indicators[nowIdx].parentElement.classList.add('on');
	$indicators[oldIdx].parentElement.classList.remove('on');
	
	//컨테이너 이동
	$container.style.left = -(100*nowIdx)+'%';	
});









