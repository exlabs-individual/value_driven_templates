import React from 'react';
import { Header } from './header.component';

export default {
  title: 'Desktop Header',
  component: Header,
  decorators: [
    (story) => (
      <div style={{ fontFamily: "'Montserrat', sans-serif" }}>{story()}</div>
    ),
  ],
};

export const Default = () => <Header />;
