// router.jsx
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import App from "./App";
import Portfolio from "./portfolio/Portfolio";
import Home from "./portfolio/pages/Home";
import About from "./portfolio/pages/About";
import Loading from "./portfolio/pages/Loading";
import Project from "./portfolio/pages/Project";
import Contact from "./portfolio/pages/Contact";
import Storybook from "./portfolio/pages/Storybook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate replace to="portfolio" />,
      },
      {
        path: "portfolio",
        // 注意：這裡如果只是個外殼，可以給一個簡單的組件包含 Outlet
        element: <Portfolio />, 
        children: [
          {
            index: true,
            element: <Navigate replace to="home" />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "about",
            element:<About />
          },
          {
            path: "project",
            element:<Project />
          },
          {
            path: "contact",
            element:<Contact />
          },
          {
            path: "Storybook",
            element:<Storybook />
          },
          {
            path: "Loading",
            element:<Loading />
          }
        ],
      },
    ],
  },
]);

export default router;
