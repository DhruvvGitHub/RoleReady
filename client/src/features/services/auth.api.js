import { api } from "./api";

export async function register({username, email, password}) {
    try {
        const response = await api.post("/api/auth/register", {
        username,
        email,
        password
    })

    return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function login({ email, password}) {
    try {
        const response = await api.post("/api/auth/login", {
        email,
        password
    })

    return response.data
    } catch (error) {
        console.log(error);
    }
}

export async function logout() {
    try {
        const response = await api.get("/api/auth/logout")
        return response.data
    } catch (error) {
        // most common case is 401 when no cookie/token is present;
        // just return null so callers know there's no logged-in user.
        console.warn("getMe error", error.response?.status || error.message)
        return null
    }
}

export async function getMe() {
    try {
        const response = await api.get("/api/auth/get-me")

    return response.data
    } catch (error) {
        console.log(error);
    }
}