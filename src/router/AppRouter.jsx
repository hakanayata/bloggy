import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                {/* <Route path="blogs" element={<PrivateRouter />}>
                    <Route path="" element={<Dashboard />}>
                        <Route index element={<Home />} />
                    </Route>
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}
