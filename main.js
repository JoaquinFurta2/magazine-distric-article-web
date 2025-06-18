const filter_btn = document.querySelector(".filter_btn")
const filter_layout = document.querySelector(".filter_display")
const blur_filter = document.querySelector(".blur_filter")

const menu = document.querySelector(".menu_ico")
const cross = document.querySelector(".cross")
const menu_layout = document.querySelector(".menu_display")
const blur_menu = document.querySelector(".blur_menu")

const search_btn = document.querySelector(".search_btn")
const input = document.querySelector("input")

const logo = document.querySelector(".logo")
const header = document.querySelector("header")

const pElements = document.querySelectorAll('p')
const imageElements = document.querySelectorAll('.main-article img')
const body = document.body


//TOGGLE ICONS COLOR ON SCROLL

const observer = new IntersectionObserver (entries => {
    if (!entries[0].isIntersecting) {
       header.classList.add("black_icons_observer")
    }
       
    else {
       header.classList.remove("black_icons_observer")  
    }
       
    
}, {})

observer.observe(logo)


//Filter Display

body.addEventListener('click',()=> {
    if(input.classList.contains('active')) {
        console.log('hi')
       
    }
})


filter_btn.addEventListener("click", () => {

    filter_layout.classList.toggle("active")
    filter_btn.classList.toggle("active")
    logo.classList.toggle("active")

    header.classList.toggle("black_icons");

    blur_filter.classList.toggle("active")
    blur_filter.onclick= () => {
        filter_layout.classList.remove("active")
        blur_filter.classList.remove("active")
        header.classList.remove("black_icons")
        logo.classList.remove("active")
    }

})


//MENU DISPLAY

menu.onclick = () => {
    menu_layout.classList.add("active")
    
    blur_menu.classList.add("active")
    blur_menu.onclick= () => {
        menu_layout.classList.remove("active")
        blur_menu.classList.remove("active")
    }
    
}

cross.onclick = () => {
    menu_layout.classList.remove("active")
    blur_menu.classList.remove("active")
}

search_btn.onclick = () => {
    input.classList.toggle("active")
    input.focus()
}


// ON VIEW ANIMATION

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
        }
    })
})


pElements.forEach((elem)=> {
    animationObserver.observe(elem)
})


imageElements.forEach((elem) => {
    animationObserver.observe(elem)
})

