const botaoAbrir = document.querySelector(".header-mobile > button")
const botaoFechar = document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nave = document.querySelector(".header-mobile nav")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nave.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nave.classList.remove("abrir")
}