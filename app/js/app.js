
document.addEventListener('DOMContentLoaded', () => {

  // Custom JS

	//burger and category

	let burger = document.getElementById('burger');
	let categoryBtn = document.getElementById("btn-category");
	let burgerMenu = document.getElementById('menu-burger');
	let cateryMenu = document.getElementById("menu-category");;
	let body = document.querySelector("body");
	

	burger.addEventListener('click',function(){
		this.classList.toggle("burger-active");
		burgerMenu.classList.toggle("overlay");

		cateryMenu.classList.remove("overlay");
		categoryBtn.classList.remove("btn-category-active");
	});


	categoryBtn.addEventListener('click',function(){
		this.classList.toggle("btn-category-active");
		cateryMenu.classList.toggle("overlay");

		burgerMenu.classList.remove("overlay");
		burger.classList.remove("burger-active");
	});

	

	//review btn-category burger 

	$('#btn-category , #burger').on('click', function(){

		if($('#menu-category, #menu-burger').hasClass('overlay')){
			
			body.classList.add("overflow");
	
		}else{
			
			body.classList.remove("overflow");
	
		}
	});



	//infinity-scroll

	const blogList = document.querySelector('.titles-blogs-wrap');
	
	blogList.addEventListener('wheel', function(ev) {
		let blogsItems = this.querySelectorAll('.titles-blogs-item');

		if (ev.wheelDelta > 0) {
			this.prepend(blogsItems[blogsItems.length - 1]);
		} else {
			this.append(blogsItems[0]);
		}
	});


	// change bg,hover-efect

	$(".titles-blogs-item").on('mouseenter',function() {

		const th = $(this);

		$("body").css('background-color', function() {
			return th.data('bg-color');
		});

	
		if( window.innerWidth >= 822){
			th.children('.img-wrap').removeClass('animate__fadeOut');

			th.children('.img-wrap').addClass('animate__fadeIn');
	
		}
	});

	$(".titles-blogs-item").on('mouseleave',function() {

		const th = $(this);

		$("body").css('background-color', function() {
			return '#D8E377';
		});

		
		if( window.innerWidth >= 822){
			th.children('.img-wrap').removeClass('animate__fadeIn');
			th.children('.img-wrap').addClass('animate__fadeOut');
			
		}	
	
	});






})


