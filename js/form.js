let form = document.querySelector(".form")
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let Userchecker = /^[a-zA-Z][\w._]{5,23}/

let submit = false
let submitp = false
let ep = 0

form.addEventListener("submit", e => {
    if (!(submit && submitp)) {
        e.preventDefault()
        if (!submit) {
            form.username.classList.add("is-invalid")
        } if (ep !== 5) {
            form.password.classList.add("is-invalid")
        }
    }
})

form.username.addEventListener("keyup", e => {
    if (e.target.value) {
        username.textContent = e.target.value.toLowerCase()
        if (Userchecker.test(e.target.value)) {
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
            submit = true
        } else {
            e.target.classList.add("is-invalid")
            e.target.classList.remove("is-valid")
            submit = false
        }
    } else {
        username.innerHTML = `<i>write your username</i>`
    }
})

form.password.addEventListener("keyup", e => {
    if (e.target.value) {
        password.textContent = "*".repeat(e.target.value.length)

        let ep = 0
        ep += /[a-z]/.test(e.target.value) ? 1 : 0;
        ep += /[A-Z]/.test(e.target.value) ? 1 : 0;
        ep += /[0-9]/.test(e.target.value) ? 1 : 0;
        ep += /[\W]/.test(e.target.value) ? 1 : 0;
        ep += e.target.value.length >= 8 ? 1 : 0;

        if (ep === 5) {
            e.target.classList.add("is-valid")
            e.target.classList.remove("is-invalid")
            submitp = true
        } else {
            e.target.classList.add("is-invalid")
            e.target.classList.remove("is-valid")
            submitp = false
        }
    } else {
        password.innerHTML = `<i>write your password</i>`
    }
    // password.textContent = "*".repeat(3)
})