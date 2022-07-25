import Posts from "../pages/Posts";
import About from "../pages/About";
import PostItem from "../pages/PostItem";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: "/posts", element: <Posts/>, exact: true, id: 1},
    {path: "/about", element: <About/>, exact: true, id: 2},
    {path: "/posts/:id", element: <PostItem/>, exact: true, id: 3},
]

export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true, id: 0},
]