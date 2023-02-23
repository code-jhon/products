import { useState, createContext } from 'react'
import { useProducts } from '../hooks/products';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [products, fetched] = useProducts()
  const [isModalEnabled, setIsModalEnabled] = useState(false)

  return (
    <ProductsContext.Provider value={{ products, fetched, isModalEnabled, setIsModalEnabled }} >
      { props.children }
    </ProductsContext.Provider>
  )
}