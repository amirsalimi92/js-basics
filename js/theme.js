let themes = document.querySelector(".themes")
var body = document.querySelector("body")
var nav = document.querySelector("#themeNav")

let lastTheme = localStorage.getItem("theme")

if (lastTheme) {
    body.className = lastTheme
    let bodyCSS = window.getComputedStyle(body)
    let colorCode = bodyCSS.backgroundColor
    nav.style.backgroundColor = colorCode
} else {
    body.className = "icy"
    let bodyCSS = window.getComputedStyle(body)
    let colorCode = bodyCSS.backgroundColor
    nav.style.backgroundColor = colorCode
}

Array.from(themes.children).forEach(theme => {
    theme.addEventListener("click", e => {
        let color = e.target.dataset.color

        body.className = color
        let bodyCSS = window.getComputedStyle(body)
        let colorCode = bodyCSS.backgroundColor

        nav.style.backgroundColor = colorCode
        localStorage.setItem("theme", color)
    })
})