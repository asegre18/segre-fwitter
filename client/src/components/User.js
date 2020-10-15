import React, { useState } from 'react';
import useUsers from '../hooks/useUsers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const User = ({ users, setUser}) => {
  const [username, setUsername] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // The 2nd parameter, should be an object
    // this object will become what req.body is on the controller
    axios.post('/api/users', { username, manny: 'isNotCool', moreStuff: true, })
      .then(res => {
        // push res.data into the users state
        const newUsers = [...users, res.data];
        setUsers(newUsers);
      });
  };
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="standard-basic"
          label="Standard"
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary">
          Primary
        </Button>
      </form>
      <h1>Hello User page</h1>
      {renderUsers()}
    </div>
  );
};

export default User;
