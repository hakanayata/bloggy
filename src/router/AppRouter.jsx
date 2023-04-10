import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";

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
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
