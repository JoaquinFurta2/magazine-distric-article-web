setTimeout (() => {
    const hero = document.querySelector(".hero")
    Img_create = (img_src) => {
        const img = new Image();
        img.src = img_src
    
        img.onload = function() {
        hero.classList.add('load-complete')
        };
        
    }  
    Img_create("images/mobile_img/0-imgs.jpg")
    
}, 1)


