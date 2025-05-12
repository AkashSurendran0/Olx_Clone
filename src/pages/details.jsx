import Navbar from "../components/navbar/navbar"
import { useLocation } from "react-router-dom"
import ProductDetails from "../components/details/product-details"

function Details() {
  const location=useLocation()
  const product=location.state

  return (
    <>
      <Navbar/>
      <ProductDetails product={product} />
    </>
  )
}

export default Details
