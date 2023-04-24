import { useRef } from "react";
import { Input } from '../UI/Input'
import { Button } from "../UI/Button";
import styled from "styled-components";
const Modal = ({ onClick,  onSubmit }) => {
  const inputText = useRef()
  const inputImage = useRef()
  const inputRating = useRef()


  function addMovieHandler(e) {
    e.preventDefault();
    const movie = {
      title: inputText.current.value,
      img: inputImage.current.value,
      rating: inputRating.current.value,
      id: Math.random()
    };
    inputText.current.value = ""
    inputImage.current.value = ""
    inputRating.current.value = ""

    onSubmit(movie);
    onClick();
  }
  return (
    <Wrapper>
      <ModalContainer>
        <ModalContent>
          <Input type="text" name="title" id="title" ref={inputText}>Movie Title</Input>
          <Input ref={inputImage} type="text" name="image-url" id="image-url">Image URL</Input>
          <Input
            type="number"
            name="rating"
            id="rating"
            ref={inputRating}
          >Your Rating</Input>
        </ModalContent>
        <ModalActions>
          <CancelButton onClick={onClick}>
            Cancel
          </CancelButton>
          <Button onClick={addMovieHandler}>
            Add
          </Button>
        </ModalActions>
      </ModalContainer>

    </Wrapper>
  );
};
export default Modal;
const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  background: white;
  border-radius: 10px;
  width: 50%;
  top: 30vh;
  left: 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 40rem;
    left: calc(50% - 20rem);
`
const ModalContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;

`
const ModalActions = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`
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
const CancelButton = styled.button`
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