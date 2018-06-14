require('jquery');
require('../less/goodsCover.less');
var num = 1;
var falg = false;
function bindEventSpect(){
    $('.buy_spect_wrap ul').on('click', '.buy_spect', function(){
        falg = true;
        $('.buy_spect').removeClass('active');
        $(this).addClass('active');
        $('.price_value').html($(this).attr('data-price'));
        num = 1;
        $('.buy_number_value').html(num);
    })
    $('.buy_number_decrease').on('click', function(){
        if(num > 1){
            $('.buy_number_value').html(--num);
        }
    })
    $('.buy_number_add').on('click', function(){
            $('.buy_number_value').html(++num);        
    })
    $('.buy_ok').click(function(){
        if(falg){
            alert('提交成功');
            // window.open('http://localhost:8080/index1.html')
        }else{
            alert('请选择')
        }
    })
}
bindEventSpect()