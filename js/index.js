/**
 * Created by Administrator on 2017/4/10.
 */

new Vue({
    el:'.swiper-container',
    data:{
        "top":[
            {"href":"#cont2","cont":"首页"},
            {"href":"html/project/index.html","cont":"关于我"},
            {"href":"html/yipao-project/dist/index.html","cont":"益跑"},
            {"href":"html/project/index.html","cont":"技能"},
            {"href":"html/project/index.html","cont":"联系我"}
        
        ],
        "content":[
            {"title":"『一句话』"},
            {"title":"name : aa"},
            {"title":"求职 : 前端工程师"},
            {"title":"工作地点 : 北京"},
            {"title":"tel : 15130020505"},
            {"title":"email : 526699741@qq.com"}
        ],
        "swiper-slide":[
            {},
            {},
            {},
            {}
        ]
    },
    methods:{
        show:function () {}
    }
});





//swiper .js

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true
});







