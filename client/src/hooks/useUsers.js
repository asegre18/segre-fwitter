import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUsers } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

const useUsers = () => {
  // const dispatch = useDispatch();
  // const { users, user, errors } = useSelector(state => state.user);
  const [ users, setUsers ] = useState([]);
  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        setUsers(res.data);
        // dispatch(getUsers(res.data));
      })
      .catch(e => console.log(e));
  }, []);

  return {
    users,
    setUsers,
    // user,
    // errors,
  };
};

export default useUsers;
