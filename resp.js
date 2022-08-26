

let burger = document.querySelector('.burger')
 navToogler = document.querySelector('.navbar')
 rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')


burger.addEventListener('click', function(event) {

navToogler.classList.toggle('h-nav-resp')
rightnav.classList.toggle('v-class-resp')
navlist.classList.toggle('v-class-resp')
});






