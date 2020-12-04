import React from 'react';
import {ButtonContainer} from 'components/Button/styles';

const Button = ({children, clickHandler, disabled}) => {
  return (
    <ButtonContainer>
      <button disabled={disabled} onClick={clickHandler}>
        {children}
      </button>
    </ButtonContainer>
  );
};

export default Button;
