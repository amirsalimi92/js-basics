let popupBtns = document.querySelectorAll(".popup-btn")

popupBtns.forEach(popupBtn => {
    if (popupBtn) {
        var popupWrapper = document.createElement("div")
        popupWrapper.className = "popup-wrapper"
        document.body.prepend(popupWrapper)
    }

    popupBtn.addEventListener("click", e => {
        let popup = popupBtn.nextElementSibling
        popup.classList.add("show")
        popupWrapper.classList.add("show")
        popupBtn.classList.add("show")

        let closeFunc = e => {
            popup.classList.remove("show")
            popupWrapper.classList.remove("show")
            location.reload()
        }

        let popupCloses = document.querySelectorAll(".popup-close")
        popupCloses.forEach(popupClose => {
            popupClose.addEventListener("click", closeFunc)
        })

        popupWrapper.addEventListener("click", closeFunc)
    })
})


