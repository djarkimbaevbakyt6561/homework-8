import React, { forwardRef } from "react";
import styled from "styled-components";
import { Fragment } from "react";
export const Input = forwardRef((props, ref) => {
  return (
    <>
      <Label for={props.name}>
        {props.children}
      </Label>
      <InputForModal ref={ref} value={props.value} onChange={props.onChange} type={props.type} name={props.name}></InputForModal>
    </>

  )

})

const Label = styled.label`
  font-weight: bold;
  margin: 0.5rem 0;
  color: #464646;
  text-align: left;
`
const InputForModal = styled.input`
  font-family: inherit;
  border: 1px solid #ccc;
  padding: 0.4rem 0.2rem;
  color: #383838;
  &:hover {
    outline: none;
    background: #fff1c4;
  }
`
