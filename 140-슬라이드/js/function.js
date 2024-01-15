const $indicators = document.querySelectorAll('#slides>.slides-pagination>li>a');
const $container = document.querySelector('#slides>.slides-container');

console.log($container);

let nowIdx = 0;
let oldIdx = nowIdx;

$indicators.forEach(function($indicator, idx){
	$indicator.addEventListener('click', function(evt){
		evt.preventDefault();
		
		oldIdx = nowIdx;
		nowIdx = idx;
		
		//컨테이너 이동
		$container.style.left = -(100*nowIdx)+'%';
	});
});