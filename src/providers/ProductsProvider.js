import { useState, createContext } from 'react'
import { useProducts } from '../hooks/products';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [products, fetched] = useProducts()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productDetail, setProductDetail] = useState({})

  const contextProps = {
    productDetail, setProductDetail,
    isModalOpen, setIsModalOpen,
    products, fetched
  }

  return (
    <ProductsContext.Provider value={{ ...contextProps }} >
      { props.children }
    </ProductsContext.Provider>
  )
}