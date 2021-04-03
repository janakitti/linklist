import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import styled from "styled-components";
import api from "../utils/api";

const NewListModal = ({ show, onAddNewList, onHide }) => {
  const [newList, setNewList] = useState("");

  const handleChange = async (event) => {
    setNewList(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const name = {
        name: newList,
      };
      const res = await api.post("http://localhost:4000/api/lists", name, {
        withCredentials: true,
      });
      setNewList("");
      onAddNewList(res.data);
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
        <Title id="contained-modal-title-vcenter">Create new list</Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="text-input-modal"
          type="text"
          name="name"
          placeholder="List name"
          value={newList}
          onChange={handleChange}
        ></input>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={handleSubmit} className="primary-button-auto">
          Close
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

export default NewListModal;
