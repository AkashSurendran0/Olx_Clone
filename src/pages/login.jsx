import LoginForm from "../components/login/loginForm"
import Navbar from "../components/navbar/navbar"
import { useContext, useEffect } from "react"
import userContext from "../context"
import { useNavigate } from "react-router-dom"

function Login() {
  const {logged}=useContext(userContext)
  const navigate=useNavigate()
  useEffect(()=>{
    console.log(logged)
    if(logged){
      return navigate('/')
    }
  })
  
  return (
    <>
      <Navbar/>
      <LoginForm/>
    </>
  )
}

export default Login
