import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
    fetchStart,
    getSuccess,
    getSuccessDetails,
    fetchFail,
} from "../features/blogSlice";
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

    const getBlogsDetails = async (url, id) => {
        dispatch(fetchStart());
        try {
            const { data } = await axiosWithToken.get(`api/${url}/${id}/`);
            dispatch(getSuccessDetails({ data }));
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

    const deleteBlog = async (url, id) => {
        dispatch(fetchStart());
        try {
            await axiosWithToken.delete(`api/${url}/${id}/`);
            toastSuccessNotify("Blog succesfully deleted!");
            getBlogsData(url);
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify(
                "Error! Couldn't delete the blog post. Please try again!"
            );
        }
    };

    const updateBlog = async (id, info) => {
        dispatch(fetchFail);
        try {
            axiosWithToken.put(`api/blogs/${id}/`, info);
            toastSuccessNotify("Blog post updated successfully!");
            // getBlogsData("blogs");
            getBlogsDetails("blogs", id);
        } catch (error) {
            console.log(error);
            dispatch(fetchFail());
            toastErrorNotify("Could not update blog post. Try again later.");
        }
    };

    return {
        getBlogsData,
        getBlogsDetails,
        postBlogData,
        deleteBlog,
        updateBlog,
    };
};

export default useBlogCalls;
