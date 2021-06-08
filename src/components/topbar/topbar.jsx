import React from 'react';
import styled from 'styled-components';
import * as BsIcons from 'react-icons/bs';
import Hamburger from './hamburger/Hamburger';

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

const BarLeft = styled.div`
  display: flex;
  width: auto;
`;

const BarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: auto;
`;

const LogoLink = styled.a`
  font-size: 2.6rem;
  font-weight: 800;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.themeBlack};
  text-transform: uppercase;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.themeBlack};
  font-weight: 300;

  svg {
    font-size: 2.2rem;
    margin: 0 10px;
  }
`;

const TopBar = () => (
  <Wrapper>
    <Container>
      <BarLeft>
        <LogoLink href="#contact">grooby</LogoLink>
        <ItemContainer>
          <BsIcons.BsPhone />
          <span>+48 505 819 206</span>
        </ItemContainer>
        <ItemContainer>
          <BsIcons.BsEnvelope />
          <span>Tomasz.Szkonter@hotmail.com</span>
        </ItemContainer>
      </BarLeft>
      <BarRight>
        <Hamburger />
      </BarRight>
    </Container>
  </Wrapper>
);

export default TopBar;
