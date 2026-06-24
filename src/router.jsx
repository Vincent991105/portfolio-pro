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
import TYbridge from "./TYbridge/TYbridge";
import BridgeMonitor from "./TYbridge/pages/BridgeMonitor";
import ListPage from "./TYbridge/pages/ListPage";
import BridgeData from "./TYbridge/pages/BridgeData";
import JYairport from "./JYairport/JYairport";
import JYrealtime from "./JYairport/pages/JYrealtime";
import Puppyfarm from "./Puppyfarm/Puppyfarm";
import PuppyList from "./Puppyfarm/pages/PuppyList";
import JYRealResult from "./JYairport/pages/JYRealResult";
import EditMission from "./JYairport/pages/EditMission";
import JYUnknownData from "./JYairport/components/JYUnknownData";
import JYMissionResult from "./JYairport/pages/JYMissionResult";
import XProject from "./XProject/XProject";
import LandingPage from "./XProject/pages/LandingPage";
import AddAgentPage from "./XProject/pages/AddAgentPage";
import IntelPage from "./XProject/pages/IntelPage";
import MobileArchivePage from "./XProject/pages/MobileArchivePage";
import AdminGate from "./XProject/pages/AdminGate";
import AgentDetailWrapper from "./XProject/pages/AgentDetailWrapper";
import AdminGateWrapper from "./XProject/pages/AdminGateWrapper";
import AdminLogin from "./XProject/pages/AdminLogin";
import AdminForget from "./XProject/pages/AdminForget";
import AdminRegister from "./XProject/pages/AdminRegister";
import PuppyColorSet from "./XProject/pages/PuppyColorSet";
import PersonalityTest from "./XProject/pages/PersonalityTest";

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
          // {
          //   path: "Storybook",
          //   element:<Storybook />
          // },
          {
            path: "Loading",
            element:<Loading />
          }
        ],
      },
      {
        path: "TYbridge",
        // 注意：這裡如果只是個外殼，可以給一個簡單的組件包含 Outlet
        element: <TYbridge />, 
        children: [
          {
            index: true,
            element: <Navigate replace to="bridge" />,
          },
          {
            path: "bridge",
            element: <BridgeMonitor />,
            children: [
              {
                path: "home",
                element: <ListPage />,
              },
              {
                path: ":bid",
                element: <BridgeData />,
              },
            ],
          },
        ],
      },
      {
        path: "JYairport",
        // 注意：這裡如果只是個外殼，可以給一個簡單的組件包含 Outlet
        element: <JYairport />, 
        children: [
          // {
          //   index: true,
          //   element: <Navigate replace to="bridge" />,
          // },
          {
            path: "JYrealtime",
            element: <JYrealtime />,
          },
          {
            path: "JYRealResult",
            element: <JYRealResult />,
            children: [
              {
                index: true, 
                element: <JYUnknownData text="請從左側列表選擇一項任務以查看詳情" />,
              },
              {
                path: ":id",
                element: <EditMission />,
              },
            ]
          },
          {
            path: "JYMissionResult",
            element: <JYMissionResult />,
          },
        ],
      },
      {
        path: "Puppyfarm",
        // 注意：這裡如果只是個外殼，可以給一個簡單的組件包含 Outlet
        element: <Puppyfarm />, 
        children: [
          {
            path: "PuppyList",
            element: <PuppyList />,
          },
        ],
      },
      {
        path: "XProject",
        element: <XProject />,
        children: [
          { index: true, element: <LandingPage /> }, // 預設首頁
          { path: "intel", element: <IntelPage /> },    // 2-1 說明首頁 (行動簡報)
          { path: "archive", element: <MobileArchivePage /> },
          // 關鍵：定義動態路由，用於呈現特工詳情
          { path: "archive/:agentId", element: <AgentDetailWrapper /> }, 
          { 
            path: "admin", 
            element: <AdminGateWrapper />,
            children: [
              {
                index: true,
                element: <Navigate replace to="login" />,
              },
              { path: "login", element: <AdminLogin /> },
              { path: "register", element: <AdminRegister /> },
              { path: "recover", element: <AdminForget /> },
              { path: "createpuppy", element: <PuppyColorSet /> },
              { path: "PersonalityTest", element: <PersonalityTest /> },
            ]
          },
        ]
      },
      {
        path: "AddAgentPage",
        // 注意：這裡如果只是個外殼，可以給一個簡單的組件包含 Outlet
        element: <AddAgentPage />, 
      },
    ],
  },
]);

export default router;
