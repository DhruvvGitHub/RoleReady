import React, { useState } from 'react'
import { useNavigate } from "react-router"
import { Link } from 'react-router'
import { useAuth } from "../hooks/useAuth"     // <– import the hook

const Login = () => {
  const { handleLogin, loading } = useAuth()   // <– call it here


    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin({email, password})
        navigate("/")
    }

    if(loading) {
        return (
            <main>Loading...</main>
        )
    }

  return (
    <main>
        <div className='form-container min-h-screen w-full flex items-center justify-center'>
            <div className='min-w-md flex flex-col gap-3 rem'>
                <h1 className='text-3xl font-bold'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2 rem'>
                    <div className='input-group flex flex-col gap-1 rem'>
                    <label htmlFor="email" className='text-lg'>Email</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="text" id='email' name='email' placeholder='Enter email' autoComplete='off' className='p-2 bg-zinc-300 text-black rounded-lg outline-none' />
                </div>
                <div className='input-group flex flex-col gap-1 rem'>
                    <label htmlFor="password" className='text-lg'>Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}}  type="text" id='password' name='password' placeholder='Enter password' autoComplete='off' className='p-2 bg-zinc-300 text-black rounded-lg outline-none' />
                </div>
                </div>
                <button className='px-4 py-2 bg-green-600 rounded-xl cursor-pointer mt-4 transform transition-transform duration-200 active:scale-110'>Login</button>
            </form>
            <p>Don't have an account? <Link to="/register" className='text-green-600'>Register</Link></p>
            </div>
        </div>
    </main>
  )
}

export default Login