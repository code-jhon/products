import React from 'react'

function ProductList() {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
  return (
    <div>ProductList</div>
  )
}

export default ProductList