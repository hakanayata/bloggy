import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        currentUser: null,
        loading: false,
        error: false,
        token: null,
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = false;
        },
        fetchFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        loginSuccess: (state, { payload }) => {
            state.loading = false;
            state.currentUser = payload.user;
            state.error = false;
            state.token = payload?.key;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
        registerSuccess: (state, { payload }) => {
            state.currentUser = payload.user;
            state.loading = false;
            state.error = false;
            state.token = payload?.token;
        },
    },
});

export const {
    fetchStart,
    fetchFail,
    loginSuccess,
    logoutSuccess,
    registerSuccess,
} = authSlice.actions;

export default authSlice.reducer;
