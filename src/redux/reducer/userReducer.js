import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: null,
    useEmail: null,
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {

    }
});

export const {

} = userReducer.actions
export default userReducer.reducer