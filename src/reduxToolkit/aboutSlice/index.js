import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_ABOUTS } from "../../serves/api/utilis";

export const getAbout = createAsyncThunk("abouts/get", async () => {
    return await axios.get(GET_ABOUTS, {
        headers:{
            'language': localStorage.getItem('language')
        }
    }).then((res) => res.data);
});
