import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ name, placeholder, type, label }) => {
  return (
    <S.InputContainer>
      <S.Label name={name}>{label}</S.Label>
      <S.Input name={name} type={type} placeholder={placeholder} />
    </S.InputContainer>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
