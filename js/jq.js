/*
* @Author: Administrator
* @Date:   2018-09-15 17:00:03
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-15 18:07:19
*/
$(function(){
	//加减
	let i=0;
	$(".main-content .jiahao").click(function(){
		$(".ys span").css("display","block");
		$(".ys .jianhao1").css("display","block");
		$(".bottom").css("display","block");
		i++;
		$(".ys span").text(`${i}`);
		$(".bottom .cat-list1 .trueprice").text(`${(i)*99+15}`+`RMB(满200减20元)`);

	})
	//减
	
	$(".ys .jianhao1").click(function(){
		// $(".ys span").css("display","block");
		i--;
		$(".ys span").text(`${i}`);
		$(".bottom .cat-list1 .trueprice").text(`${(i)*99+15}`+`RMB(满200减20元)`);
		if(i<1){
			i=1;
			$(".bottom").css("display","none");
		}

	})
	//确认
	$(".bottom .cat-list2").click(function(){
		$(".cover").css("display","block");
	})
})
