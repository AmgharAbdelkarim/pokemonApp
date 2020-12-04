import React from 'react';
import {BoxContainer} from 'components/Box/styles';

const Box = ({name, clickHandler}) => {
  return (
    <BoxContainer onClick={clickHandler}>
      <span>{name}</span>
    </BoxContainer>
  );
};

export default Box;
