import styled from "styled-components";
import React from "react";

export const Button = (props) => {
    return (
        <ButtonMovie onClick={props.onClick}>
            {props.children}
        </ButtonMovie>
    )

}
const ButtonMovie = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #00329e;
  background: #00329e;
  color: white;
  border-radius: 6px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  margin: 0 0.5rem;
  &:hover,:active {
    background: #f67722;
    border-color: #f67722;
  }
`;