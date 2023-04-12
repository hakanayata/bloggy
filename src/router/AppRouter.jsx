import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import MyBlogs from "../pages/MyBlogs";
import Footer from "../components/Footer";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="about" element={<About />} />
                <Route path="details/:id" element={<PrivateRouter />}>
                    <Route path="" element={<Details />} />
                </Route>
                <Route path="newblog" element={<PrivateRouter />}>
                    <Route path="" element={<NewBlog />} />
                </Route>
                <Route path="profile" element={<PrivateRouter />}>
                    <Route path="" element={<Profile />} />
                </Route>
                <Route path="myblogs" element={<PrivateRouter />}>
                    <Route path="" element={<MyBlogs />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
