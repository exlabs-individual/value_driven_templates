import React from 'react';
import { Logo } from './logo.component';

export default {
  title: 'Logo',
  component: Logo,
  decorators: [
    (story) => (
      <div
        style={{
          fontFamily: "'Montserrat', sans-serif",
          backgroundColor: '#044AAF',
          width: 'fit-content',
        }}
      >
        {story()}
      </div>
    ),
  ],
};

export const Default = () => <Logo />;
