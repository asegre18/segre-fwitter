import { useEffect } from 'react';
import axios from 'axios';
import { getUsers } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

const useUsers = () => {
  const dispatch = useDispatch();
  const { users, user, errors } = useSelector(state => state.user);

  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        dispatch(getUsers(res.data));
      })
      .catch(e => console.log(e));
  }, [dispatch]);

  return {
    users,
    user,
    errors,
  };
};

export default useUsers;
