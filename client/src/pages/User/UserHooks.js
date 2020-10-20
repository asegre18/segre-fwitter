import { useEffect } from 'react';
import { getUsers } from './UserReducer';
import { useUtils } from '../common';
import axios from 'axios';

export const useFetchUsers = () => {
  const {
    dispatch,
  } = useUtils();

  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        dispatch(getUsers(res.data));
      })
      .catch(e => console.log(e));

  }, [dispatch]);
};
