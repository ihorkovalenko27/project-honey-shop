import React from 'react';
import {
  FormContainer,
  ImgLabel,
  StarWrapper,
  ImgStar,
  FormWrapper,
  Video,
  Overlay,
} from './Form.styled';
import videoProduction from '../../assets/videoProduction.mp4';
import quality from '../../images/freshquality.png';
import star from '../../images/star.png';
import text from '../../images/honeylabeltext.png';
const Form = () => {
  return (
    <>
      <FormContainer id="awards">
        <Overlay />
        <FormWrapper>
          <ImgLabel src={quality} alt="label" />
          <StarWrapper>
            <ImgStar src={star} alt="star" />
            <ImgStar src={star} alt="star" />
            <ImgStar src={star} alt="star" />
            <ImgStar src={star} alt="star" />
            <ImgStar src={star} alt="star" />
          </StarWrapper>
          <ImgLabel src={text} alt="label" />
        </FormWrapper>
        <Video src={videoProduction} autoPlay loop muted />
      </FormContainer>
    </>
  );
};

export default Form;
