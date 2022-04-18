import styled from '@emotion/styled';

export const InfoContainer = styled.section`
  display: block;
  max-width: 1600px;
  padding: 50px 0 50px;
  background-color: white;
`;

export const InfoWrapper = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
`;

export const InfoHoneyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoText = styled.h3`
  font-weight: bold;
  font-size: 45px;
  line-height: 65px;
  margin-bottom: 30px;

  color: var(--text-color);
`;

export const AboutInfoText = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 35px;
  margin-bottom: 50px;
  color: var(--text-color);

  opacity: 0.7;
`;

export const InfoHoneyImg = styled.img`
  width: 630px;
`;

export const ButtonLearnMore = styled.button`
  background-color: var(--primary-color);
  padding: 15px 40px;
  font-weight: bold;
  font-size: 18px;
  line-height: 29px;
  border: none;

  color: #ffffff;
`;
