import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import HomePage from "./routes/HomePage.jsx";
import PostListPage from "./routes/PostListPage.jsx";
import WritePage from './routes/WritePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/Registerpage.jsx';
import MainLayout from './layouts/MainLayout.jsx';

const router = createBrowserRouter([
{
  element:<MainLayout/>,
  children:[
      {
    path: "/",
    element: <HomePage/ >,
  },
  {
    path: "/:slug",
    element: <PostListPage/ >,
  },
  {
    path: "/Write ",
    element: <WritePage/ >,
  },
  {
    path: "/Login",
    element: <LoginPage/ >,
  },
  {
    path: "/:slug",
    element: <  RegisterPage/ >,
  }  ]
    
}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>

)