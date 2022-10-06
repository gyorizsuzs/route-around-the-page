import { Outlet } from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <div>
      <h1>This is the Home page.</h1>
      <Outlet />
    </div>
  );
}

export default Home;
