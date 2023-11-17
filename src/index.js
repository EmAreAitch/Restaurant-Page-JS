import getHome from "./home";
import getContactUs from "./contact";
import getMenu from "./menu";
import "./style.css";

const homeButton = document.querySelector(".home")
const contactButton = document.querySelector(".contact")
const menuButton = document.querySelector(".menu")

const links = [homeButton, contactButton, menuButton]

const pages = [getHome, getMenu, getContactUs]

let currentPage = homeButton

document.querySelector("nav").after(getHome())

links.forEach(element => {
    element.addEventListener("click", switchPage)
});

function switchPage(e) {
    console.log("mati")
    e.preventDefault()
    let page = e.currentTarget
    if (page.classList.contains("is-active") === false) {
        page.classList.add('is-active')
        let index = page.dataset.target
        document.querySelector('main').outerHTML = pages[index]().outerHTML
        currentPage.classList.remove('is-active')
        currentPage = page
    }
}
