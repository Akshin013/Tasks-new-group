const burgeMenuBtn = document.querySelector('.header-mobile-btn');
const resultMenu = document.querySelector('body')
const exitBtn = document.querySelector('.burger-exit')

function burgerAdd() {
    console.log("dd");
    
    resultMenu.innerHTML = `
        <div class="menu-burger">
            <div class="burger-header">
                <img src="/Jet school/access/images/jet-header.webp" class="burger-header-img">
                <p classs="burger-exit">X</p>
            </div>  
            
            <div class="burger-link-div">
                <a href="#" class="burger-menu-link">Ana Səhifə</a>
                <a href="#" class="burger-menu-link">Haqqımızda</a>
                <a href="#" class="burger-menu-link">Kampaniyalar</a>
                <a href="#" class="burger-menu-link">Bloq və media</a>
                <a href="#" class="burger-menu-link">Əlaqə</a>
            </div>
    
            <div class="burger-btn-div">
                <button class="burger-footer-btn burger-btn-2">Elage saxla</button>
                <button class="burger-footer-btn burger-btn-1">AZ</button>
            </div>
        </div>
    `
}

burgeMenuBtn.addEventListener("click", burgerAdd)


// function exitBurger() {
//     console.log("dsf");
    
// }

// exitBtn.addEventListener("click", exitBurger)














