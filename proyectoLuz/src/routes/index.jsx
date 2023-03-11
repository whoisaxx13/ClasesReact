import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LayoutPublic from "../layout/LayoutPublic";
import Error from "../pages/Error";
import Login from "../pages/Login";


export const router= createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic  />, 
    errorElement: <Error />,
    children: [
      {index:true, element: <Home />},
      {path: "/login",element: <Login />},
    ]
  },
  
])