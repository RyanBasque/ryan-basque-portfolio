import React from "react";

import { InputProps } from "./types";
import * as S from "./styles";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  required = false,
  name,
  id,
  className = "",
  error = false,
  errorMessage,
  label,
  fullWidth = false,
}: InputProps): React.JSX.Element => {
  return (
    <S.InputContainer className={className}>
      {label && (
        <S.Label htmlFor={id}>
          {label}
          {required && <span style={{ color: "#da3633" }}> *</span>}
        </S.Label>
      )}
      <S.StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        $error={error}
        $fullWidth={fullWidth}
      />
      {error && errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

export default Input;
