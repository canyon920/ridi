import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

const Swiper = ({ children }) => {
  const [index, setIndex] = useState(0);

  const handleChangeIndex = (index) => {
    setIndex(index);
  };

  return (
    <SwipeableViews index={index} onChangeIndex={handleChangeIndex}>
      {children}
    </SwipeableViews>
  );
};

export default Swiper;