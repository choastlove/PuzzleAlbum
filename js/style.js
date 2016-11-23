	$(function(){
		$("img").hover(function(){
			$(this).mouseover(function(){
				$(this).css({"transform":"rotated(10deg)"});
				
			});
		},function(){
		});
		console.log($("img"));
	});
