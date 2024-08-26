import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:{
        name: '',
        email: '',
    },
    token: null,
    isLoggedIn: false,
}

const slice = createSlice({
    name: 'auth',
    initialState,
})

export const authReducer = slice.reducer;