import axios from "axios";
import {
    fetchFail,
    fetchStart,
    loginSuccess,
    logoutSuccess,
    registerSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const BASE_URL = "https://34112.fullstack.clarusway.com/";

    const login = async (userInfo) => {
        dispatch(fetchStart());
        try {
            // payload: username, email, password
            const { data } = await axios.post(
                `${BASE_URL}users/auth/login/`,
                userInfo
            );
            dispatch(loginSuccess(data));
            toastSuccessNotify("Signed in!");
            navigate(-2);
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Post failed!");
        }
    };

    const logout = async () => {
        dispatch(fetchStart());
        try {
            await axios.post(`${BASE_URL}users/auth/logout/`);
            dispatch(logoutSuccess());
            toastSuccessNotify("Logged out!");
            navigate("/");
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Logout failed!");
        }
    };

    const register = async (userInfo) => {
        dispatch(fetchStart());
        try {
            // payload: username, first_name, last_name, email, image, bio, password, password2
            const { data } = await axios.post(
                `${BASE_URL}users/register/`,
                userInfo
            );
            dispatch(registerSuccess(data));
            toastSuccessNotify("Signed up succesfully!");
            navigate("/");
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Error while signing up!");
        }
    };

    return { login, logout, register };
};

export default useAuthCalls;
