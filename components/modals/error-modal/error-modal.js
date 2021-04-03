import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import styled from "styled-components";

const ErrorModal = ({ show, errorMsg, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Title id="contained-modal-title-vcenter">Uh oh</Title>
      </Modal.Header>
      <Modal.Body>{errorMsg}</Modal.Body>
      <Modal.Footer>
        <button onClick={onHide} className="primary-button-auto">
          Got it!
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const Button = styled.button`
  width: 30em;
  height: 3em;

  padding: 0 2em;
  margin: 0.5em 0;

  background: #dec800;
  box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 56.5px;

  color: #ffffff;
  font-family: Poppins;
  font-weight: 300;
  font-size: 1em;
`;

const Title = styled.h1`
  font-family: Poppins;
  font-weight: 700;
  font-size: 2em;
`;

export default ErrorModal;
