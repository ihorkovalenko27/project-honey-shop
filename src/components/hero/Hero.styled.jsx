import styled from '@emotion/styled';
import img from '../../images/honey-title.png';

export const HeroContainer = styled.section`
  display: block;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding: 180px 0px 160px;
  position: relative;
  background-image: url(${img}), linear-gradient(76.02deg, #ff9d2d 1.66%, #ffd877 93.21%);
  background-size: center;
  background-position: 70px 120px, center center;
  background-repeat: no-repeat;
  border-radius: 30px;
`;

export const HeroImageContainer = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
`;

export const ImgBees = styled.img`
  position: absolute;
  width: 600px;
  top: 165px;
  left: 745px;
`;

export const ImgOneBee = styled.img`
  position: absolute;
  top: 445px;
  left: 180px;
`;

export const ImgHoneySpoon = styled.img`
  position: absolute;
  top: 17px;
  left: -4vh;
  @keyframes swing {
    15% {
      -webkit-transform: translateY(9px);
      transform: translateY(9px);
    }
    30% {
      -webkit-transform: translateY(-9px);
      transform: translateY(-9px);
    }
    40% {
      -webkit-transform: translateY(6px);
      transform: translateY(6px);
    }
    50% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    65% {
      -webkit-transform: translateY(3px);
      transform: translateY(3px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  &:hover {
    animation: swing 0.6s ease;
  }
`;

export const TitleText = styled.span`
  display: block;
  &:nth-of-type(2) {
    text-indent: 100px;
  }
  &:nth-of-type(3) {
    text-indent: 290px;
    margin-bottom: 70px;
    &::after {
      content: '';
      position: absolute;
      top: 567px;
      left: 180px;
      background-color: var(--text-color);
      display: inline-block;
      height: 2px;
      width: 274px;
    }
  }
  &:nth-of-type(-n + 2) {
    margin-bottom: 10px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: bold;
  font-size: 85px;
  line-height: 130px;

  color: var(--text-color);
`;

export const BuyNowButton = styled.button`
  padding: 18px 50px;
  margin-right: 30px;
  background-color: var(--text-color);
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;

export const LearnMoreButton = styled.button`
  padding: 18px 50px;
  background-color: transparent;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: var(--text-color);
  border: 2px solid var(--text-color);
`;
