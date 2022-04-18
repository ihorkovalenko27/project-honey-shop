import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoHoneyWrapper,
  InfoText,
  AboutInfoText,
  ButtonLearnMore,
  InfoHoneyImg,
} from './Info.styled';
import infobee from '../../images/info-bee.jpg';

const Info = () => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <InfoHoneyWrapper>
          <div>
            <InfoText>Does your honey taste bad? Try us!</InfoText>
            <AboutInfoText>
              Honey is one of the prime ingredients in your everyday food schedule. As a brand, you
              need a marketing strategy that will help...
            </AboutInfoText>
            <ButtonLearnMore type="button">Learn more</ButtonLearnMore>
          </div>
          <InfoHoneyImg src={infobee} alt="Bee" />
        </InfoHoneyWrapper>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;
