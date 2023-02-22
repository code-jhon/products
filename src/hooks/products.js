import { useState, useEffect } from "react";
import PRODUCTS from "../api";

export const useProducts = () => {
  const [products, setProducts] = useState({})
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const data = await PRODUCTS.getProducts()
      setProducts(data)
      setFetched(true)
    }
  } ,[]);

  return [products, fetched];
}
