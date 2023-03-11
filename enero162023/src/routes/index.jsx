import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import About from "../pages/About";
import Home from "../pages/Home";
import InfoPelix, { getMovie } from "../pages/InfoPelix";
import Peliculas, { getMostRatedMovies } from "../pages/Peliculas";

export const router= createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />, 
    errorElement: <Error />,
    children: [
      {index:true, element: <Home />},
      {path: "/peliculas",element: <Peliculas />, loader: getMostRatedMovies },
      {path: "/about",element: <About />},
      {path: "/infopeliculas",element: <InfoPelix />, loader: getMovie},
      {path: "/infopeliculas/:id",element: <InfoPelix />},
    ]
  },
  
])