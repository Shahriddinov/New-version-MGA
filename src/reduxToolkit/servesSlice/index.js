import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_SERVICES } from "../../serves/api/utilis";

export const getServices = createAsyncThunk("services/get", async () => {
  const lang = localStorage.getItem('language') || 'en';

  const response = await axios.get(`${GET_SERVICES}?lang=${lang}`, {
    headers: {
      'accept': 'application/json'
    }
  });

  return response.data;
});
