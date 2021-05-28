import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.themeWhite};
  color: ${({ theme }) => theme.colors.themeBlack};
  position: fixed;
  top: 0;
  z-index: 2;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: space-between;
`;

const BarLeft = styled.div``;

const BarRight = styled.div``;

const LogoLink = styled.a`
  font-size: 2.6rem;
  font-weight: 800;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.themeBlack};
  text-transform: uppercase;
`;

const TopBar = () => (
  <Wrapper>
    <Container>
      <BarLeft>
        <LogoLink href="#contact">grooby</LogoLink>
      </BarLeft>
      <BarRight>Rightside</BarRight>
    </Container>
  </Wrapper>
);

export default TopBar;
