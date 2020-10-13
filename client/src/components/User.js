import React, { useEffect } from 'react';
import axios from 'axios';

const User = () => {
  // Instructions are
  // Set the user State with the data that we're getting back from our database
  // And then render that data on the screen

  // As a bonus once you're finished, create your own hook called useUserList
  // take all of the logic out from the User component and then
  // put it inside of that hook
  // and then use the hook in the User component
  // and make sure everything still works

  // The post
  // axios.post('/api/users', { username: 'theValueOfTheStateFromTheInput' })
  // once u get this data, u need to update ur state
  useEffect(() => {
    axios.get('/api/users')
      .then(res => {
        console.log(res.data);
      })
      .catch(e => console.log(e));
  }, []);


  return (
    <div>
      <h1>Hello User page</h1>
    </div>
  );
};

export default User;
