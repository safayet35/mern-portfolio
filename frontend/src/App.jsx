import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Error from "./pages/Error.jsx";
import Explore from "./pages/Explore.jsx";
import Experience from "./pages/Experience.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";
import Feed from "./pages/Feed.jsx";
import Thoughts from "./pages/Thoughts.jsx";
import Stack from "./pages/Stack.jsx";
import Contact from "./pages/Contact.jsx";
import ProtectedPage from "./components/ProtectedPage.jsx";
import ChatBot from "./components/ChatBot.jsx";
// dashboard pages
import LatestDrops from "./pages/dashboardpages/LatestDrops.jsx";
import FeedPost from "./pages/dashboardpages/FeedPost.jsx";

import Messages from "./pages/dashboardpages/Messages.jsx";
import DashboardProjects from "./pages/dashboardpages/DashboardProjects.jsx";
import ProfilePage from "./pages/dashboardpages/ProfilePage.jsx";
import { useAuth } from "./context/AuthContext.jsx";
import { useRefresh } from "./hooks/useRefresh.js";

function App() {
  const { setToken } = useAuth();
  const { mutate } = useRefresh();
  useEffect(() => {
    const getNewAccessToken = () => {
      mutate();
    };

    getNewAccessToken();
  }, []);

  //setToken(newToken);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />
        },
        {
          path: "/explore",
          element: <Explore />
        },
        {
          path: "/experience",
          element: <Experience />
        },
        {
          path: "/projects",
          element: <ProjectPage />
        },
        {
          path: "/service",
          element: <Service />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/feed",
          element: <Feed />
        },
        {
          path: "/thoughts",
          element: <Thoughts />
        },
        {
          path: "/stack",
          element: <Stack />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/login",
          element: <Login />
        },

        {
          path: "/chatbot",
          element: <ChatBot />
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedPage>
              <Dashboard />
            </ProtectedPage>
          )
        },
        {
          path: "/dashboard/latestdrops",
          element: (
            <ProtectedPage>
              <LatestDrops />
            </ProtectedPage>
          )
        },
        {
          path: "/dashboard/feedposts",
          element: (
            <ProtectedPage>
              <FeedPost />
            </ProtectedPage>
          )
        },
        {
          path: "/dashboard/profile-update",
          element: (
            <ProtectedPage>
              <ProfilePage />
            </ProtectedPage>
          )
        },
        {
          path: "/dashboard/messages",
          element: (
            <ProtectedPage>
              <Messages />
            </ProtectedPage>
          )
        },
        {
          path: "/dashboard/projects",
          element: (
            <ProtectedPage>
              <DashboardProjects />
            </ProtectedPage>
          )
        },
        {
          path: "*",
          element: <Error />
        }
      ]
    }
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
