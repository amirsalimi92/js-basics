let btn = document.querySelector("#scroll")

window.addEventListener("scroll", e => {
    if (window.scrollY > 120) {
        btn.classList.add("show")
    } else {
        btn.classList.remove("show")
    }
})

btn.addEventListener("click", e => {
    window.scrollTo({ top: 0, behavior: "smooth" })
})

let x = document.body.getBoundingClientRect("div.content")
let xx = document.querySelector("#accordion")
let accLoc = xx.scrollHeight


let btn2 = document.querySelector("#scroll2")

window.addEventListener("scroll", e => {
    if (window.scrollY > 270) {
        btn2.classList.add("show")
    } else {
        btn2.classList.remove("show")
    }
})

btn2.addEventListener("click", e => {
    window.scrollTo({ top: accLoc - 150, behavior: "smooth" })
})
