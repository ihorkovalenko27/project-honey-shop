import React from 'react';
import {
  AboutContainer,
  AboutWrapper,
  AboutHoneyWrapper,
  AboutHoneyImg,
  AboutText,
  AboutInfoText,
  ButtonLearnMore,
} from './About.styled';
import bottleHoney from '../../images/bootle-honey.jpg';

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <AboutHoneyWrapper>
          <AboutHoneyImg src={bottleHoney} alt="" />
          <div>
            <AboutText>Honey created in the laps of nature.</AboutText>
            <AboutInfoText>
              Honey is one of the prime ingredients in your everyday food schedule. As a brand, you
              need a marketing strategy that will help...
            </AboutInfoText>
            <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
          </div>
        </AboutHoneyWrapper>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
