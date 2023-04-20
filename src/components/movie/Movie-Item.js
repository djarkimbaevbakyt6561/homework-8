import styled from "styled-components";
import { Button } from "../UI/Button";
import { useState } from "react";
import DeleteModal from "../modal/DeleteModal";
import { createPortal } from "react-dom";
const MovieItem = ({ title, key, id, rating, img, onClick }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  function toggleModalHandler() {
    setOpenDeleteModal((prev) => !prev);
  }
  return (
    <ListItem key={key} >
      <MovieItemImage >
        <Image src={img} alt={title} />
      </MovieItemImage>
      <MovieItemInfo >
        <Title>{title}</Title>
        <Rating>
          <RatingP>{rating}/5 stars</RatingP>
          <DeleteButton
            onClick={() => setOpenDeleteModal(true)}
          >
            DELETE
          </DeleteButton>
          <Button>EDIT</Button>
        </Rating>
      </MovieItemInfo>
      {openDeleteModal &&
        createPortal(
          <DeleteModal onDelete={onClick} id={id} onClick={toggleModalHandler} />,
          document.getElementById('modal')
        )}
    </ListItem>
  );
};
export default MovieItem
const ListItem = styled.li`
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
  list-style: none;
  width: 640px;
`
const MovieItemImage = styled.div`
  flex: 1;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
  height: 170px;
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const MovieItemInfo = styled.div`
  flex: 2;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;
`
const Title = styled.h2`
  color: #383838;
  margin-bottom: 1rem;
`
const Rating = styled.div`
  margin-top: 20px;
`
const RatingP = styled.p`
    color: white;
    display: inline;
    background: #F67722;
    padding: 0.25rem 1rem;
    border-radius: 15px;
`
const DeleteButton = styled.button`
    font: inherit;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    margin: 0 0.5rem;
    border: 1px solid #00329e;
    background: #d30808;
    color: white;
    border-color: #d30808;
    &:hover {
      background: #ff3217;
      border-color: #ff3217;
      border: none;
    }  
`
