function navslide(){
    const nav= document.querySelector(".navbar-container")
    const menu=document.querySelector(".nav-links")
    const burger=document.querySelector(".lines")

    burger.addEventListener("click", ()=>{
        menu.classList.toggle("nav-active")
        burger.classList.toggle("toggle")
    })

}


navslide()