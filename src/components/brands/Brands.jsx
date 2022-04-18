import React from 'react';
import { ShopContainer, ShopWrapper, AboutTitle, LogoList } from './Brands.styled';
import luxotica from '../../images/luxotica.svg';
import miu from '../../images/miu.svg';
import dunkin from '../../images/dunkin.svg';
import burberry from '../../images/burberry.svg';

const Brands = () => {
  return (
    <ShopContainer>
      <ShopWrapper>
        <AboutTitle id="shops">Our Trusted Shops</AboutTitle>
        <LogoList>
          <li>
            <img src={luxotica} alt="Luxotica" />
          </li>
          <li>
            <img src={miu} alt="Miu Miu" />
          </li>
          <li>
            <img src={dunkin} alt="Dunkin`" />
          </li>
          <li>
            <img src={burberry} alt="Burberry" />
          </li>
        </LogoList>
      </ShopWrapper>
    </ShopContainer>
  );
};

export default Brands;
