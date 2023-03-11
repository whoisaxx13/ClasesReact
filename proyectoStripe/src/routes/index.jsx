import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Payment from "../pages/Payment";
import LayoutPublic from "../layout/LayoutPublic";



export const router= createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />, 
    errorElement: <Error />,
    children: [
      {index: true, element: <Home />},
      {path: "/payment",element: <Payment />, },
    ]
  },
  
])