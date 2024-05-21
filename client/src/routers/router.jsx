import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from '../App.jsx';
import Home from '../pages/home/Home.jsx';
import Shop from '../pages/shop/Shop.jsx';
import Blog from '../pages/blog/Blog.jsx';
import About from '../pages/about/About.jsx';
import SingleBook from '../components/onetimeuse/book-information/SingleBook.jsx';

const router = createBrowserRouter([
   {
    path: "/",
    element: <App/>,
    children : [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/shop",
        element: <Shop/>

    },
    {
        path: "/blog",
        element: <Blog/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
    }
    ]
   },
]);
export default router;
