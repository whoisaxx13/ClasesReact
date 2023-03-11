import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import LayoutPublic from "../layout/LayoutPublic";


export const router= createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />, 
    errorElement: <Error />,
    children: [
      {index:true, element: <Home />},
      {path: "/login",element: <Login />, },
    ]
  },
  
])