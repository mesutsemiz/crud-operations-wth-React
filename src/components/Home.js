import React from 'react';
import { Heading } from './Heading';
import { UserList } from './UserList';

export const Home = (props) => {
  return (
    <div>
      <Heading />
      <UserList />
    </div>
  );
};
