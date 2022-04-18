import React from 'react';
import {
  FooterContainer,
  MediaItem,
  FooterWrapper,
  MediaList,
  FooterText,
  SocialList,
  SocialItem,
} from './Footer.styled';
import logo from '../../images/honeyfooter.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import google from '../../images/google.svg';
import pine from '../../images/pine.svg';
import play from '../../images/play.svg';
import appstore from '../../images/appstore.svg';

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrapper>
        <img src={logo} alt="Logo of company" />
        <FooterText>
          Honey is one of the prime ingredients in your everyday food schedule.{' '}
        </FooterText>
        <MediaList>
          <MediaItem>
            <img src={facebook} alt="Logo of facebook" />
          </MediaItem>
          <MediaItem>
            <img src={twitter} alt="Logo of twitter" />
          </MediaItem>
          <MediaItem>
            <img src={google} alt="Logo of google" />
          </MediaItem>
          <MediaItem>
            <img src={pine} alt="Logo of pine" />
          </MediaItem>
        </MediaList>
        <SocialList>
          <SocialItem>
            <img src={play} alt="Logo of pine" />
          </SocialItem>
          <SocialItem>
            <img src={appstore} alt="Logo of pine" />
          </SocialItem>
        </SocialList>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
