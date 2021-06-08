import React from 'react';
import styled from 'styled-components';

import Intro from '../components/intro/Intro';
import Portfolio from '../components/portfolio/Portfolio';
import Skills from '../components/skills/Skills';
import Work from '../components/work/Work';
import Contact from '../components/contact/Contact';

const SectionWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: gray;
  position: relative;
  top: 70px;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  scrollbar-width: none; //for firefox

  &::-webkit-scrollbar {
    //for chrome safari...
    display: none;
  }

  > div {
    scroll-snap-align: start;
    width: 100vw;
    height: calc(100vh - 70px);
  }
`;

const Sections = () => (
  <SectionWrapper>
    <Intro />
    <Portfolio />
    <Skills />
    <Work />
    <Contact />
  </SectionWrapper>
);

export default Sections;
