import './login.scss'
import { useState, useContext } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import userContext from '../../context'

function LoginForm() {
    const {changeLog}=useContext(userContext)
    const navigate=useNavigate()
    const [login, setLogin]=useState(true)
    const [signInDetails, setSignInDetails]=useState({
        email:'',
        password:''
    })
    const [signUpDetails, setSignUpDetails]=useState({
        email:'',
        password:'',
        confirmPassword:''
    })
    const toggleLogin = () =>{
        if(login) setLogin(false)
        else setLogin(true)
    }
    const handleSignInChange = (e) =>{
        setSignInDetails({
            ...signInDetails,
            [e.target.name]:e.target.value
        })
    }
    const handleSignUpChange = (e) =>{
        setSignUpDetails({
            ...signUpDetails,
            [e.target.name]:e.target.value
        })
    }
    const loginUser = () =>{
        if(signInDetails.email.trim()=='' || signInDetails.password.trim()==''){
            return toast.error('All fields required')
        }
        if(signInDetails.password.length<3){
            return toast.error('Password must be 3 characters long')
        }
        signInWithEmailAndPassword(auth, signInDetails.email, signInDetails.password)
        .then(()=>{
            toast.success('User logged In Successfully')
            changeLog()
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
            toast.error('User doesnt exist')
        })
    }
    const signupUser = () =>{
        if(signUpDetails.email.trim()=='' || signUpDetails.password.trim()=='' || signUpDetails.confirmPassword.trim()==''){
            return toast.error('All fields required')
        }
        if(signUpDetails.password != signUpDetails.confirmPassword){
            return toast.error('Passwords doesnt match')
        }
        createUserWithEmailAndPassword(auth, signUpDetails.email, signUpDetails.password)
        .then(()=>{
            toast.success('User created Successfully')
            changeLog()
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
            toast.error('Internal Server Error')
        })
    }

    return (
        <>
            { login &&
                <div className='loginForm'>
                    <h2>Login</h2>
                    <div>Email</div>
                    <input type="email" name='email' value={signInDetails.name} onChange={handleSignInChange}/>
                    <div>Password</div>
                    <input type="password" name='password' value={signInDetails.password} onChange={handleSignInChange}/>
                    <button onClick={loginUser}>Login</button>
                    <p className='toggleLink' onClick={toggleLogin}>New User?</p>
                </div>
            }
            { !login &&
                <div className='loginForm'>
                    <h2>Signup</h2>
                    <div>Email</div>
                    <input type="email" name='email' value={signUpDetails.name} onChange={handleSignUpChange}/>
                    <div>Password</div>
                    <input type="password" name='password' value={signUpDetails.password} onChange={handleSignUpChange}/>
                    <div>Confirm Password</div>
                    <input type="password" name='confirmPassword' value={signUpDetails.confirmPassword} onChange={handleSignUpChange}/>
                    <button onClick={signupUser}>Sign Up</button>
                    <p className='toggleLink' onClick={toggleLogin}>Already have a account?</p>
                </div>
            }
        </>
    )
}

export default LoginForm
