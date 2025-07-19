import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_SERVICES } from "../../serves/api/utilis";

export const getServices = createAsyncThunk("services/get", async () => {
  const language = localStorage.getItem('language') || 'en';

  const response = await axios.get(`${GET_SERVICES}?lang=${language}`, {
    headers: {
      'accept': 'application/json',
    }
  });


  return response.data;
});
