document.addEventListener('DOMContentLoaded', () => {

  // Custom JS

	//burger and category

	// $('#burger').on('click', function(){
	// 	const th = $(this);
	// 	if( th.hasClass('burger-active') ){
	// 		$('#menu-category').removeClass('overlay');
	// 		$('#menu-burger').removeClass('overlay');
	// 		th.removeClass('burger-active');
	// 	}
	// 	else{
	// 		th.addClass('burger-active');
	// 		$('#menu-burger').addClass('overlay')
	// 	}
	// });
	$('#close').on('click', function(){
		$('#menu-category').removeClass('overlay');
	});
	$('#btn-category').on('click', function(){
		const th = $(this);
		$('#menu-category').addClass('overlay');
	});

	

	//review btn-category burger 

	// $('#btn-category , #burger').on('click', function(){

	// 	if($('#menu-category, #menu-burger').hasClass('overlay')){
			
	// 		body.classList.add("overflow");
	
	// 	}else{
			
	// 		body.classList.remove("overflow");
	
	// 	}
	// });



	//infinity-scroll

	// const blogList = document.querySelector('.titles-blogs-wrap');
	//
	// blogList.addEventListener('wheel', function(ev) {
	// 	let blogsItems = this.querySelectorAll('.titles-blogs-item');
	//
	// 	if (ev.wheelDelta > 0) {
	// 		this.prepend(blogsItems[blogsItems.length - 1]);
	// 	} else {
	// 		this.append(blogsItems[0]);
	// 	}
	// });
	//
	//
	// // change bg,hover-efect
	//
	// $(".titles-blogs-item").on('mouseenter',function() {
	//
	// 	const th = $(this);
	//
	// 	$("body, header, .btns-top, .menu-header").css('background-color', th.data('bg-color'));
	//
	//
	// 	if( window.innerWidth >= 822){
	// 		th.children('.img-wrap').removeClass('animate__fadeOut');
	//
	// 		th.children('.img-wrap').addClass('animate__fadeIn');
	//
	// 	}
	// });
	// $(".titles-blogs-item").on('mouseleave',function() {
	//
	// 	const th = $(this);
	//
	// 	$("body, header, .btns-top, .menu-header").css('background-color', '#D8E377');
	//
	//	
	// 	if( window.innerWidth >= 822){
	// 		th.children('.img-wrap').removeClass('animate__fadeIn');
	// 		th.children('.img-wrap').addClass('animate__fadeOut');
	//		
	// 	}	
	//
	// });
	//
	// //heigt-header fixed
	// $("main").css("margin-top", $("header, .btns-top").outerHeight()  + "px");
	// $(".titles-blogs-wrap").css("margin-top", $(".btns-top").outerHeight()  + "px");
	


})


