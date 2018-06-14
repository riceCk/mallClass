require('../less/goodsinfo.less');
require('../js/goodsCover.js')
require('jquery');
function getId() {
    var optionList = location.search.slice(1).split('&');
    var idNum;
    optionList.forEach(function (ele, index) {
        if (ele.indexOf('id=') != -1) {
            idNum = ele.slice(3);
        }
    })
    return idNum;
}

function getGoodList() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/src/api/goodsList.json',
        success: function (data) {
            createinfo(data);
        },
        error: function () {
            console.log("error")
        }
    })
}
getGoodList()
function createinfo(data) {
    console.log(data)
    var idNum = getId();
    var dataList = data.list;
    var len = dataList.length;
    var str = '';
    var liStr = '';
    for (var i = 0; i < len; i++) {
        if (dataList[i].id == idNum) {
            $('.infor_one_img').html('<img src="' + dataList[i].imgurl[0] + '">');
            $('.one_name').add($('.infor_th p')).html(dataList[i].name);
            dataList[i].spectList.sort(findPriceRange('price'));
            $('.one_price').html('￥' + dataList[i].spectList[0].price + '-' + dataList[i].spectList[dataList[i].spectList.length - 1].price);
            dataList[i].imgurl.forEach(function (ele, index) {
                str += '<img src="' + ele + '">'
            })
            $('.infor_th').append($(str));
            dataList[i].spectList.forEach(function(ele, index){
                liStr += '<li class="buy_spect" data-price="' + ele.price + '">' + ele.spect + '</li>'
            })
            $('.buy_spect_wrap ul').html(liStr);
            $('.price_value').html($('.one_price').html());
        }
    }
}

function findPriceRange(price) {
    return function (a, b) {
        return a[price] - b[price];
    }
}

function bindEvent(){
    $('.infor_two').add($('.infor_fo')).on('click', function(){
        $('.buy_wrap').css({'display': 'block'})
        $('html').add($('body').css({height: '100%', overflow: 'hidden'}))
    })
    $('.buy_gray').on('click', function(){
        $('.buy_wrap').css({'display': 'none'})
        $('html').add($('body').css({height: 'auto', overflow: 'visible'}))
    })
}
bindEvent()