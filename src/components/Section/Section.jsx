import React from 'react';
import * as S from './Section.style';

const Section = ({ padding, margin, children }) => {
  return <S.Section style={{ padding, margin }}>{children}</S.Section>;
};

export default Section;
