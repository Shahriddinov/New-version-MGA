import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { GET_ALL_GALLERY } from "../../serves/api/utilis";

export const getGallery = createAsyncThunk("gallery/get", async () => {
    return await axios.get(GET_ALL_GALLERY, {
        headers:{
           'accept': 'application/json'
        }
    }).then((res) => res.data);
});
