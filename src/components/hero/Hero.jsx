import React from 'react';
import {
  HeroImageContainer,
  HeroContainer,
  HeroTitle,
  ImgBees,
  TitleText,
  ImgOneBee,
  BuyNowButton,
  LearnMoreButton,
  ImgHoneySpoon,
} from './Hero.styled';
import bees from '../../images/bees.png';
import onebee from '../../images/onebee.png';
import honeySpoon from '../../images/honey-spoon.png';

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroImageContainer>
        <ImgBees src={bees} alt="Bees fly" />
        <ImgOneBee src={onebee} alt="Bee fly" />
        <ImgHoneySpoon src={honeySpoon} alt="Bee fly" />
        <HeroTitle>
          <TitleText>Finger</TitleText>
          <TitleText>licking</TitleText>
          <TitleText>honey!</TitleText>
        </HeroTitle>
        <BuyNowButton type="button">Buy Now</BuyNowButton>
        <LearnMoreButton type="button">Learn More</LearnMoreButton>
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;
