/**
 * Created by bjwsl-001 on 2016/9/6.
 */
$("#mycollapse>ul").on("click","li",function(){
	var i=$("#mycollapse>ul>li").index(this);
	var lt=-i*100+"%";
	$("#slider").animate({
		left:lt
	},1000);
});
$("#mycollapse>ul>li a").mouseover(function(){
	$("#mycollapse>ul>li a.shake").removeClass('shake');
	$(this).addClass('shake');
})