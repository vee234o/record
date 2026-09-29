import { createSlice } from '@reduxjs/toolkit';

type UserState = {
    name: string;
    email: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    name: '',
    email: '',
    isLoggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:(state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        logoutUser:(state) => {
            state.name = '';
            state.email = '';
            state.isLoggedIn = false;
        }
    }
})

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;