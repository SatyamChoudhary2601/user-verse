import "./App.css";
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserDetail from "./pages/UserDetail";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";
import { useContext, useEffect } from "react";
import { UserContext } from "./context";


function App() {
  const { loading, setUserFromLocalStorage } = useContext(UserContext)
  useEffect(() => {
    setUserFromLocalStorage()
  }, [])
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    {
      path: "/user", element: <Layout />,
      children: [
        { path: "profile", element: <UserDetail /> },
        { path: "posts", element: <Posts /> },
        { path: "gallery", element: <Gallery /> },
        { path: "todo", element: <Todo /> },
      ]
    },
  ])
  return (
    <div className='app'>
      {loading ? <h1>Loading........</h1> :
        <RouterProvider router={router} />
      }
    </div>
  );
}

export default App;
