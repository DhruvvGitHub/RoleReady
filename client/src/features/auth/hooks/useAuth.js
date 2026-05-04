import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { login, logout, register } from "../../services/auth.api"

export const useAuth = () => {
    const context = useContext(AuthContext)
    const {user, setUser, loading, setLoading} = context

    const handleLogin = async ({email, password}) => {
        setLoading(true)
        try {
            const data = await login({email, password})
    
            setUser(data.user)
            localStorage.setItem('isAuthenticated', 'true')
            
        } catch (err) {
            console.log(err);
            throw err;
        }
        finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({username, email, password}) => {
        setLoading(true)
        try {
            const data = await register({username, email, password})
            setUser(data.user)
            localStorage.setItem('isAuthenticated', 'true')
        } catch (err) {
            console.error("registration failed", err)
            throw err;
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
            localStorage.removeItem('isAuthenticated')
        } catch (err) {
            console.error("logout failed", err)
            throw err;
        } finally {
            setLoading(false)
        }
    }

    return {user, loading, handleLogin, handleRegister, handleLogout}
}