import styled from '@emotion/styled';

export const NavContainer = styled.header`
  display: block;
  padding: 30px 0;
  background-color: white;
`;

export const NavSection = styled.div`
  display: flex;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  display: block;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;

  color: var(--text-color);
  margin-right: 40px;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: var(--primary-color);
    transition: 0.25s ease-in-out;
  }
`;
