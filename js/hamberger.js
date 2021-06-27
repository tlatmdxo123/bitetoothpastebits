$hamBar = $('.ham_bar i')
$sidebar = $('.sidebar')
$backBtn = $('.back_btn')
$hamBar.click(function(){
    $sidebar.css({
        transform:'translateX(0)'
    })
})
$backBtn.click(function(){
    $sidebar.css({
        transform:'translateX(-100%)'
    })
})

$downBtn1 = $('.down_menu1')
$downBtn2 = $('.down_menu2')
$downArrow1 = $('.down_menu1 i')
$downArrow2 = $('.down_menu2 i')
let btn_count1 = 0;
let btn_count2 = 0;
$downBtn1.click(function(){
    if(btn_count1 === 0){
        clear()
        $('.hidden1').css('display','block')
        $downArrow1.css('transform','rotate(180deg)')
        btn_count1=1;
    }else{
        $('.hidden1').css('display','none')
        $downArrow1.css('transform','rotate(0)')
        btn_count1=0;
    }
})
$downBtn2.click(function(){
    if(btn_count2 === 0){
        clear()
        $('.hidden2').css('display','block')
        $downArrow2.css('transform','rotate(180deg)')
        btn_count2=1;
    }else{
        $('.hidden2').css('display','none')
        $downArrow2.css('transform','rotate(0)')
        btn_count2=0;
    }
})

function clear(){
    $('.hidden1').css('display','none')
    $('.hidden2').css('display','none')
    btn_count1 = 0;
    btn_count2 = 0;
}