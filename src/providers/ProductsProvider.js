import { useState, useEffect, createContext } from 'react'
import { useProducts } from '../hooks/products';

export const ProductsContext = createContext();

export const ProductsProvider = props => {
  const [fetchedProducts, fetched] = useProducts()
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [productDetail, setProductDetail] = useState({})
  const [searchStr, setSearchStr] = useState('')

  const search = () => {
    const filteredItems = fetchedProducts.filter(
      product => (
        product.category.toLowerCase().includes(searchStr.toLowerCase())
        || product.title.toLowerCase().includes(searchStr.toLowerCase())
        || product.description.toLowerCase().includes(searchStr.toLowerCase())
      )
    )

    setProducts(filteredItems)
  }

  useEffect(() => {fetched && setProducts([...fetchedProducts])}, [fetched])

  useEffect(() => {searchStr.length !== 0 ? search() : setProducts([...fetchedProducts])}, [searchStr])

  const contextProps = {
    productDetail, setProductDetail,
    isModalOpen, setIsModalOpen,
    products, fetched,
    searchStr, setSearchStr
  }

  return (
    <ProductsContext.Provider value={{ ...contextProps }} >
      { props.children }
    </ProductsContext.Provider>
  )
}