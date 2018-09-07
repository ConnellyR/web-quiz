$(document).ready(function(){
		
		$("#p2").click(function(){
		$("#p3").show();
		
		});
		$("#p3").click(function(){
		$("#wave").animate({left:'+=100px'},'slow', )
		});
		
		$("#p5").click(function(){
		$("#p6").show();
		});
		
		$("#p8").click(function(){
		$("#p9").show();
		});
		
		$("#p10").click(function(){
		$("#p11").show();
		});
		
		$("#p13").click(function(){
		$("#p14").show();
		
		});
		$("#p15").click(function(){
		$("#p16").show();
		
		});
		
		$("#p9").click(function(){
		$("#force").animate({left:'+=100px'},'slow', )
		$("#force").animate({left:'-=100px'},'slow', )
		});
		
		$("#p14").click(function(){
		$("#pull").animate({left:'+=400px'},'slow', )
		});
	})