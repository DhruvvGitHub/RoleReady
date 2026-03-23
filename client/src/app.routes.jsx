import {createBrowserRouter} from "react-router"
import {lazy, Suspense} from "react"
import Protected from "./features/auth/components/Protected"

const Login = lazy(() => import("./features/auth/pages/Login"))
const Register = lazy(() => import("./features/auth/pages/Register"))
const Home = lazy(() => import("./features/interview/pages/Home"))
const Interview = lazy(() => import("./features/interview/pages/Interview"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected>
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        </Protected>
    },
    {
        path: "/login",
        element: <Suspense fallback={<div>Loading...</div>}><Login /></Suspense>
    },
    {
        path: "/register",
        element: <Suspense fallback={<div>Loading...</div>}><Register /></Suspense>
    },
    {
        path: "/interview/:interviewId",
        element: <Protected>
            <Suspense fallback={<div>Loading...</div>}>
                <Interview />
            </Suspense>
        </Protected>
    }
])