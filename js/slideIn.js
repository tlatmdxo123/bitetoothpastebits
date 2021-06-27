let aaa = $(window).innerHeight();
let article5 = document.querySelector('.article5')
let article6 = document.querySelector('.article6')
let text6 = article6.querySelector('.text_wrap')
let article8 = document.querySelector('.article8')
let text8 = article8.querySelector('.text_wrap')
let article9 = document.querySelector('.article9')
let text9 = article9.querySelector('.text_wrap')
let article10 = document.querySelector('.article10')
let imgGroup = article10.querySelector('.bg_img')
let img = imgGroup.getElementsByTagName('img')
let article11 = document.querySelector('.article11')
let text11 = article11.querySelector('.title')
let article12 = document.querySelector('.article12')
let itemBox = article12.getElementsByClassName('item_box')
let article13 = document.querySelector('.article13')
let text13 = article13.querySelector('.text_wrap')


$(window).scroll(function(){
    let position5 = $('.article5 .text_wrap').offset().top-aaa;
    let nowpos = $(window).scrollTop()
    if(nowpos>position5){
        article5.classList.add('slideIn')
    }else{
        article5.classList.remove('slideIn')
    }

    let position6 = $('.article6 .text_wrap').offset().top-aaa;
    if(nowpos>position6){
        text6.classList.add('slideIn')
    }else{
        text6.classList.remove('slideIn')
    }

    let position8 = $('.article8').offset().top-aaa;
    if(nowpos>position8){
        text8.classList.add('slideIn')
    }else{
        text8.classList.remove('slideIn')
    }

    let position9 = $('.article9 .text_wrap').offset().top-aaa;
    if(nowpos>position9){
        text9.classList.add('slideIn')
    }else{
        text9.classList.remove('slideIn')
    }

    let position10 = $('.article10 .bg_img').offset().top-aaa;
    if(nowpos>position10){
        img[0].classList.add('slideIn')
        img[0].style.transform = 'rotate(180deg)'
        img[1].classList.add('slideIn')
        img[2].classList.add('slideIn')
        img[3].classList.add('slideIn')
    }else{
        img[0].classList.remove('slideIn')
        img[1].classList.remove('slideIn')
        img[2].classList.remove('slideIn')
        img[3].classList.remove('slideIn')
    }
    let position11 = $('.article11 .text_wrap').offset().top-aaa;
    if(nowpos>position11){
        text11.classList.add('slideIn')
    }else{
        text11.classList.remove('slideIn')
    }
    let position12 = $('.article12 .item_box').offset().top-aaa;
    if(nowpos>position12){
        itemBox[0].classList.add('slideIn')
        itemBox[1].classList.add('slideIn')
        itemBox[2].classList.add('slideIn')
    }else{
        itemBox[0].classList.remove('slideIn')
        itemBox[1].classList.remove('slideIn')
        itemBox[2].classList.remove('slideIn')
    }
    let position13 = $('.article13 .text_wrap').offset().top-aaa;
    if(nowpos>position13){
        text13.classList.add('slideIn')
    }else{
        text13.classList.remove('slideIn')
    }
})

$(window).scroll(function(){
    let nowpos = $(window).scrollTop()
    if(nowpos>0){
        $('#header').css({
            transform:'translateY(-45px)'
        })
    }else{
        $('#header').css({
            transform:'translateY(0)'
        })
    }
})