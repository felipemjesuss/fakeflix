import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;

  &.padding-zero {
    padding: 0;
  }
`;

export default ({ children, className }) => (
  <>
    <Menu />
    <Main className={className}>
      {children}
    </Main>
    <Footer />
  </>
);
