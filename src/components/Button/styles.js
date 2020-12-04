import styled from 'styled-components';

export const ButtonContainer = styled.div`
  > button {
    padding: 8px 12px;
    margin: 0 2px 2px 0;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 10px;
    box-sizing: border-box;
    text-decoration: none;
    font-weight: 300;
    color: #04336b;
    text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
    text-align: center;
    min-width: 75px;
    &:hover {
      border-color: rgba(255, 255, 255, 1);
    }
    &:disabled,
    &[disabled] {
      opacity: 0.65;
      cursor: not-allowed;
      &:hover {
        border-color: rgba(255, 255, 255, 0);
      }
    }
  }
`;
