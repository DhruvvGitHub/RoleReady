import { createContext, useEffect, useState } from "react";
import { getMe } from "../services/auth.api";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAndSetUser = async () => {
            if (localStorage.getItem('isAuthenticated') !== 'true') {
                setLoading(false)
                return
            }

            try {
                const data = await getMe()
                if (data && data.user) {
                    setUser(data.user)
                } else {
                    localStorage.removeItem('isAuthenticated')
                }
            } catch (err) {
                console.log("getMe failed", err.message || err)
                localStorage.removeItem('isAuthenticated')
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()
    },[])

    return (
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}
