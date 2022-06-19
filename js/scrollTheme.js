var nav = document.querySelector("#themeNav")
window.addEventListener("scroll", e => {
    if (window.scrollY > 80) {
        nav.style.opacity = "0.5"
    } else {
        nav.style.opacity = "1"
    }
})