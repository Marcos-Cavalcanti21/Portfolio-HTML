function more() {
    let nav = document.getElementById('nav');

    switch (nav.style.display) {
        case "none":
            nav.style.display = "block";
            break;
        case "block":
            nav.style.display = "none";
            break;
        default:
            nav.style.display = "block";
            break;
    }
}

function projects() {

    var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function() {
	var $target = $('.table'),
			animationClass = 'animation-up-slow',
			windowHeight = $(window).height(),
			offset = windowHeight - (windowHeight / 4);

	function animeScroll() {
		var documentTop = $(document).scrollTop();
		$target.each(function() {
			if (documentTop > boxTop(this) - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}
	animeScroll();

	$(document).scroll(function() {
		setTimeout(function() {animeScroll()}, 150);
	});
});

   /*  debugger

    let showProjects = document.querySelector('#projects'),
        showTable = document.querySelectorAll('.table');
    showProjects.style.display = 'table';




    /*     showProjects.classList.add('animation-up-slow');
     */
/*
    for (let i = 0; i < showTable.length; i++) {

        showTable[i].style.display = "table-cell";
        showTable[i].classList.add('animation-up-slow'); */

        /*  setInterval(() => {

             if (i == showTable.length) {
                 clearTimeout();
             } else {
                 
                 setInterval(() => {
                     showTable[i].style.display = "table-cell";
                     showTable[i].classList.add('animation-up-slow');
                 },3000)
             }
         }, 500) */

    }

}