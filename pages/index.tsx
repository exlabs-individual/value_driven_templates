import React from 'react';
import { LayoutProvider } from '../layout/layout.provider';

const Home = () => {
  return (
    <LayoutProvider>
      <h1>Content</h1>
    </LayoutProvider>
  );
};

export default Home;
