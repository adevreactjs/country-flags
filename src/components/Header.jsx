import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from './Container';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 2rem 0;
`;
const Title = styled.a.attrs({
  href: '/country-flags',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  //   font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the word?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size='14px' /> : <IoMoon size='14px' />}
            <span style={{ marginLeft: '0.75rem' }}>Light theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
