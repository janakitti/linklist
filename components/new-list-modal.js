import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const NewListModal = (props) => {
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
      const res = await axios.post("http://localhost:4000/api/lists", name, {
        withCredentials: true,
      });
      console.log(res);
      setNewList("");
      props.onHide(res.data._id, res.data.name);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Title id="contained-modal-title-vcenter">Create new list</Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          type="text"
          name="name"
          placeholder="List name"
          value={newList}
          onChange={handleChange}
        ></Input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Close</Button>
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

const Input = styled.input`
  flex-grow: 4;
  height: 3em;

  padding: 0 2em;
  margin: 0.5em 1em 0.5em 0;

  background-color: #f2f2f2;
  border: none;
  border-radius: 56.5px;
`;

export default NewListModal;
