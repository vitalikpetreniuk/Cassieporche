

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
		body.classList.toggle("overflow");

		cateryMenu.classList.remove("overlay");
		categoryBtn.classList.remove("btn-category-active");
	});


	categoryBtn.addEventListener('click',function(){
		this.classList.toggle("btn-category-active");
		cateryMenu.classList.toggle("overlay");
		body.classList.toggle("overflow");

		burgerMenu.classList.remove("overlay");
		burger.classList.remove("burger-active");
	});


  //slider-element-click

//   $('.slide-card').on('click', function(){
//     $('.slide-card').removeClass('slide-selected');
//     $(this).addClass('slide-selected');
//   });;

})
