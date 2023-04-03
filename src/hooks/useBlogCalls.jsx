import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchStart, getSuccess, fetchFail } from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCalls = () => {
    const dispatch = useDispatch();
    const { axiosPublic, axiosWithToken } = useAxios();

    const getBlogsData = async () => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosPublic.get(`api/blogs/`);
            dispatch(getSuccess({ data }));
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Couldn't fetch data!");
        }
    };

    return { getBlogsData };
};

export default useBlogCalls;
