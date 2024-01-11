window.addEventListener('DOMContentLoaded', function(){
    //여기에 DOM을 선택하는 코드를 작성
});

//준비핸들러
$(document).ready(function(){

});

//약식 준비핸들러
$(function(){

});

const $thmbs = $('#slides>ul>li>a');
const $btnNext = $('#slides>.pagination>a.next');
const $btnPrev = $('#slides>.pagination>a.prev');

let nowIdx = 0;
let intervalKey = null;

//썸네일변경, 활성화표시 함수
const chgFn = function(){

    //활성화표시
    $thmbs.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

    //.attr() 메소드 활용
    // const imgSrc = `background-image:url(${$(this).attr('href')});`;
    // $('#slides>p').attr('style',imgSrc);

    //.css() 메소드 활용
    const imgSrc = `url(${$thmbs.eq(nowIdx).attr('href')})`;
    $('#slides>p').css('background-image', imgSrc);

    const txt = $thmbs.eq(nowIdx).attr('title');
    $('#slides>p>a').text(txt);

};

//자동실행 함수
const autoPlay = function(sec){
    //alert('autoPlay 함수 호출성공~!')

    intervalKey = setInterval(function(){

        if(nowIdx<$thmbs.length-1){
            nowIdx++;
        }else{
            nowIdx=0;
        }
    
        chgFn();

    },sec*1000);
};


//load 이벤트는 DOMTree 구성 완료후 나머지 내용을 추가 완료한 상태에서 메모리에 적재된 시점에 발생
$(window).on('load', function(){
    //alert('load 이벤트가 발생함');
    autoPlay(3);
});

/*
    1. 페이지 로드시 기본 3초 간격으로 자동변환
    2. 썸네일에 mouseover시 멈추고, 자동변환 간격 8초로 설정
    3. 다시 썸네일에서 mouseout시 다시변환을 실행하고, 자동변환 간격을 3초로 설정
*/

//슬라이드 전체영역에 대한 이벤트설정
$('#slides').on('mouseenter', function(){
    clearInterval(intervalKey);//자동실행 멈춤
    autoPlay(8);
});

$('#slides').on('mouseleave', function(){
    clearInterval(intervalKey);//자동실행 멈춤
    autoPlay(3);
});


//썸네일에 대한 클릭이벤트
$thmbs.on('mouseover', function(evt){
    evt.preventDefault();
    console.log(this);


    //전체중에서 이번에 클릭한 요소의 index를 알고싶을 때
    nowIdx = $thmbs.index(this);
    console.log(`nowIdx = ${nowIdx}`);

    chgFn();
});

//이전버튼
$btnPrev.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx>0){
        nowIdx--;
    }else{
        nowIdx=$thmbs.length-1;
    }

    chgFn();
});


//다음버튼
$btnNext.on('click', function(evt){
    evt.preventDefault();

    if(nowIdx<$thmbs.length-1){
        nowIdx++;
    }else{
        nowIdx=0;
    }

    chgFn();
});
