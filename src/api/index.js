// Retrieve data function
const retrieveData = async (url) => {
  return fetch('https://dummyjson.com/products')
  .then(resp => resp.json())
  .then(data => data.products)
}

// Get products data from fakeapi
const getProducts = () => {
  return retrieveData(process.env.API)
}

// encapsulated methods
const PRODUCTS = {
  getProducts
}

export default PRODUCTS;