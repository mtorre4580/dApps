import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  border: 0;
  margin-right: 10px;
`;

const MessageError = styled.p`
  color: red;
  font-weight: bold;
  margin: 10px 0;
`;

const Submit = styled.button`
  padding: 10px;
  background-color: #283593;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 10px;
  &:hover{
    cursor: pointer;
  }
`;

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const [err, setErr] = useState(null);

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (value) {
      setErr(null);
      onSubmit(value);
    } else {
      setErr("Quantity is required");
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleOnSubmit}>
        <Input
          type="text"
          placeholder="Insert your quantity"
          onChange={handleOnChange}
          value={value}
        />
        <Submit>Confirm</Submit>
      </StyledForm>
      {err && <MessageError>{err}</MessageError>}
    </>
  );
};

export default Form;
