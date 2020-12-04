import styled from 'styled-components';

export const BoxContainer = styled.div`
  box-sizing: border-box;
  height: 56px;
  padding: 20px;
  width: 246px;
  border: 1px solid #979797;
  opacity: 0.24;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  margin: 20px;
  > span {
    color: #575e71;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 16px;
  }
  &:hover {
    opacity: 0.9;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12);
    border: none;
  }
`;
