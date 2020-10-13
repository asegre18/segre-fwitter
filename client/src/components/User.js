import React from 'react';

import useUsers from '../hooks/useUsers';
const User = () => {
  const { users, user, error } = useUsers();

  const renderUsers = () => {
    if (users.length) {
      return users.map(({ id, username }) => {
        return (
          <div key={id}>
            <p>Username: {username}</p>
          </div>
        );
      });
    }
  };

  return (
    <div>
      <h1>Hello User page</h1>
      {renderUsers()}
    </div>
  );
};

export default User;
