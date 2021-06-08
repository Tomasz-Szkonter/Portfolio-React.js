import React from 'react';
import styled from 'styled-components';

const HamburgerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 25px;
  cursor: pointer;

  > span {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const Hamburger = () => (
  <HamburgerBox>
    <span className="line1" />
    <span className="line2" />
    <span className="line3" />
  </HamburgerBox>
);

export default Hamburger;
