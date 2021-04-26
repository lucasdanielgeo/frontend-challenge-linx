const productGrid = document.querySelector('[data-js="product-grid"]')
let currentPage = 1

const formatNumber = element => {return element.toFixed(2).replace('.',',')}

const addProductsIntoList = products => {
    products.forEach(product => {
        const { id, name, image, oldPrice, price, description, installments } = product
        const count = installments.count
        const value = formatNumber(installments.value)
        const oldPriceFormatted = formatNumber(oldPrice)
        const priceFormatted = formatNumber(price)
        const cardTemplate = `
            <div class="product-card" data-js"product-${id}">
                <div class="card-image"><a href="#"><img src="${image}" alt="${name}"></a></div>
                <div class="product-item-description">
                    <div class="product-name">${name}</div>
                    <div class="product-description">${description}</div>
                    <div class="product-oldPrice">De: R$${oldPriceFormatted}</div>
                    <div class="product-price">Por: R$${priceFormatted}</div>
                    <div class="payment-installments">ou ${count}x de R$${value}</div>
                    <a href="#" class="button small-button" data-js"product-${id}>Comprar</a>
                </div>
            </div>  
        `
        productGrid.innerHTML += cardTemplate
    })
}
const fetchErrorHandling = parent => {
    const clientMessage = `Não conseguimos mostrar os produtos agora, tente mais tarde`
    parent.innerHTML = `<span class"alert">${clientMessage}<span>`
    
    const consoleMessage = `Erro na requisição de dados. ${status.status}`
    throw new Error(consoleMessage)
}

const fetchProducts = async (page, param = false) => {
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    const response = await fetch(url)
    if (!response.ok) {
        fetchErrorHandling(productGrid)
        return
    }
    if (response.ok)  {
        const data = await response.json()
        const products = data.products
        const sliceParam = param 
        param ? addProductsIntoList(products.splice(0,sliceParam)) : addProductsIntoList(products) // slices data at some array index
        currentPage += 1
    }
}

export { fetchProducts, currentPage }