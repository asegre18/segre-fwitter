// This controller will be in charge of which component from the User folder should be shown
// to the user right now
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserListView } from './UserViews';

export const UserContainer = (props) => {

  return (
    <Switch>
      <Route exact path='/users' component={UserListView}/>
    </Switch>
  );
};
