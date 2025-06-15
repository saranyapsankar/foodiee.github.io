import { createSlice } from '@reduxjs/toolkit';

// Check for existing token and user data in localStorage
const token = localStorage.getItem('token');
const storedUser = localStorage.getItem('user');

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  isAuthenticated: !!token,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer; 