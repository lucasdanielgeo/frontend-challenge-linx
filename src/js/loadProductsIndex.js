import { fetchProducts, currentPage } from "./loadProducts.js";
const loadMoreButton = document.querySelector('[data-js="load-more-button"]')

fetchProducts(currentPage)

loadMoreButton.addEventListener('click', Event => {
    Event.preventDefault()
    fetchProducts(currentPage)
})