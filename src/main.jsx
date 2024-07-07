import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './componets/index.js'
import Home from './pages/Home.jsx'
import AddPost from "./pages/AddPost.jsx";
import Signup from './pages/Signup.jsx'
import EditPost from "./pages/EditPost.jsx";
import FeaturesPage from './componets/Features.jsx'
import AboutPage from './componets/About.jsx'
import Post from "./pages/Post.jsx";
import Contact from "./componets/Contact.jsx"

import Myposts from "./pages/Mypost.jsx"
import AllPosts from "./pages/AllPosts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/features",
            element: (
                
                    <FeaturesPage />
               
            ),
        },
        {
            path: "/about",
            element: (
                
                    <AboutPage />
               
            ),
        },
        {
            path: "/contact",
            element: (
                
                    <Contact />
               
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/My-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <Myposts />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
