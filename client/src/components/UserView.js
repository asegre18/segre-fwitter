import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

export const UserView = (props) => {
  // console.log(props.match.params.userId);
  const { userId } = useParams();
  const [user, setUser] = useState({
    id: '',
    username: '',
  });

  useEffect(() => {
    axios.get(`/api/users/${userId}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [userId]);

  const handleDelete = (userId) => {
    console.log(userId);
    axios.delete(`/api/users/${userId}`)
      .then(res => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1>I am user view </h1>
      <p>{user.username}</p>
      <p>{user.password}</p>
      <button
        onClick={() => handleDelete(userId)}
      >
        Delete me
      </button>
    </div>
  );
};

