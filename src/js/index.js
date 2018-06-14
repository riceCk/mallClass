// var tool = require('./tool.js');
// tool.hello('hello');
// require('../css/index.css');
require('../less/index.less')
require('jquery');
function getGoodList(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/src/api/goodsList.json',
        success: function(data){
            createList(data);
        },
        error: function(){
            console.log("error")
        }
    })
}
getGoodList()
function createList(data){
    console.log(dataList);
    var dataList = data.list;
    var str = '';
    dataList.forEach(function(ele, index){
        str += '<a href="http://localhost:8080/goodsInfo.html?id='+ ele.id +'">\
                    <div class="goods_item">\
                        <img src="'+ ele.imgurl[0] +'" alt="">\
                        <p>'+ ele.name +'</p>\
                        <div class="item_price">￥'+ ele.spectList[0].price +'</div>\
                    </div>\
                </a>'
        $('.tab_content').html(str);
    })

    
}