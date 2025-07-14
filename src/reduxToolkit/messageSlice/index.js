import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {  SEND_CONTACT, SEND_EMAIL } from "../../serves/api/utilis";


export const sendContact = createAsyncThunk(
    "sendContact",
    async (payload) => {
    const csrfToken = "MAo42cCfVYMocIXkPgrcKipQz06E8ZPMS7tunlhrsqalDHrwsqlZUwmoUb4MWtGs";

    try {
      const response = await axios.post(SEND_CONTACT, payload, {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "X-CSRFTOKEN": csrfToken
        }
      });

      return response.data;
    } catch (error) {
      console.error("Server error:", error.response?.data || error.message);
      throw error;
    }
  }
);


export const sendEmail = createAsyncThunk(
  "sendEmail",
  async (payload) => {
    const csrfToken = "MAo42cCfVYMocIXkPgrcKipQz06E8ZPMS7tunlhrsqalDHrwsqlZUwmoUb4MWtGs";

    try {
      const response = await axios.post(SEND_EMAIL, payload, {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "X-CSRFTOKEN": csrfToken
        }
      });

      return response.data;
    } catch (error) {
      console.error("Server error:", error.response?.data || error.message);
      throw error;
    }
  }
);
