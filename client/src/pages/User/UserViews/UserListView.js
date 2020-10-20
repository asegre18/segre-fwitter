import React from 'react';
import { useFetchUsers } from '../UserHooks';

export const UserListView = () => {
  useFetchUsers();
  return <h1>Hello World</h1>;
};
