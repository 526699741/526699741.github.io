/**
 * Created by Administrator on 2017/4/10.
 */

new Vue({
    el:'#app',
    data:{
        "top":[
            {"href":"html/project/index.html","cont":"首页"},
            {"href":"html/project/index.html","cont":"关于我"},
            {"href":"html/project/index.html","cont":"作品"},
            {"href":"html/project/index.html","cont":"技能"},
            {"href":"html/project/index.html","cont":"联系我"}
        
        ],
        "swiper-slide":[
            {},
            {},
            {},
            {}
        ]
    },
    methods:{
        show:function () {

        }
    }
});

new Vue({
    el:'#app2',
    data:{
        "content":[
            {"title":"一句话"},
            {"title":"name 0aaa"},
            {"title":"求职 0前端工程师"},
            {"title":"工作地点 0 北京"},
            {"title":"tel 0 15130020505"},
            {"title":"email 0 526699741@qq.com"}
        ]
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







