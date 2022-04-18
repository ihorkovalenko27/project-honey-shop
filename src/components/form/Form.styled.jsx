import styled from '@emotion/styled';

export const FormContainer = styled.section`
  position: relative;
  display: block;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  position: absolute;
  top: 15px;
  left: 500px;
  z-index: 1;
  @media (max-width: 1344px) {
    left: 430px;
  }
`;

export const ImgLabel = styled.img`
  width: 400px;
  @media (max-width: 1344px) {
    width: 360px;
  }
`;
export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ImgStar = styled.img`
  width: 100px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  z-index: -1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99.6%;
  background-color: rgba(47, 48, 58, 0.4);
  border-radius: 20px;
`;
