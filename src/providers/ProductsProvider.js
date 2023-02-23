import { createContext } from 'react'
import { useProducts } from '../hooks/products';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [products, fetched] = useProducts();

  return (
    <ProductsContext.Provider value={{ products, fetched }} >
      { props.children }
    </ProductsContext.Provider>
  )
}