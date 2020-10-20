import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  users: [],
  selectedUser: {
    id: '',
    username: '',
  },
  moreState: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    getUsers: (state, action) => ({
      ...state,
      users: action.payload
    }),
  },
});

export const {
  getUsers,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
