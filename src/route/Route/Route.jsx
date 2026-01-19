import NotFound from "../../components/Shared/NotFound/NotFound";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Main from "../../layout/Main/Main";
import { createBrowserRouter } from "react-router-dom";




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
            }
        ]
    },{
        path: "*",
        element: <NotFound></NotFound>
    }
])
export default router;