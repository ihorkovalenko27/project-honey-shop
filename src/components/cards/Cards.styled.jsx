import styled from '@emotion/styled';

export const ProductsContainer = styled.section`
  display: block;
  padding: 50px 0 100px;
  background-color: white;
`;

export const ProductWrapper = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
`;

export const ProductsTitle = styled.h2`
  display: block;
  font-weight: bold;
  font-size: 45px;
  line-height: 72px;
  margin-bottom: 50px;
  color: var(--text-color);
`;

export const CardList = styled.ul`
  display: flex;
  align-items: center;
`;

export const CardItem = styled.li`
  width: 100%;
  transition: all 0.5s ease-out;
  &:nth-of-type(3n + 1) {
    margin-right: 25px;
  }
  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 216, 119, 1);
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 30px 30px 30px;
  background-color: rgba(229, 130, 17, 0.07);
`;

export const InfoWrapper = styled.div`
  width: 300px;
`;

export const InfoWrap = styled.div`
  width: 350px;
  margin-right: 50px;
`;

export const TitleCard = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  margin-bottom: 20px;

  color: var(--text-color);
`;
export const CardText = styled.p`
  display: block;
  font-weight: 600;
  font-size: 15px;
  line-height: 26px;
  margin-bottom: 20px;

  color: var(--text-color);

  opacity: 0.7;
`;

export const CardButton = styled.button`
  padding: 10px 30px;
  border: 1.5px solid #e58211;
  background-color: transparent;
  font-size: 18px;
  line-height: 29px;

  color: var(--primary-color);
`;

export const ImgShop = styled.img`
  width: 220px;
`;

export const ImgHoney = styled.img`
  width: 200px;
`;
