import NavBar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <>
      <NavBar />
      <ProductList />
      <ProductDetails />
    </>
  )
}