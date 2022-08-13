// navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');    
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#tutop') 

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
     header.classList.remove('navbar-fixed');
     toTop.classList.remove('remove');
     toTop.classList.add('hidden');
    }
};


// burger
const burger = document.querySelector('#burger');
const navMenu= document.querySelector('#nav-menu');

burger.addEventListener('click',function() {
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
});
// kllik diluar hambergur
window.addEventListener('click', function(e){
if(e.target != burger && e.target != navMenu){
    burger.classList.remove('burger-active');
    navMenu.classList.add('hidden');
}
});

// const Checkbox = document.querySelector('#toggle');
// const html = document.querySelector('html');

// Checkbox.addEventListener('click', function()
// {
//     Checkbox.checked
// })

// // darkmode toggle
const darkToggle = document.querySelector('#toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
if (darkToggle.checked){ 
    html.classList.add('dark');
    localStorage.theme = 'dark'
} else {
    html.classList.remove('dark');
    localStorage.theme = 'light'
}
});

// // pindahkan toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }