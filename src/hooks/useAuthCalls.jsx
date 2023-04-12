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

    const login = async (userInfo, path = null) => {
        dispatch(fetchStart());
        try {
            // payload: username, email, password
            const { data } = await axios.post(
                `${BASE_URL}users/auth/login/`,
                userInfo
            );
            dispatch(loginSuccess(data));
            toastSuccessNotify("Logged in!");
            // navigate(-1);
            navigate(`/`);
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            if (
                error.response.data.non_field_errors?.[0] ===
                "Unable to log in with provided credentials."
            ) {
                toastErrorNotify("Wrong email or password!");
            } else {
                toastErrorNotify("Error! Please try again later!");
            }
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
            dispatch(fetchFail());
            console.log(error);
            if (
                error.response.data.username?.[0] ===
                "A user with that username already exists."
            ) {
                toastErrorNotify("This username already exists!");
            } else if (
                error.response.data.email?.[0] === "This field must be unique."
            ) {
                toastErrorNotify("Email must be unique!");
            } else {
                toastErrorNotify("Register failed! Try again later.");
            }
        }
    };

    return { login, logout, register };
};

export default useAuthCalls;
