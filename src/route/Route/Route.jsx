import NotFound from "../../components/Shared/NotFound/NotFound";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Main from "../../layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import Services from "../../pages/Services/Services";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>
            },
            {
                path: "/sign-In",
                element: <SignIn></SignIn>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])
export default router;