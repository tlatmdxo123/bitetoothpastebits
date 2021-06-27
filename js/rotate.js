let rotateImg = document.querySelector('.img_wrap img')


let deg = 0
let st = 0
$(window).scroll(function(){
    let scroll_position = $(window).scrollTop();
    if(scroll_position>st){
        deg+=3
        rotateImg.style.transform = `rotate(${deg}deg)`
    }else{
        deg-=3
        rotateImg.style.transform = `rotate(${deg}deg)`
    }
    st=scroll_position;
})
