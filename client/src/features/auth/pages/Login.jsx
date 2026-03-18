import React, { useState } from 'react'
import { useNavigate } from "react-router"
import { Link } from 'react-router'
import { useAuth } from "../hooks/useAuth"     // <– import the hook
import Loading from '../../Loading'

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
            <Loading />
        )
    }

  return (
    <main>
        <div className='form-container min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'>
            <div className='min-w-md flex flex-col gap-2 rem'>
                <h1 className='text-3xl font-bold text-emerald-400'>Login</h1>
                <p className='text-sm text-slate-300 mb-4'>into an existing account</p>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2 rem'>
                    <div className='input-group flex flex-col gap-1 rem'>
                    <label htmlFor="email" className='text-lg'>Email</label>
                    <input onChange={(e) => {setEmail(e.target.value)}} type="text" id='email' name='email' placeholder='Enter email' autoComplete='off' className='p-2 border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 rounded-md' />
                </div>
                <div className='input-group flex flex-col gap-1 rem'>
                    <label htmlFor="password" className='text-lg'>Password</label>
                    <input onChange={(e) => {setPassword(e.target.value)}}  type="text" id='password' name='password' placeholder='Enter password' autoComplete='off' className='p-2 border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 rounded-md' />
                </div>
                </div>
                <button className='px-4 py-2 bg-emerald-400 rounded-xl cursor-pointer mt-4 transform transition-transform duration-200 active:scale-110 text-zinc-900'>Login</button>
            </form>
            <p className='text-slate-300 '>Don't have an account? <Link to="/register" className='text-emerald-400'>Register</Link></p>
            </div>
        </div>
    </main>
  )
}

export default Login