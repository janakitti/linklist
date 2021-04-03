import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import styled from "styled-components";
import api from "../../../utils/api";

const DeleteListModal = ({ show, onDelete, list, onHide }) => {
  const [newList, setNewList] = useState("");

  const handleChange = async (event) => {
    setNewList(event.target.value);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const res = await api.delete(
        "http://localhost:4000/api/lists/" + list._id,
        {
          withCredentials: true,
        }
      );
      await onDelete();
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Title id="contained-modal-title-vcenter">Delete list</Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to unpublish and delete this list?
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide} className="primary-button-auto">
          Actually, no
        </button>
        <button onClick={handleDelete} className="primary-button-auto">
          Delete
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

export default DeleteListModal;
