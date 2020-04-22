import React from 'react';
import { AuthorContainer } from './author.styles';

interface AuthorProps {
  img: string;
  name: string;
}

export const Author = ({ name, img }: AuthorProps) => {
  return (
    <AuthorContainer>
      <div
        className="author__img"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      ></div>
      <div className="author__name">{name}</div>
    </AuthorContainer>
  );
};
