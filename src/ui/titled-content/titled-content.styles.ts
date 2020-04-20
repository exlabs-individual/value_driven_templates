import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerHeader = styled.header`
  & > .title {
    margin: 0 0 20px;
    font-size: 31px;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      background-color: #ebebeb;
      margin-top: 10px;
    }
  }
`;

export const ContainerContent = styled.div``;
