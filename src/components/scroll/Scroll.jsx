import React from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
const ScrollUp = () => {
  return (
    <ScrollUpButton
      EasingType="easeOutCubic"
      AnimationDuration={1200}
      style={{ width: 70, height: 70, background: '#e68311' }}
    />
  );
};

export default ScrollUp;
