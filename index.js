const navToggle = document.querySelector("barra--toggle")
const navMenu = document.querySelector("barra--menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toogle("nav--menu__visible")
})