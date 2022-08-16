import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
