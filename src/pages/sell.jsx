import SellForm from "../components/sell/sellForm"
import Navbar from "../components/navbar/navbar"
import { useContext, useEffect } from "react"
import userContext from "../context"
import { useNavigate } from "react-router-dom"

function Sell() {
  const navigate=useNavigate()
  const {logged}=useContext(userContext)
  useEffect(()=>{
    if(!logged){
      return navigate('/login')
    }
  })

  return (
    <>
      <Navbar/>
      <SellForm/>
    </>
  )
}

export default Sell
