import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from "../hooks/useAuth"
import Loading from '../../Loading';

const Register = () => {

    const {handleRegister, loading} = useAuth();

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username, email, password})
        navigate("/")
    }

    if(loading) {
        return (
            <Loading />
        )
    }

  return (
    <main>
        <div className='form-container min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-2 sm:p-4'>
            <div className='w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex flex-col gap-1 sm:gap-2'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 text-center'>Register</h1>
                <p className='text-xs sm:text-sm text-slate-300 mb-2 sm:mb-4 text-center'>create a new account</p>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1 sm:gap-2'>
                    <div className='input-group flex flex-col gap-1'>
                        <label htmlFor="username" className='text-base sm:text-lg'>Username</label>
                        <input onChange={(e) => { setUsername(e.target.value) }} type="text" id='username' name='username' placeholder='Enter username' autoComplete='username' className='w-full p-2 border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 rounded-md' />
                    </div>
                    <div className='input-group flex flex-col gap-1'>
                        <label htmlFor="email" className='text-base sm:text-lg'>Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} type="email" id='email' name='email' placeholder='Enter email' autoComplete='email' className='w-full p-2 border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 rounded-md' />
                    </div>
                    <div className='input-group flex flex-col gap-1'>
                        <label htmlFor="password" className='text-base sm:text-lg'>Password</label>
                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" id='password' name='password' placeholder='Enter password' autoComplete='new-password' className='w-full p-2 border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40 rounded-md' />
                    </div>
                </div>
                <button className='w-full px-4 py-3 bg-emerald-400 rounded-xl cursor-pointer mt-3 sm:mt-4 transform transition-all duration-200 hover:bg-emerald-500 active:scale-105 text-zinc-900 font-semibold text-sm sm:text-base'>Register</button>
            </form>
            <p className='text-slate-300 text-center mt-3 sm:mt-4 text-xs sm:text-sm'>Already have an account? <Link to="/login" className='text-emerald-400 hover:text-emerald-300 transition-colors'>Login</Link></p>
            </div>
        </div>
    </main>
  )
}

export default Register