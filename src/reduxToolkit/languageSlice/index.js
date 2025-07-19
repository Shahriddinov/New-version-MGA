import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: typeof window !== 'undefined' && localStorage.getItem("language")
        ? localStorage.getItem("language")
        : "en",
};

const languageSlice = createSlice({
    name: "languageSlice",
    initialState,
    reducers: {
        languageChange: (state, { payload }) => {
            if (typeof window !== 'undefined') {
                localStorage.setItem("language", payload);
            }
            state.language = payload;
        },
    },
});

export const { languageChange } = languageSlice.actions;

export default languageSlice.reducer;
