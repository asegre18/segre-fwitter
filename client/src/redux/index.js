import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const INITIAL_STATE = {
  users: [],
  user: {
    id: '',
    username: ''
  },
  errors: false,
};

//  Action creator which is sent to a reducer
const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    getUsers: (state, action) => {
      return {
        ...state,
        users: action.payload
      };
    },
  },
});

export const {
  getUsers,
} = userSlice.actions;

// a reducer to update the state
const userReducer = userSlice.reducer;

export default combineReducers({
  user: userReducer,
});
