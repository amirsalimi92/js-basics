let accordion = document.querySelector(".accordion")

Array.from(accordion.children).forEach(wrapper => {
    wrapper.querySelector("span").addEventListener("click", e => {
        let span = e.target
        let wrapper = span.parentElement
        wrapper.classList.toggle("show")
        let div = span.nextElementSibling
        if (wrapper.classList.contains("show")) {
            div.style.maxHeight = div.scrollHeight + 30 + 'px'
        } else {
            div.style.maxHeight = null
        }
        Array.from(accordion.children).forEach(loop => {
            if (loop != wrapper) {
                loop.classList.remove("show")
                loop.querySelector('div').style.maxHeight = null
            }
        })
    })
})