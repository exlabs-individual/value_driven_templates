import styled from 'styled-components';

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  & > .author__img {
    width: 30px;
    height: 30px;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    background-color: #044aaf4d;
  }

  & > .author__name {
    margin-left: 10px;
    font-weight: 500;
  }
`;
