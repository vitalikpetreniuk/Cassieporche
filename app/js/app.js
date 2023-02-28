

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

	

	$('#btn-category , #burger').on('click', function(){

		if($('#menu-category, #menu-burger').hasClass('overlay')){
			
			body.classList.add("overflow");
	
		}else{
			
			body.classList.remove("overflow");
	
		}
	});

	



})


