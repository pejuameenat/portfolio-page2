const navLists = document.querySelector('.nav_lists');
const navList = document.querySelectorAll('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');
const btnClose = document.querySelector('.close-img');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const intro = document.querySelector('.intro-flex');
const sendBtn = document.querySelector('.send-msg');
const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const errorMsg = document.querySelector('.error');


function mobileNav(){
    nav.style.width= '100%';
    intro.style.padding = '0';
    navLists.classList.remove('hide');
    navLists.classList.add('bg-white')
    navLists.style.height = '100%';
    navLists.style.width = '100%';
    btnClose.classList.remove('hide');
    menu.classList.toggle('hide');
    for(const list of navList){
        list.style.padding = "1.5rem 1rem 0";
    }
    for(const link of navLinks){
        link.style.color ='#000';
       link.style.fontSize = '.9rem';
    }
}

menu.addEventListener('click', mobileNav)

btnClose.addEventListener('click', function(){
    if(!navLists.classList.contains('hide')){
        navLists.classList.toggle('hide');
        btnClose.classList.add('hide');
        menu.classList.toggle('hide');
        navLists.classList.remove('bg-white')

    }else{
       return;
    }

});

sendBtn.addEventListener('click', function(){   
    for(const input of inputs) {
        if(!input.value && !textArea.value){
            input.style.outline ="1px solid #f00";
            textArea.style.outline = "1px solid #f00";
            errorMsg.classList.remove('hide');
            errorMsg.style.color = "#f00"
              
        }else{
           input.style.outline = " "; 
        }
    }
      
})