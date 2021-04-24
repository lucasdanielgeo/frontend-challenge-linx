const productGrid = document.querySelector('[data-js="product-grid"]')
const loadMoreButton = document.querySelector('[data-js="load-more-button"]')
let currentPage = 1

const addProductsIntoList = products => {
    products.forEach(product => {
        const { id, name, image, oldPrice, price, description, installments } = product
        const count = installments.count;
        const value = installments.value.toFixed(2).replace('.',',');
        const oldPriceFormatted = oldPrice.toFixed(2).replace('.',',');
        const priceFormatted = price.toFixed(2).replace('.',',');
        const cardTemplate = `
            <div class="product-card" data-js"product-${id}">
                <div class="card-image"><a href="#"><img src="${image}" alt="${name}"></a></div>
                <div class="product-item-description">
                    <div class="product-name">${name}</div>
                    <div class="product-description hidden">${description}</div>
                    <div class="product-oldPrice">De: R$${oldPriceFormatted}</div>
                    <div class="product-price">Por: R$${priceFormatted}</div>
                    <div class="payment-installments">ou ${count}x de R$${value}</div>
                    <a href="#" class="buy-button" data-js"product-${id}>Comprar</a>
                </div>
            </div>  
        `
        productGrid.innerHTML += cardTemplate
    });
}

const fetchProducts = async (page) => {
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    const response = await fetch(url)
    const data = await response.json();
    const products = await data.products
    currentPage += 1
    return addProductsIntoList(products);
}

fetchProducts()

loadMoreButton.addEventListener('click', Event => {
    Event.preventDefault()
    fetchProducts(currentPage)
})

