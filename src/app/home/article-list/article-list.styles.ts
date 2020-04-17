import styled from 'styled-components';

export const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .article-thumbnail {
    max-width: 90%;
  }

  & > .article-thumbnail {
    margin-bottom: 20px;
  }

  & > .article-thumbnail:last-child {
    margin-bottom: 0;
  }
`;

export const DesktopList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > .article-thumbnail {
    min-width: 49%;
    max-width: 49%;
    margin-bottom: 2%;
  }
`;
