import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchStart, getSuccess, fetchFail } from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCalls = () => {
    const dispatch = useDispatch();
    const { axiosPublic, axiosWithToken } = useAxios();

    const getBlogsData = async (url) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosPublic.get(`api/${url}/`);
            dispatch(getSuccess({ url, data }));
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Couldn't fetch data!");
        }
    };

    const postBlogData = async (url, info) => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.post(`api/${url}/`, info);
            toastSuccessNotify("New blog posted!");
            getBlogsData(url);
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Error! Please try again");
        }
    };

    return { getBlogsData, postBlogData };
};

export default useBlogCalls;
