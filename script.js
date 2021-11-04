const mobilebtn = document.getElementById("mobile-menubutton")
nav = document.querySelector('nav');
mobilebtnexit = document.getElementById("mobile-exitbutton")

mobilebtn.addEventListener('click',()=>{
    nav.classList.add('menu-btn');
})

mobilebtnexit.addEventListener('click',()=>{
    nav.classList.remove('menu-btn');
})