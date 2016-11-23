window.onload = function() {
	var arr = [-8, 8, -5, 5,-7, 7, -2, 1,-3, 3, -4, 4,-11 ,11, -12, 12,-13, 13, -14, 14,-15,15,-20,20,-17,17,-18,18,-19,19];
	for (var i = 1; i <= 25; i++) {
		var _container = document.getElementById('container');
		var _img = document.createElement("img");
		var _div=document.createElement("div");
		var _span=document.createElement("span");
		_div.className="main";
		_img.src = "images/" + i + ".jpg";
		_img.style.zIndex="1";
		_container.appendChild(_div);
		_div.appendChild(_img);
		_div.appendChild(_span);
		_div.style.transform = "rotate(" + arr[Math.floor(Math.random() * arr.length)] + "deg)";
	}
	$(function() {
		$(".main").mouseover(function() {
			$(this).css({
				"transform": "rotate(0)",
				"box-shadow":"none"
			});
		});
		$(".main").mouseout(function(){
			$(this).css({
				"transform":"rotate("+arr[Math.floor(Math.random() * arr.length)]+"deg)",
				"boxShadow":"-10px -10px 10px #333"
			})
		});
		$(".main").click(function() {
			if ($(".box").css("display")=="none") {
				$(".box").css({"display":"block"});
				
				$(".main").animate({
					"margin": "0"
				}, 500);
				$(".main").css({
					"transform": "rotate(0)",
					"border":"1px solid #888",
					"box-shadow":"none"
				});
				$(".main").eq(0).css({"boxShadow":"-10px -10px 10px #333"});
				$(".main").eq(1).css({"boxShadow":"0 -10px 10px #333"});
				$(".main").eq(2).css({"boxShadow":"0 -10px 10px #333"});
				$(".main").eq(3).css({"boxShadow":"0 -10px 10px #333"});
				$(".main").eq(4).css({"boxShadow":"10px -10px 10px #333"});

				$(".main").eq(5).css({"boxShadow":"-10px 0 10px #333"});
				$(".main").eq(9).css({"boxShadow":"10px 0 10px #333"});
				$(".main").eq(10).css({"boxShadow":"-10px 0 10px #333"});
				$(".main").eq(14).css({"boxShadow":"10px 0 10px #333"});
				$(".main").eq(15).css({"boxShadow":"-10px 0 10px #333"});
				$(".main").eq(19).css({"boxShadow":"10px 0 10px #333"});
				$(".main").eq(20).css({"boxShadow":"-10px 10px 10px #333"});
				$(".main").eq(21).css({"boxShadow":"0 10px 10px #333"});
				$(".main").eq(22).css({"boxShadow":"0 10px 10px #333"});
				$(".main").eq(23).css({"boxShadow":"0 10px 10px #333"});
				$(".main").eq(24).css({"boxShadow":"10px 10px 10px #333"});
				 $("img").attr("src",$(this).find("img").attr("src"));
			}else{
				$(".box").css({"display":"none"});
				$(".main").animate({
					"margin": "0 20px 10px 0"
				}, 500);
				$(".main").css({
					"boxShadow":"-10px -10px 10px #333",
					"border":"5px solid #fff"
				});
				$("img").each(function(index){
					console.log(index);
					this.src="images/"+(index+1)+".jpg";
				});	
				
			}
		});
	})

}