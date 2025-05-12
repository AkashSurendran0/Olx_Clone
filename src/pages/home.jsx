import Navbar from "../components/navbar/navbar"
import Categories from "../components/home/categories"
import Cards from "../components/home/cards"
import {collection, getDocs} from 'firebase/firestore'
import { db } from "../firebase"
import { useEffect, useState } from "react"

function Home() {
  const [products, setProducts]=useState()

  useEffect(()=>{
    const fetchProducts = async () =>{
      const productCollection=collection(db,'products')
      const querySnapshot=await getDocs(productCollection)
      const productList=querySnapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }))
      setProducts(productList)
    }
    fetchProducts()
  },[])

  return (
    <>
      <Navbar/>
      <Categories/>
      <Cards products={products}/>
    </>
  )
}

export default Home
