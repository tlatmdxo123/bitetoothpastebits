let count = 0;
let bts = document.getElementsByClassName('dot');
let slide = document.querySelector('.slide')

let slidePosition = $(window).innerWidth()
$(window).resize(function(){
    slidePosition = $(window).innerWidth()
    slideText(count)
})

function slideText(a){
    slide.style.transform = `translateX(-${slidePosition*a}px)`
}

//버튼컬러 초기화 함수
function clear(){
    for(let i=0;i<bts.length;i++){
        $(bts[i]).css({background:'none'})
    }
}

//버튼 색 추가 함수
function color(n){
    clear()
    $(bts[n]).css({
        background:'#000'
    })
}



$('.dir_right').click(function(){
    if(count<15){
        color(count+1)
        slideText(count+1)
        count++
    }
})

$('.dir_left').click(function(){
    if(count>0){
        color(count-1)
        slideText(count-1)
        count--
    }
})

// 1.오른쪽 버튼을 누른다
// 2.comment_Wrap이 오른쪽으로 25%이동한다
// 3.오른쪽 버튼호버가 사라지고 색이 어두워진다
// 4.왼쪽 버튼이 진해지고 호버기능이 생긴다
let frameWidth = $('.review_frame').width
let slideCount = 0;
$('.comment_right').click(function(){
    if(slideCount === 0){
        $('.review_wrap').css({
            transform:`translateX(-25%)`
        })
        $('.comment_right').css({
            background:'rgba(189, 188, 188, 0.2)',
            cursor:'default'
        })
        $('.comment_left').css({
            background:'#fff',
            cursor:'pointer'
        })
        slideCount=1;
    }
})
$('.comment_left').click(function(){
    if(slideCount === 1){
        $('.review_wrap').css({
            transform:`translateX(0)`
        })
        $('.comment_left').css({
            background:'rgba(189, 188, 188, 0.2)',
            cursor:'default'
        })
        $('.comment_right').css({
            background:'#fff',
            cursor:'pointer'
        })
        slideCount=0;
    }
})