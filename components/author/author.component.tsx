import React from 'react';
import { AuthorContainer } from './author.styles';

interface AuthorProps {
  imageUrl: string;
}

export const Author = ({ imageUrl }: AuthorProps) => {
  return (
    <AuthorContainer>
      <div
        className="author__img"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      ></div>
      <div className="author__name">John Doe</div>
    </AuthorContainer>
  );
};
