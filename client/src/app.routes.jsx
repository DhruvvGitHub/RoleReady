import {createBrowserRouter} from "react-router"
import {lazy, Suspense} from "react"
import Protected from "./features/auth/components/Protected"
import Loading from "./features/Loading"

const Login = lazy(() => import("./features/auth/pages/Login"))
const Register = lazy(() => import("./features/auth/pages/Register"))
const Home = lazy(() => import("./features/interview/pages/Home"))
const Interview = lazy(() => import("./features/interview/pages/Interview"))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected>
            <Suspense fallback={<Loading />}>
                <Home />
            </Suspense>
        </Protected>
    },
    {
        path: "/login",
        element: <Suspense fallback={<Loading />}><Login /></Suspense>
    },
    {
        path: "/register",
        element: <Suspense fallback={<Loading />}><Register /></Suspense>
    },
    {
        path: "/interview/:interviewId",
        element: <Protected>
            <Suspense fallback={<Loading />}>
                <Interview />
            </Suspense>
        </Protected>
    }
])