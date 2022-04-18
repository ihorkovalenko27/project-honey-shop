import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  display: block;
  padding: 45px 0;
  background: linear-gradient(76.02deg, #ff9d2d 1.66%, #ffd877 93.21%);
`;

export const FooterWrapper = styled.div`
  display: flex;
  max-width: 1344px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 5px 0 90px;
`;

export const FooterText = styled.p`
  width: 290px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin-left: 50px;
  color: var(--text-color);
  opacity: 0.7;
`;

export const MediaList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 80px;
`;

export const MediaItem = styled.li`
  &:not(:first-of-type) {
    margin-left: 40px;
  }
  cursor: pointer;
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 175px;
`;

export const SocialItem = styled.li`
  &:not(:first-of-type) {
    margin-left: 20px;
  }
  cursor: pointer;
`;
