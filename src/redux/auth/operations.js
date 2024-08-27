import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const setAuthToken = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  goitApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goitApi.post("/users/logout");

    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue("Token is not exist!");
    }
    try {
      setAuthToken(savedToken);
      const response = await goitApi.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
