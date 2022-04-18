import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { InfoWrapper, TitleCard, CardText, ProductsTitle, CardButton } from './Products.styled';
import basswood from '../../images/basswood.png';
import eucalyptus from '../../images/eucalyptus.png';
class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      display: 'flex',
      position: 'relative',
      height: '600px',
      width: '100%',
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'middle',
    };
  }
  static get CARD_STYLE() {
    return {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '380px',
      width: '700px',
      padding: '50px',
      textAlign: 'start',
      background: 'linear-gradient(76.02deg, #ff9d2d 1.66%, #ffd877 93.21%)',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <section id="products">
        <div style={MyCarousel.CONTAINER_STYLE}>
          <ProductsTitle>Our Product</ProductsTitle>
          <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            <div style={MyCarousel.CARD_STYLE}>
              <InfoWrapper>
                <TitleCard>Eucalyptus Honey</TitleCard>
                <CardText>
                  It has the scent of lavender, medium sweetness lavender scented, and has a medium
                  amber color.
                </CardText>
                <CardButton type="button">Buy Now</CardButton>
              </InfoWrapper>
              <img src={eucalyptus} alt="Eucalipt" />
            </div>
            <div style={MyCarousel.CARD_STYLE}>
              <InfoWrapper>
                <TitleCard>Basswood Honey</TitleCard>
                <CardText>
                  Basswood is a tree native and abundant in Wisconsin, which is also known as the
                  Linden tree.
                </CardText>
                <CardButton type="button">Buy Now</CardButton>
              </InfoWrapper>
              <img src={basswood} alt="Eucalipt" />
            </div>
            <div style={MyCarousel.CARD_STYLE}>
              <InfoWrapper>
                <TitleCard>Basswood Honey</TitleCard>
                <CardText>
                  Basswood is a tree native and abundant in Wisconsin, which is also known as the
                  Linden tree.
                </CardText>
                <CardButton type="button">Buy Now</CardButton>
              </InfoWrapper>
              <img src={basswood} alt="Eucalipt" />
            </div>
            <div style={MyCarousel.CARD_STYLE}>
              <InfoWrapper>
                <TitleCard>Eucalyptus Honey</TitleCard>
                <CardText>
                  It has the scent of lavender, medium sweetness lavender scented, and has a medium
                  amber color.
                </CardText>
                <CardButton type="button">Buy Now</CardButton>
              </InfoWrapper>
              <img src={eucalyptus} alt="Eucalipt" />
            </div>
            <div style={MyCarousel.CARD_STYLE}>
              <InfoWrapper>
                <TitleCard>Basswood Honey</TitleCard>
                <CardText>
                  Basswood is a tree native and abundant in Wisconsin, which is also known as the
                  Linden tree.
                </CardText>
                <CardButton type="button">Buy Now</CardButton>
              </InfoWrapper>
              <img src={basswood} alt="Eucalipt" />
            </div>
          </ReactCardCarousel>
        </div>
      </section>
    );
  }
}

export default MyCarousel;
