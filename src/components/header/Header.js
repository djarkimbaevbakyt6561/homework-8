import { useState } from 'react';
import Modal from '../modal/Modal';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

function Header({ onSubmit }) {
    const [openModal, setOpenModal] = useState(false);
    function openAndCloseExpensesFormHandler() {
        setOpenModal((prev) => !prev);
    }
    return (
        <>
            <HeaderContainer>
                <Title>Favourite Movies</Title>
                <Button onClick={() => setOpenModal(true)}>ADD MOVIE</Button>
            </HeaderContainer>
            {openModal &&
                createPortal(
                    <Modal onSubmit={onSubmit} onClick={openAndCloseExpensesFormHandler} />,
                    document.getElementById('modal')
            )}
        </>

    );
}
export default Header;
const HeaderContainer = styled.div`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    background: #00329E;
`
const Title = styled.h1`
    color: white;
    margin: 0;
    font-size: 1.5rem;
`
const Button = styled.button`
    font: inherit;
    padding: 0.5rem 1rem 0.6rem 1rem;
    background: #F67722;
    border: 1px solid #F67722;
    color: white;
    border-radius: 6px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    &:hover,:active {
      background: #F3CC4B;
      border-color: #F3CC4B;
      color: #995200;
    }
`
