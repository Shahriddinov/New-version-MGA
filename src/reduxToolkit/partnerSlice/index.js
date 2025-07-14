import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {GET_ALL_PARTNER} from "../../serves/api/utilis";

export const getPartner = createAsyncThunk("partner/get", async () => {
    return await axios.get(GET_ALL_PARTNER, {
        headers:{
            
            'accept': 'application/json'
        }
    }).then((res) => res.data);
});
