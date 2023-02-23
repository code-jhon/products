// Retrieve data function
const retrieveData = async (url) => {
  return fetch(url)
  .then(resp => resp.json())
  .then(data => data)
}

// Get products data from fakeapi
const getProducts = () => {
  return retrieveData(`https://fakestoreapi.com/products`)
}

// encapsulated methods
const PRODUCTS = {
  getProducts
}

export default PRODUCTS;