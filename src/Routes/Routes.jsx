import {
    createBrowserRouter,
   
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../components/Pages/Home/Home/Home";
import ErrorPage from "../components/Pages/Shared/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    },
]);
