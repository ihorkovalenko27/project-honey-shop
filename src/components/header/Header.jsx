import React from 'react';
import { Link } from 'react-scroll';
import logo from '../../images/logo.svg';
import { NavContainer, NavSection, NavList, NavItem } from './Header.styled';

const Header = () => {
  return (
    <NavContainer>
      <nav>
        <NavSection>
          <img src={logo} alt="Logo of company" />
          <NavList>
            <NavItem>
              <Link to="shops" spy={true} smooth={true}>
                Shops
              </Link>
            </NavItem>
            <NavItem>
              <Link to="awards" spy={true} smooth={true}>
                Awards
              </Link>
            </NavItem>
            <NavItem>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="products" spy={true} smooth={true}>
                Our Product
              </Link>
            </NavItem>
            <NavItem>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </NavItem>
          </NavList>
        </NavSection>
      </nav>
    </NavContainer>
  );
};

export default Header;
