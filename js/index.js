let wind = document.querySelector("button")

wind.addEventListener("click", e => {
    wind.classList.toggle("btn-danger")
    wind.classList.toggle("btn-outline-primary")
    if (wind.classList.contains("btn-danger") || wind.classList.contains("show")) {
        wind.textContent = "Opened!!"
    } else {
        wind.textContent = "Click!"
    }

})

let sky = document.querySelector("#login")

sky.addEventListener("click", e => {
    sky.classList.toggle("btn-secondary")
    sky.classList.toggle("btn-outline-primary")
    sky.textContent = "Inserting..."
})