import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
const DeleteModal = ({ onDelete, onClick, id }) => {
    return (
        <Wrapper>
            <Container>
                <Title>Are you sure?</Title>
                <ButtonContainer>
                    <NoButton onClick={onClick}>No</NoButton>
                    <Button onClick={() => {
                        onDelete(id)
                    }} >Yes</Button>
                </ButtonContainer>
            </Container>
        </Wrapper>
    )
}
export default DeleteModal
const Wrapper = styled.div`
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.7);
`
const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  background: white;
  border-radius: 10px;
  top: 35vh;
  left: 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 20rem;
  left: calc(50% - 10rem);
`
const Title = styled.h2`
  margin-bottom: 0;
`
const ButtonContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`
const NoButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 0.5rem;
  color: #00329e;
  background: transparent;
  border: none;
  box-shadow: none;
  &:hover,:active {
  background: #aec6f8;
  }
`