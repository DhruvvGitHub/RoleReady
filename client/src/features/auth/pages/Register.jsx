import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from "../hooks/useAuth"

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
            <main><h1>Loading...</h1></main>
        )
    }

  return (
        <main>
        <div className='form-container min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'>
            <div className='min-w-md flex flex-col gap-3 rem'>
                <h1 className='text-3xl font-bold'>Register </h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2 rem'>
                    <div className='input-group flex flex-col gap-1 rem'>
                    <label htmlFor="email" className='text-lg'>Username</label>
                    <input onChange={(e) => {
                        setUsername(e.target.value)
                    }} type="text" id='username' name='username' placeholder='Enter username'autoComplete='off' className='p-2 bg-zinc-300 text-black rounded-lg outline-none' />
                    </div>
                    <div className='input-group flex flex-col gap-1 rem'>
                    <label htmlFor="email" className='text-lg'>Email</label>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} type="text" id='email' name='email' placeholder='Enter email'autoComplete='off' className='p-2 bg-zinc-300 text-black rounded-lg outline-none' />
                    </div>
                    <div className='input-group flex flex-col gap-1 rem'>
                        <label htmlFor="password"  className='text-lg'>Password</label>
                        <input onChange={(e) => {
                            setPassword(e.target.value)
                        }} type="text" id='password' name='password' placeholder='Enter password' autoComplete='off' className='p-2 bg-zinc-300 text-black rounded-lg outline-none' />
                    </div>
                </div>
                <button className='px-4 py-2 bg-green-600 rounded-xl cursor-pointer mt-4 transform transition-transform duration-200 active:scale-110'>Register</button>
            </form>
            <p>Already have an account? <Link to="/login" className='text-green-600'>Login</Link></p>
            </div>
        </div>
    </main>
  )
}

export default Register