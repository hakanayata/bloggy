import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",
    initialState: {
        blogs: [],
        categories: [],
        details: [],
        loading: false,
        error: false,
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        getSuccess: (state, { payload: { data, url } }) => {
            state.loading = false;
            if (url === "blogs") {
                state[url] = data.sort(
                    (a, b) =>
                        new Date(b.publish_date) - new Date(a.publish_date)
                );
            } else {
                state[url] = data;
            }
        },
        getSuccessDetails: (state, { payload: { data } }) => {
            state.loading = false;
            state.details = data;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
    },
});

export const {
    fetchStart,
    getSuccess,
    getSuccessDetails,
    fetchFail,
} = blogSlice.actions;

export default blogSlice.reducer;
