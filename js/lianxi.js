(function ($) {
    $.fn.myScroll=function(options){
        var defaults={
            speed:40,
            rowHeight:24
        };
        var opts=$.extend({},defaults,options);
        var intId=[];
        var sh=opts["rowHeight"];
        var speed=opts["speed"];
        if($(this).find("ul").height()<=$(this).height()){
            clearInterval(a);
        }else {
            a=setInterval(function(){
                $(this).find("ul").animate({
                    marginTop:"-=1"
                },0)
            },speed)
        }
    }
})(jQuery)