import React from "react";

const FormInput = ({
  inputId,
  inputType,
  InputPlaceholder,
  userRef,
  email,
}) => {
  return (
    <input
      className='form-control'
      id={inputId}
      type={inputType}
      placeholder={InputPlaceholder}
      ref={userRef}
      value={email}
      required
    />
  );
};

export default FormInput;
