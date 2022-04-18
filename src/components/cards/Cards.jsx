import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsTitle,
  CardWrapper,
  CardList,
  CardItem,
  InfoWrapper,
  TitleCard,
  CardText,
  CardButton,
  ImgShop,
  ImgHoney,
} from './Cards.styled';
import shop1 from '../../images/shop11.png';
import shop2 from '../../images/shop12.png';

const Shops = () => {
  return (
    <ProductsContainer id="shops">
      <ProductWrapper>
        <ProductsTitle>Our Trusted Shops</ProductsTitle>
        <CardList>
          <CardItem>
            <CardWrapper>
              <InfoWrapper>
                <TitleCard>Savannah Bee</TitleCard>
                <CardText>
                  Disney Springs, Orlando 1600 E. Buena Vista Drive #C Lake Buena Vista, FL 32830
                </CardText>
                <CardButton type="button">Call Now</CardButton>
              </InfoWrapper>
              <div>
                <ImgShop src={shop1} alt="Eucalipt" />
              </div>
            </CardWrapper>
          </CardItem>
          <CardItem>
            <CardWrapper>
              <InfoWrapper>
                <TitleCard>Honey Pacifica</TitleCard>
                <CardText>
                  Westside Provisions, Atlanta 1100 Howell Mill Road NW, Suite A01 Atlanta, GA 30318
                </CardText>
                <CardButton type="button">Call Now</CardButton>
              </InfoWrapper>
              <div>
                <ImgHoney src={shop2} alt="Basswood" />
              </div>
            </CardWrapper>
          </CardItem>
        </CardList>
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Shops;
