import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'
import Loading from '../../Loading'
import Navbar from '../../../components/Navbar'

const Protected = ({children}) => {

    const {loading, user} = useAuth()

    if(loading) {
        return (
            <Loading />
        )
    }

    if(!user) {
        return <Navigate to={"/login"} />
    }

  return (
    <>
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
    </>
  )
}

export default Protected