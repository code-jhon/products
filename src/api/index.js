// Retrieve data function
const retrieveData = (url) => {
  const data = fetch(url)
  .then(response => response.json())
  .then(data => data)

  return data;
}

// Get products data from fakeapi
const getProducts = () => {
  return retrieveData(`${process.env.API}/products`)
}

// encapsulated methods
const PRODUCTS = {
  getProducts
}

export default PRODUCTS;