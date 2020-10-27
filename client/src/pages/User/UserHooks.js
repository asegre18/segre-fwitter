import { useEffect } from 'react';
import { getUsers } from './UserReducer';
import { useUtils } from '../common';
import { reset } from 'redux-form';
import axios from 'axios';

export const useFetchUsers = () => {
  const {
    dispatch,
  } = useUtils();

  useEffect(() => {
    axios.get('/api/users', { headers: { authorization: localStorage.getItem('token') }})
      .then(res => {
        dispatch(getUsers(res.data));
      })
      .catch(e => console.log(e));

  }, [dispatch]);
};

export const useCreateUser = () => {

  const handleSaveUser = (formValues, dispatch) => {
    console.log(formValues);
    axios.post('/api/users', formValues)
      .then(res => {
        console.log(res);
        dispatch(reset('userCreateForm'));
      });
  };

  return {
    handleSaveUser,
  };
};
