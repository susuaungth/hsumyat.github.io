
$(document).ready(function(){
	$("#header").hover(function(){
		$('.blocks.first-intro-info .icon-html').toggleClass('ht-hover-icon');
	});
	$("#header").hover(function(){
		$('.blocks.first-intro-info .icon-code').toggleClass('code-hover-icon');
	});
	$("#footer").hover(function(){
		$('.blocks.last-intro-info .icon-html').toggleClass('ht-hover-icon');
	});	
	$("#footer").hover(function(){
		$('.blocks.last-intro-info .icon-code').toggleClass('code-hover-icon');
	});

});